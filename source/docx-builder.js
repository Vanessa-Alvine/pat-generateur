// Minimal client-side .docx (OOXML) builder — no external deps. ZIP uses STORED (uncompressed) entries.

function crc32(bytes) {
  let table = crc32.table;
  if (!table) {
    table = crc32.table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      let c = n;
      for (let k = 0; k < 8; k++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
      table[n] = c >>> 0;
    }
  }
  let crc = 0xFFFFFFFF;
  for (let i = 0; i < bytes.length; i++) crc = table[(crc ^ bytes[i]) & 0xFF] ^ (crc >>> 8);
  return (crc ^ 0xFFFFFFFF) >>> 0;
}

function strToBytes(str) { return new TextEncoder().encode(str); }

function dosDateTime() {
  const d = new Date();
  const time = ((d.getHours() & 0x1F) << 11) | ((d.getMinutes() & 0x3F) << 5) | ((d.getSeconds() >> 1) & 0x1F);
  const date = (((d.getFullYear() - 1980) & 0x7F) << 9) | (((d.getMonth() + 1) & 0xF) << 5) | (d.getDate() & 0x1F);
  return { time, date };
}

export function zipStore(files) {
  const { time, date } = dosDateTime();
  const localParts = [];
  const centralParts = [];
  let offset = 0;
  for (const f of files) {
    const nameBytes = strToBytes(f.name);
    const data = typeof f.data === 'string' ? strToBytes(f.data) : f.data;
    const crc = crc32(data);
    const local = new Uint8Array(30 + nameBytes.length);
    const lv = new DataView(local.buffer);
    lv.setUint32(0, 0x04034b50, true);
    lv.setUint16(4, 20, true);
    lv.setUint16(6, 0, true);
    lv.setUint16(8, 0, true); // stored
    lv.setUint16(10, time, true);
    lv.setUint16(12, date, true);
    lv.setUint32(14, crc, true);
    lv.setUint32(18, data.length, true);
    lv.setUint32(22, data.length, true);
    lv.setUint16(26, nameBytes.length, true);
    lv.setUint16(28, 0, true);
    local.set(nameBytes, 30);
    localParts.push(local, data);

    const central = new Uint8Array(46 + nameBytes.length);
    const cv = new DataView(central.buffer);
    cv.setUint32(0, 0x02014b50, true);
    cv.setUint16(4, 20, true);
    cv.setUint16(6, 20, true);
    cv.setUint16(8, 0, true);
    cv.setUint16(10, 0, true);
    cv.setUint16(12, time, true);
    cv.setUint16(14, date, true);
    cv.setUint32(16, crc, true);
    cv.setUint32(20, data.length, true);
    cv.setUint32(24, data.length, true);
    cv.setUint16(28, nameBytes.length, true);
    cv.setUint16(30, 0, true);
    cv.setUint16(32, 0, true);
    cv.setUint16(34, 0, true);
    cv.setUint16(36, 0, true);
    cv.setUint32(38, 0, true);
    cv.setUint32(42, offset, true);
    central.set(nameBytes, 46);
    centralParts.push(central);

    offset += local.length + data.length;
  }
  const centralStart = offset;
  let centralSize = 0;
  for (const c of centralParts) centralSize += c.length;

  const eocd = new Uint8Array(22);
  const ev = new DataView(eocd.buffer);
  ev.setUint32(0, 0x06054b50, true);
  ev.setUint16(4, 0, true);
  ev.setUint16(6, 0, true);
  ev.setUint16(8, files.length, true);
  ev.setUint16(10, files.length, true);
  ev.setUint32(12, centralSize, true);
  ev.setUint32(16, centralStart, true);
  ev.setUint16(20, 0, true);

  return new Blob([...localParts, ...centralParts, eocd], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
}

export function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' }[c]));
}

const BRAND = '2E5C88';   // deep blue accent
const BRAND_LT = 'EAF1F9'; // light tint for header shading
const INK = '2B2B33';

export function p(text, opts = {}) {
  const { bold, italic, size = 11, color = INK, align, spacingAfter = 60, spacingBefore } = opts;
  const rPr = `${bold ? '<w:b/>' : ''}${italic ? '<w:i/>' : ''}<w:sz w:val="${size * 2}"/><w:color w:val="${color}"/><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/>`;
  const pPr = `${align ? `<w:jc w:val="${align}"/>` : ''}<w:spacing w:after="${spacingAfter}"${spacingBefore !== undefined ? ` w:before="${spacingBefore}"` : ''} w:line="288" w:lineRule="auto"/>`;
  const lines = String(text ?? '').split('\n');
  const runs = lines.map((l, i) => `${i > 0 ? '<w:br/>' : ''}<w:t xml:space="preserve">${esc(l)}</w:t>`).join('');
  return `<w:p><w:pPr>${pPr}</w:pPr><w:r><w:rPr>${rPr}</w:rPr>${runs}</w:r></w:p>`;
}

export function heading(text, opts = {}) {
  const { size = 15 } = opts;
  const rPr = `<w:b/><w:sz w:val="${size * 2}"/><w:color w:val="${BRAND}"/><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/>`;
  return `<w:p><w:pPr><w:spacing w:before="200" w:after="120"/><w:pBdr><w:bottom w:val="single" w:sz="8" w:space="4" w:color="${BRAND}"/></w:pBdr></w:pPr><w:r><w:rPr>${rPr}</w:rPr><w:t xml:space="preserve">${esc(text)}</w:t></w:r></w:p>`;
}

export function bulletList(items, opts = {}) {
  if (!items || !items.length) return p('—', { size: opts.size || 10.5, color: '8A8F98', italic: true });
  return items.map(t => p('•  ' + t, { size: opts.size || 10.5, spacingAfter: 50 })).join('');
}

function cell(contentXml, opts = {}) {
  const { width, shade, valign = 'center' } = opts;
  const tcPr = `${width ? `<w:tcW w:w="${width}" w:type="dxa"/>` : ''}${shade ? `<w:shd w:val="clear" w:fill="${shade}"/>` : ''}<w:vAlign w:val="${valign}"/><w:tcMar><w:top w:w="90" w:type="dxa"/><w:bottom w:w="90" w:type="dxa"/><w:left w:w="130" w:type="dxa"/><w:right w:w="130" w:type="dxa"/></w:tcMar>`;
  return `<w:tc><w:tcPr>${tcPr}</w:tcPr>${contentXml}</w:tc>`;
}

export function table(rows, opts = {}) {
  const { header = false, colWidths, borders = true, zebra = true } = opts;
  const bVal = borders ? 'single' : 'nil';
  const bSz = borders ? 4 : 0;
  const bordersXml = `<w:tblBorders>${['top', 'left', 'bottom', 'right', 'insideH', 'insideV'].map(s => `<w:${s} w:val="${bVal}" w:sz="${bSz}" w:color="D3DBE4"/>`).join('')}</w:tblBorders>`;
  const grid = colWidths ? `<w:tblGrid>${colWidths.map(w => `<w:gridCol w:w="${w}"/>`).join('')}</w:tblGrid>` : '';
  const trs = rows.map((r, ri) => {
    const isHeader = header && ri === 0;
    return `<w:tr>${r.map((c, ci) => {
      const isStr = typeof c === 'string';
      const content = isStr ? c : (c.text ?? '');
      const contentXml = isStr || !c.xml ? p(content, { size: 10.5, bold: isHeader || c.bold, color: isHeader ? 'FFFFFF' : INK, spacingAfter: 30 }) : c.xml;
      let shade = isStr ? undefined : c.shade;
      if (shade === undefined) shade = isHeader ? BRAND : (zebra ? (ri % 2 === 0 ? 'FFFFFF' : 'F7F9FB') : undefined);
      return cell(contentXml, { width: colWidths?.[ci], shade });
    }).join('')}</w:tr>`;
  }).join('');
  return `<w:tbl><w:tblPr><w:tblW w:w="0" w:type="auto"/>${bordersXml}<w:tblLayout w:type="fixed"/></w:tblPr>${grid}${trs}</w:tbl>`;
}

export function pxToEmu(px) { return Math.round(px * 9525); }

export function imageRun(relId, widthPx, heightPx, name = 'Logo') {
  const w = pxToEmu(widthPx), h = pxToEmu(heightPx);
  const id = 100 + Math.floor(Math.random() * 100000);
  return `<w:r><w:drawing><wp:inline xmlns:wp="http://schemas.openxmlformats.org/drawingml/2006/wordprocessingDrawing" distT="0" distB="0" distL="0" distR="0"><wp:extent cx="${w}" cy="${h}"/><wp:effectExtent l="0" t="0" r="0" b="0"/><wp:docPr id="${id}" name="${esc(name)}"/><wp:cNvGraphicFramePr><a:graphicFrameLocks xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" noChangeAspect="1"/></wp:cNvGraphicFramePr><a:graphic xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main"><a:graphicData uri="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:pic xmlns:pic="http://schemas.openxmlformats.org/drawingml/2006/picture"><pic:nvPicPr><pic:cNvPr id="${id}" name="${esc(name)}"/><pic:cNvPicPr/></pic:nvPicPr><pic:blipFill><a:blip r:embed="${relId}"/><a:stretch><a:fillRect/></a:stretch></pic:blipFill><pic:spPr><a:xfrm><a:off x="0" y="0"/><a:ext cx="${w}" cy="${h}"/></a:xfrm><a:prstGeom prst="rect"><a:avLst/></a:prstGeom></pic:spPr></pic:pic></a:graphicData></a:graphic></wp:inline></w:drawing></w:r>`;
}

export function footerPageNumberXml() {
  const rPr = `<w:rPr><w:sz w:val="18"/><w:color w:val="8A8F98"/><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/></w:rPr>`;
  return `<w:p><w:pPr><w:jc w:val="center"/><w:spacing w:after="0"/></w:pPr>` +
    `<w:r>${rPr}<w:t xml:space="preserve">Page </w:t></w:r>` +
    `<w:r>${rPr}<w:fldChar w:fldCharType="begin"/></w:r><w:r>${rPr}<w:instrText xml:space="preserve"> PAGE </w:instrText></w:r><w:r>${rPr}<w:fldChar w:fldCharType="separate"/></w:r><w:r>${rPr}<w:t>1</w:t></w:r><w:r>${rPr}<w:fldChar w:fldCharType="end"/></w:r>` +
    `<w:r>${rPr}<w:t xml:space="preserve"> sur </w:t></w:r>` +
    `<w:r>${rPr}<w:fldChar w:fldCharType="begin"/></w:r><w:r>${rPr}<w:instrText xml:space="preserve"> NUMPAGES </w:instrText></w:r><w:r>${rPr}<w:fldChar w:fldCharType="separate"/></w:r><w:r>${rPr}<w:t>1</w:t></w:r><w:r>${rPr}<w:fldChar w:fldCharType="end"/></w:r>` +
    `</w:p>`;
}

const RELS = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/></Relationships>`;

const STYLES = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:docDefaults><w:rPrDefault><w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri"/><w:sz w:val="22"/><w:color w:val="2B2B33"/></w:rPr></w:rPrDefault></w:docDefaults><w:style w:type="paragraph" w:default="1" w:styleId="Normal"><w:name w:val="Normal"/></w:style></w:styles>`;

function contentTypesXml(hasHeader, hasFooter, hasLogo) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>${hasLogo ? '<Default Extension="png" ContentType="image/png"/>' : ''}<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/><Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>${hasHeader ? '<Override PartName="/word/header1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.header+xml"/>' : ''}${hasFooter ? '<Override PartName="/word/footer1.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml"/>' : ''}</Types>`;
}

function docRelsXml(hasHeader, hasFooter) {
  let rels = `<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>`;
  if (hasHeader) rels += `<Relationship Id="rIdHdr" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/header" Target="header1.xml"/>`;
  if (hasFooter) rels += `<Relationship Id="rIdFtr" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/footer" Target="footer1.xml"/>`;
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${rels}</Relationships>`;
}

function wrapPart(tagName, contentXml) {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:${tagName} xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">${contentXml}</w:${tagName}>`;
}

export function buildDocxBlob(bodyXml, opts = {}) {
  const { headerXml, footerXml, logoBytes } = opts;
  const hasHeader = !!headerXml, hasFooter = !!footerXml, hasLogo = !!logoBytes;
  const sectPr = `<w:sectPr>${hasHeader ? '<w:headerReference w:type="default" r:id="rIdHdr"/>' : ''}${hasFooter ? '<w:footerReference w:type="default" r:id="rIdFtr"/>' : ''}<w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="${hasHeader ? 1500 : 900}" w:right="900" w:bottom="${hasFooter ? 1100 : 900}" w:left="900" w:header="500" w:footer="500"/></w:sectPr>`;
  const documentXml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><w:body>${bodyXml}${sectPr}</w:body></w:document>`;
  const files = [
    { name: '[Content_Types].xml', data: contentTypesXml(hasHeader, hasFooter, hasLogo) },
    { name: '_rels/.rels', data: RELS },
    { name: 'word/document.xml', data: documentXml },
    { name: 'word/_rels/document.xml.rels', data: docRelsXml(hasHeader, hasFooter) },
    { name: 'word/styles.xml', data: STYLES },
  ];
  if (hasHeader) {
    files.push({ name: 'word/header1.xml', data: wrapPart('hdr', headerXml) });
    if (hasLogo) files.push({ name: 'word/_rels/header1.xml.rels', data: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rIdLogo" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/image" Target="media/logo.png"/></Relationships>` });
  }
  if (hasFooter) files.push({ name: 'word/footer1.xml', data: wrapPart('ftr', footerXml) });
  if (hasLogo) files.push({ name: 'word/media/logo.png', data: logoBytes });
  return zipStore(files);
}

export function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}
