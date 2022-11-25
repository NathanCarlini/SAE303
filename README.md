Git de travail pour la SAE 303

L'objectif est de développer une page avec deux graphs provenant d'une librairie prédéfinie et alimentés par un ou plusieurs datasets internes.
Le dataset d'origine, avant traitement est celui-ci :

https://ourworldindata.org/obesity#obesity-is-responsible-for-4-7-million-premature-deaths-each-year

provenant de https://ourworldindata.org/obesity



Nomenclature pour les noms de fichiers, de dossiers, de variables ainsi que de vesion de codes upload sur git :

    - lowerCamelCase sans espaces ni underscores
    - français et anglais autorisé mais ne pas mixer les deux sur un même nom
    - chiffres autorisés
    - excepté pour les variables incrémentales, les noms ne contenant qu'une lettre sont à eviter
    - si besoin de dater, utiliser le format YYYYMMDD et underscore, puis lowerCamelCase, exemple : 20221125_datasetPresentation.docx

Pour les versions GIT, le push se font sur la branche de travail et le merge avec la main branch se fait ensemble. 
Le message accompagnant de git commit se doit; d'âtre explicatif des modifications apportées aux fichiers.

Les commandes git à utiliser pour upload du taf sont :
    - git status
    - git add .
    - git commit -m "message"
    - git push origin leNomDeLaBranche

Les commandes git à utiliser pour descendre du travail sont :
    - git status
    - git pull origin leNomDeLaBranche

    Pour la page HTML, le style se fera en TailwindCSS