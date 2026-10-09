// Stratégies d'enseignement par catégorie TPALF. Chaque stratégie indique sa source vérifiée.
// Source principale : Ministère de l'Éducation de l'Ontario, « Le curriculum de l'Ontario, de la 1re à la 8e année —
// Actualisation linguistique en français », édition révisée 2010 (section « Les stratégies d'enseignement et
// d'apprentissage », p. 35-38, et « Pistes d'enseignement » des contenus d'apprentissage).
const ALF = 'Curriculum ALF 1re-8e, MÉO 2010';
const S = (txt, ref) => `${txt} (Source : ${ALF}, ${ref})`;


const GL = (txt, ref) => `${txt} (Source : Guide d'enseignement efficace de la lecture, M-3, MÉO 2003, ${ref})`;
const EVEIL = {
  communication_orale: {
    objectif: "Développer la conscience phonologique : entendre, discriminer et produire les sons du français.",
    jeune: [
      GL("Jouer quotidiennement avec les sons : comptines, rimes, frapper les syllabes, trouver l'intrus qui ne rime pas", "chapitre « Conscience phonologique »"),
      GL("Faire discriminer des paires de sons rapprochés ([b]/[p], [f]/[v]) à l'aide d'images et de gestes associés à chaque son", "chapitre « Conscience phonologique »"),
      S("Modeler l'articulation des sons nouveaux et faire répéter l'élève en petit groupe, sans le corriger devant la classe", "p. 36"),
    ],
    ado: [
      S("Faire écouter et répéter de courts énoncés modèles (enregistrements, lecture à voix haute) en ciblant les sons absents de la langue première", "p. 36"),
      S("Utiliser des paires minimales et des jeux de discrimination auditive adaptés à l'âge (dictées de sons, applications audio)", "p. 36-37"),
    ],
  },
  lecture: {
    objectif: "Établir la correspondance entre les sons et les lettres pour amorcer le décodage.",
    jeune: [
      GL("Enseigner explicitement les correspondances lettres-sons, quelques-unes à la fois, avec des mots familiers illustrés", "chapitre « Connaissance des lettres et des sons »"),
      GL("Manipuler des lettres mobiles pour fusionner les sons et former des syllabes, puis des mots simples", "chapitre « Conscience phonologique »"),
      S("Faire de la lecture partagée de textes courts et répétitifs en pointant les mots", "p. 37"),
    ],
    ado: [
      S("Enseigner les graphèmes du français à partir de mots du vocabulaire scolaire, en les comparant au système d'écriture de la langue première", "p. 37"),
      S("Offrir des textes courts adaptés à l'âge et au niveau de langue, lus d'abord à voix haute par l'enseignant", "p. 37"),
    ],
  },
  ecriture: {
    objectif: "Associer les sons entendus aux lettres pour amorcer l'écriture de mots.",
    jeune: [
      GL("Faire écrire des mots simples en segmentant les sons à voix haute (écriture approchée), puis comparer avec la norme", "chapitre « Conscience phonologique »"),
      S("Faire copier et illustrer des mots du mur de mots liés aux thèmes de la classe", "« Bâtir le vocabulaire », p. 37"),
    ],
    ado: [
      S("Faire écrire de courts messages avec banque de mots et modèles de phrases, en ciblant les sons du français", "p. 37"),
      S("Utiliser la dictée de mots fréquents, suivie d'une correction guidée lettre-son", "p. 37"),
    ],
  },
};


// Activités tirées du « Recueil de notions fondamentales de la lecture et de l'écriture, 1re à 4e année »
// (Whissell-Turner et Provost-Larocque, TC Média Livres / MÉO-FPP, 2025), aligné sur l'attente B2 du programme-cadre de français 2023.
const RNF = 'Recueil de notions fondamentales, 1re-4e, 2025';
const R = (txt, ref) => `${txt} (Source : ${RNF}, ${ref})`;
const RECUEIL = {
  'Éveil|communication_orale': [
    R("« Saute-syllabes » : segmenter les mots en syllabes avec un geste moteur (compter sur les doigts, glisser la main le long du bras)", "act. 8, p. 15"),
    R("« Cache-toi » : isoler le premier, le dernier puis le deuxième son d'un mot prononcé lentement à l'unisson", "act. 10, p. 18"),
    R("« Parler en robot » : l'élève segmente un mot chuchoté en sons pour le faire deviner au groupe", "act. 16, p. 21"),
  ],
  'Éveil|lecture': [
    R("« Les petites voitures » ou « Les boules de syllabes » : fusionner deux sons ou deux syllabes en déplaçant des objets de gauche à droite", "act. 5 et 12, p. 13 et 19"),
    R("« J'ai, qui a ? » : jeu en chaîne pour nommer les lettres et leur son à partir d'images du mur de sons", "Connaissance des lettres, act. 3, p. 31"),
    R("« Les dominos » : associer majuscules et minuscules", "Connaissance des lettres, act. 4, p. 32"),
  ],
  'Éveil|ecriture': [
    R("« Boîtes Elkonin » : faire un point dans une case pour chaque son entendu dans un mot dicté, puis écrire les lettres", "act. 18, p. 21"),
    R("« Tracé multisensoriel » : tracer les lettres dans le sable, la farine, la pâte à modeler ou au doigt", "Connaissance des lettres, act. 5, p. 33"),
  ],
  'Reconnaissance des mots, décodage et fluidité': [
    R("« On remet de l'ordre » : découper et réassembler des mots de deux syllabes contenant la correspondance graphème-phonème ciblée", "CGP, act. 4, p. 46"),
    R("« Bingo auto-construit » : l'élève remplit sa carte avec des syllabes ciblées, puis les lit en dyade", "CGP, act. 5, p. 47"),
    R("« Marelle des mots fréquents » et « Cherche le mot » : automatiser la lecture des mots fréquents par le jeu", "Fluidité, act. 1-2, p. 93"),
    R("« La phrase qui allonge » : lire par groupes de mots en allongeant une phrase simple au tableau", "Fluidité, act. 6, p. 96"),
    R("« Théâtre de lecteurs » : relectures répétées d'un texte en équipe pour travailler précision, rythme et expression", "Fluidité, act. 7, p. 97"),
  ],
  'Orthographe lexicale': [
    R("« Détective de la régularité » : observer deux listes de mots classés et formuler la règle (p. ex., m devant m, b, p)", "Régularités, act. 1, p. 63"),
    R("« Découvre la règle » / « Dur ou doux ? » : classer des mots selon le c et le g durs ou doux", "CGP, act. 6-7, p. 49"),
    R("« Dictée métacognitive » : dicter une phrase, puis faire verbaliser les choix orthographiques; pratique quotidienne encouragée", "Régularités, act. 4, p. 64"),
    R("« Les consonnes muettes finales » : trouver la lettre muette grâce à un mot de même famille (p. ex., grand → grande)", "Morphologie, act. 6, p. 70"),
  ],
  'Lexique': [
    R("« Même les mots ont une famille » : construire des familles de mots à partir d'une base commune", "Morphologie, act. 1, p. 68"),
    R("« Observer le contexte à la loupe » puis « le mot à la loupe » : déduire le sens d'un mot inconnu par les indices du contexte et des morphèmes", "Vocabulaire, act. 1-2, p. 84-85"),
    R("« Notre mur de nouveaux mots » : l'élève présente au groupe un mot découvert en lecture et la stratégie utilisée", "Vocabulaire, act. 4, p. 86"),
    R("« Un mot, plusieurs sens » : explorer les sens d'un mot polysémique à l'aide d'images", "Vocabulaire, act. 7, p. 88"),
  ],
  'Élocution (voix et prosodie)': [
    R("« Change de ton ! » : lire une même phrase avec l'intonation du point, du point d'interrogation ou d'exclamation pigé", "Fluidité, act. 5, p. 95"),
    R("« Une lecture enregistrée » : s'exercer à lire un livre, puis l'enregistrer pour des plus jeunes", "Fluidité, act. 3, p. 93"),
  ],
  'Morphosyntaxe': [
    R("« À la recherche des terminaisons muettes » : repérer dans un texte les terminaisons verbales qu'on n'entend pas (ils mangent)", "CGP, act. 10, p. 53"),
    R("« Complète la phrase » : choisir le mot dérivé qui convient à la structure de la phrase", "Morphologie, act. 10, p. 77"),
  ],
  'Organisation du texte': [
    R("« Les champs lexicaux » : dresser un réseau de mots avant d'écrire pour activer les connaissances et éviter la page blanche", "Vocabulaire, act. 5, p. 87"),
  ],
};
const interleave = (a, b) => { const out = []; for (let i = 0; i < Math.max(a.length, b.length); i++) { if (a[i]) out.push(a[i]); if (b[i]) out.push(b[i]); } return out; };

export const STRATEGIES = {
  'Élocution (voix et prosodie)': {
    objectif: "Améliorer la prononciation, le débit et l'intonation à l'oral.",
    jeune: [
      S("Modeler la prise de parole en phrases courtes et simples; reformuler correctement l'énoncé de l'élève sans le corriger devant le groupe", "p. 36 et piste A2.3, 1re et 3e année"),
      S("Utiliser des supports prosodiques (modulation de la voix) et visuels (gestes, expressions du visage) pour faire entendre la langue", "piste A1.2, 1re-3e année"),
    ],
    ado: [
      S("Faire répéter soigneusement les présentations orales (prononciation, accent tonique, débit) puis faire un retour selon des critères", "A2.6-A2.7, 5e-6e année"),
      S("Faire transformer le discours indirect d'un conte en discours direct et jouer l'extrait devant la classe", "pistes A2.6, 5e-8e année"),
    ],
  },
  'Lexique': {
    objectif: "Élargir le vocabulaire fonctionnel et scolaire.",
    jeune: [
      S("Mur de mots accompagné d'exemples contextuels, alimenté au fil des thèmes", "« Bâtir le vocabulaire », p. 37"),
      S("Jeux pour présenter familles de mots, synonymes et termes précis (p. ex., mots croisés à deux partenaires)", "« Enseigner par le jeu », p. 37"),
      S("Exploiter les traductions littérales et les congénères interlinguaux pour créer des référentiels visuels", "piste A2.2, 1re année"),
    ],
    ado: [
      S("Lexique personnel organisé par thèmes et enseignement explicite du vocabulaire scolaire de chaque matière", "« Bâtir le vocabulaire », p. 37"),
      S("Fournir une liste de vocabulaire de la matière avant la lecture, avec formes variables et mots de même famille", "piste B1.4, 4e-6e année; B2.2, 7e-8e année"),
      S("Cartes sémantiques pour étoffer le vocabulaire en écriture", "pistes C1.3, 4e année; C2.1, 8e année"),
    ],
  },
  'Morphosyntaxe': {
    objectif: "Consolider la structure des phrases et les accords.",
    jeune: [
      S("Modèle de la phrase de base avec code de couleurs (sujet en bleu, prédicat en jaune, complément en rose) et cubes ou sacs à jumeler", "pistes Connaissances linguistiques, Lecture 1re-3e année"),
      S("Rétroaction à l'écrit sur une ou deux erreurs fréquentes à la fois", "« Appuyer par rétroaction », p. 36"),
    ],
    ado: [
      S("Enseigner les quatre manipulations linguistiques (remplacement, déplacement, effacement, addition) par modelage", "pistes C3.2, 4e-8e année"),
      S("Flèches des donneurs (noms, pronoms) vers les receveurs d'accord (déterminants, adjectifs, verbes)", "pistes C3.3, 5e-6e année"),
      S("Faire justifier ses hypothèses sur les régularités de la langue et les vérifier dans une grammaire", "piste Connaissances linguistiques, Communication orale 4e-8e année"),
    ],
  },
  'Situations de communication': {
    objectif: "Interagir selon différentes intentions et différents interlocuteurs.",
    jeune: [
      S("Établir des codes visuels pour la position d'écoute (lumière éteinte, pictogramme)", "piste A1.1, 1re-3e année"),
      S("Ajuster son débit, choisir des mots et structures à la portée de l'élève, reformuler et répéter", "« Stratégies de communication orale adaptées », p. 36"),
    ],
    ado: [
      S("Fournir des expressions toutes faites pour intervenir (« Je suis d'accord avec toi, mais… ») et un référentiel personnel", "pistes A2.3-A2.4, 4e-8e année"),
      S("Préciser le registre selon l'interlocuteur (tutoiement, vouvoiement, formules de politesse)", "piste A2.1, 6e année"),
    ],
  },
  'Organisation du discours': {
    objectif: "Structurer et enchaîner ses idées à l'oral.",
    jeune: [
      S("Cube des marqueurs de relation : chaque élève ajoute une phrase avec le marqueur tiré", "piste C3.2, 3e année; « Enseigner par le jeu », p. 37"),
    ],
    ado: [
      S("Cube des marqueurs de relation en prise de parole", "pistes A2.2, 7e-8e année"),
      S("Laisser affichés un schéma conceptuel (texte informatif) ou un schéma narratif pour soutenir le discours", "pistes A1.7, 7e-8e année"),
    ],
  },
  'Organisation du texte': {
    objectif: "Comprendre et produire des textes bien organisés.",
    jeune: [
      S("Écriture partagée : l'enseignant·e sert de scribe pour créer un texte modèle réutilisable", "piste C1.3, 3e année"),
      S("Texte à trous où l'élève replace les marqueurs de relation effacés", "piste C2.1, 3e année"),
    ],
    ado: [
      S("Modeler le repérage de l'idée importante de chaque paragraphe et des organisateurs textuels, référentiels affichés", "pistes B2.4-B2.5, 7e-8e année"),
      S("Organisateurs graphiques et modelage de la rédaction à partir d'un plan", "pistes C2.4, 7e-8e année"),
    ],
  },
  'Cognitif et métacognitif': {
    objectif: "Utiliser et réguler des stratégies d'apprentissage.",
    jeune: [
      S("Modeler à voix haute le raisonnement et le questionnement qui guident une tâche", "« Modeler », p. 36"),
      S("Tableau SVA (savoir, vouloir savoir, apprendre) avant la lecture", "« Étayage en lecture », p. 37"),
    ],
    ado: [
      S("Enseigner des stratégies d'acquisition de la langue : journal de vocabulaire, indices de sens, référentiels", "p. 38"),
      S("Enseignement réciproque : prédire, clarifier, questionner, résumer en groupe", "pistes B3.2, 7e-8e année"),
      S("Objectivation : comparer ses objectifs initiaux et atteints, nommer ses difficultés et ses moyens", "C4.4, 7e-8e année"),
    ],
  },
  'Rapport à la langue': {
    objectif: "Développer la confiance, la sécurité linguistique et l'engagement.",
    jeune: [
      S("Encourager l'élève à puiser dans son vécu et sa langue première pour comprendre et produire", "p. 36"),
      S("Traiter l'erreur comme normale; reformuler sans culpabiliser", "« Appuyer par rétroaction tout en sécurisant l'élève », p. 36"),
    ],
    ado: [
      S("Valoriser des modèles et organismes de la francophonie locale et faire parler de sujets interculturels", "pistes A3.2-A3.3, 4e-8e année"),
      S("Offrir des livres au niveau de l'élève et des cercles de lecture pour le plaisir de lire", "« Offrir de nombreuses occasions de lecture », p. 37"),
    ],
  },
  'Reconnaissance des mots, décodage et fluidité': {
    objectif: "Décoder avec exactitude et lire avec fluidité.",
    jeune: [
      S("Lecture partagée (grand format), lecture guidée en petits groupes, lecture autonome avec entretien individuel", "pistes B2.2, 1re-3e année"),
      S("Modeler l'utilisation des indices visuels, sémantiques et syntaxiques pour confirmer un mot décodé", "piste B2.7, 1re année"),
    ],
    ado: [
      S("Mettre à disposition des textes enregistrés pour écouter en suivant", "pistes B2.1, 7e-8e année; p. 37"),
      S("Enseignement explicite des indices graphophonétiques, sémantiques et syntaxiques", "pistes B2.2, 7e-8e année"),
    ],
  },
  'Orthographe lexicale': {
    objectif: "Consolider l'orthographe d'usage et grammaticale.",
    jeune: [
      S("Mur de mots, étiquettes-mots et dictionnaire visuel pour vérifier l'orthographe en révision", "C3.3, 1re-3e année"),
      S("Séances de révision et correction modelées par l'enseignant·e", "pistes C3.3, 1re-3e année"),
    ],
    ado: [
      S("Laisser des traces de correction selon un code établi, en écriture modelée, partagée et guidée", "pistes C3.5, 4e année; C3.2, 7e-8e année"),
      S("Consulter des ouvrages de référence (dictionnaires de synonymes, d'anglicismes, recueil de verbes, correcteur)", "C3.4, 7e-8e année"),
    ],
  },
  'Descripteurs personnalisés': {
    objectif: 'À déterminer selon les descripteurs ajoutés.',
    jeune: ["Préciser une ou deux stratégies concrètes selon le besoin observé chez l'élève."],
    ado: ["Préciser une ou deux stratégies concrètes et adaptées au contexte disciplinaire de l'élève."],
  },
};

const TIER_BY_ANNEE = { primaire: 'jeune', moyen: 'jeune', intermediaire: 'ado', secondaire: 'ado' };

export function getStrategyInfo(category, anneeTpalf, composanteId) {
  const entry = (category === 'Descripteurs' && EVEIL[composanteId]) ? EVEIL[composanteId] : STRATEGIES[category];
  if (!entry) return { objectif: '', strategies: [] };
  const tier = TIER_BY_ANNEE[anneeTpalf] || 'jeune';
  const base = entry[tier] || entry.jeune || [];
  const rKey = category === 'Descripteurs' ? 'Éveil|' + composanteId : category;
  const extra = (anneeTpalf === 'primaire' || anneeTpalf === 'moyen' || !anneeTpalf) ? (RECUEIL[rKey] || []) : [];
  return { objectif: entry.objectif, strategies: interleave(base, extra) };
}
