// Structure/taxonomie du TPALF (années d'études, composantes, paliers, catégories).
// Ceci NE CONTIENT AUCUN descripteur du TPALF : les descripteurs sont saisis/importés
// par l'utilisatrice ou l'utilisateur depuis les PDF officiels (https://tpalf.ca), et
// stockés dans la banque locale (localStorage) gérée par l'application.

export const ANNEES = [
  { id: 'primaire', label: 'Primaire (1re-3e)' },
  { id: 'moyen', label: 'Moyen (4e-6e)' },
  { id: 'intermediaire', label: 'Intermédiaire (7e-8e)' },
  { id: 'secondaire', label: 'Secondaire (9e-12e)' },
];

export const COMPOSANTES = [
  {
    id: 'communication_orale',
    label: 'Communication orale',
    eveilLabel: 'Éveil : développement de la conscience phonologique',
    categories: ['Élocution (voix et prosodie)', 'Lexique', 'Morphosyntaxe', 'Situations de communication', 'Organisation du discours', 'Cognitif et métacognitif', 'Rapport à la langue'],
    pdf: {
      primaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/communication-orale/Primaire-CO-complet.pdf',
      moyen: 'https://cdn.cforp.io/cdn/tpalf/continuums/communication-orale/Moyen-CO-complet.pdf',
      intermediaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/communication-orale/Intermediaire-CO-complet.pdf',
      secondaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/communication-orale/Secondaire-CO-complet.pdf',
    },
  },
  {
    id: 'lecture',
    label: 'Lecture',
    eveilLabel: 'Éveil à la lecture',
    categories: ['Reconnaissance des mots, décodage et fluidité', 'Lexique', 'Morphosyntaxe', 'Situations de communication', 'Organisation du texte', 'Cognitif et métacognitif', 'Rapport à la langue'],
    pdf: {
      primaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/lecture/Primaire-Lecture-complet.pdf',
      moyen: 'https://cdn.cforp.io/cdn/tpalf/continuums/lecture/Moyen-Lecture-complet.pdf',
      intermediaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/lecture/Intermediaire-Lecture-complet.pdf',
      secondaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/lecture/Secondaire-Lecture-complet.pdf',
    },
  },
  {
    id: 'ecriture',
    label: 'Écriture',
    eveilLabel: "Éveil à l'écriture",
    categories: ['Orthographe lexicale', 'Lexique', 'Morphosyntaxe', 'Situations de communication', 'Organisation du texte', 'Cognitif et métacognitif', 'Rapport à la langue'],
    pdf: {
      primaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/ecriture/Primaire-Ecriture-complet.pdf',
      moyen: 'https://cdn.cforp.io/cdn/tpalf/continuums/ecriture/Moyen-Ecriture-complet.pdf',
      intermediaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/ecriture/Intermediaire-Ecriture-complet.pdf',
      secondaire: 'https://cdn.cforp.io/cdn/tpalf/continuums/ecriture/Secondaire-Ecriture-complet.pdf',
    },
  },
  {
    id: 'personnalise',
    label: 'Personnalisé',
    eveilLabel: 'Éveil',
    categories: ['Descripteurs personnalisés'],
    pdf: {},
  },
];

export const PALIERS = [
  { id: 'eveil', label: 'Éveil', sub: 'palier préalable' },
  { id: 1, label: 'Palier 1', sub: 'très grand besoin • appui intensif' },
  { id: 2, label: 'Palier 2', sub: 'grand besoin • appui soutenu' },
  { id: 3, label: 'Palier 3', sub: 'besoin modéré • appui occasionnel' },
  { id: 4, label: 'Palier 4', sub: 'besoin léger • appui ponctuel' },
];

export function composanteById(id) { return COMPOSANTES.find(c => c.id === id); }
export function palierById(id) { return PALIERS.find(p => String(p.id) === String(id)); }
