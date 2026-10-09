// Stratégies d'enseignement par catégorie TPALF. Chaque stratégie indique sa source vérifiée.
// Source principale : Ministère de l'Éducation de l'Ontario, « Le curriculum de l'Ontario, de la 1re à la 8e année —
// Actualisation linguistique en français », édition révisée 2010 (section « Les stratégies d'enseignement et
// d'apprentissage », p. 35-38, et « Pistes d'enseignement » des contenus d'apprentissage).
const ALF = 'Curriculum ALF 1re-8e, MÉO 2010';
const S = (txt, ref) => `${txt} (Source : ${ALF}, ${ref})`;

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

export function getStrategyInfo(category, anneeTpalf) {
  const entry = STRATEGIES[category];
  if (!entry) return { objectif: '', strategies: [] };
  const tier = TIER_BY_ANNEE[anneeTpalf] || 'jeune';
  return { objectif: entry.objectif, strategies: entry[tier] || entry.jeune || [] };
}
