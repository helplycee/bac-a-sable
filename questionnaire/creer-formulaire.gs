// Crée le questionnaire d'avis du parcours « Le Bac à sable » dans votre Google Forms.
// 1. Ouvrez https://script.google.com et cliquez sur « Nouveau projet ».
// 2. Collez ce fichier à la place du contenu, puis cliquez sur « Exécuter ».
// 3. Autorisez le script, puis copiez l'adresse affichée dans le journal d'exécution.
function creerFormulaireBacASable() {
  var form = FormApp.create('Le Bac à sable : ton avis');
  form.setDescription(
    'Ce questionnaire sert à améliorer le parcours. Il prend environ 3 minutes et il est anonyme : ' +
    'n\'indique ni ton nom, ni celui d\'une autre personne, ni de détail privé.\n\n' +
    'Il n\'est pas lu en direct. Si tu as besoin de parler à quelqu\'un : un adulte du lycée, ' +
    'Fil Santé Jeunes au 0 800 235 236 (tous les jours, 9 h-23 h), le 3114 (24 h/24) ' +
    'si tu as des idées suicidaires, le 15 ou le 112 en cas de danger immédiat.'
  );
  form.setCollectEmail(false);
  form.setAllowResponseEdits(false);
  form.setLimitOneResponsePerUser(false);
  form.setProgressBar(true);
  form.setConfirmationMessage('Merci ! Corti range ses pinces et te dit à bientôt.');

  form.addMultipleChoiceItem().setTitle('Ta voie (facultatif)')
    .setChoiceValues(['Générale', 'Technologique', 'Professionnelle', 'Autre']);
  form.addCheckboxItem().setTitle('Quelles étapes as-tu faites ?').setRequired(true)
    .setChoiceValues(['1. Ton alarme interne', '2. Ta recette du stress', '3. Le corps d\'abord',
      '4. La chasse aux pensées', '5. Ton kit de plage']);
  echelle(form, 'Le parcours était facile à comprendre.');
  echelle(form, 'Je comprends mieux ce qui provoque mon stress.');
  echelle(form, 'J\'ai trouvé au moins un outil utile pour moi.');
  form.addCheckboxItem().setTitle('Quelles activités t\'ont le plus aidé ? (3 maximum)')
    .setChoiceValues(['Vrai ou faux', 'La recette C.I.N.É.', 'Le tri « Ça dépend de moi ? »',
      'La bulle de respiration', 'Le 5-4-3-2-1', 'Attraper les pensées pièges',
      'Le conseil à ton meilleur ami', 'La carte de plage']);
  form.addMultipleChoiceItem().setTitle('Les vidéos et les lectures étaient…')
    .setChoiceValues(['Utiles', 'Moyennement utiles', 'Peu utiles', 'Je ne les ai pas consultées']);
  form.addMultipleChoiceItem().setTitle('Le ton du parcours était…')
    .setChoiceValues(['Trop enfantin', 'Comme il faut', 'Trop sérieux']);
  form.addMultipleChoiceItem().setTitle('La durée du parcours était…')
    .setChoiceValues(['Trop courte', 'Comme il faut', 'Trop longue']);
  form.addMultipleChoiceItem().setTitle('Penses-tu réutiliser un des outils ?')
    .setChoiceValues(['Oui', 'Peut-être', 'Non']);
  form.addParagraphTextItem().setTitle('Ce que tu changerais ou ajouterais (facultatif, sans détail personnel)');
  form.addParagraphTextItem().setTitle('As-tu rencontré un problème technique ? (facultatif)');

  if (form.setPublished) { form.setPublished(true); }
  Logger.log('Adresse à copier pour les élèves : ' + form.getPublishedUrl());
  Logger.log('Adresse pour modifier le formulaire : ' + form.getEditUrl());
}

function echelle(form, titre) {
  form.addScaleItem().setTitle(titre).setBounds(1, 5)
    .setLabels('Pas du tout d\'accord', 'Tout à fait d\'accord').setRequired(true);
}
