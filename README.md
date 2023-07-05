# GererLesSavoirsInutiles
travaux pratique : objection est de concevoir un jeu intitulé "Gérer les savoirs inutiles". 
instruction :

*  Lorsqu'on clique sur le Bouton, alors le données des champs Inputs id= "libelleSavoir", id="auteur",id="date" vont s'afficher directement dans le 
block où l'id ="divResultat", suivant la construction de type liste ol : la données du champs où id="libelleSavoir" est placé dans une balise <h1> et dans une balise <h2> la donnée de l'input où id="auteur" + espace + la donnée de l'input où l'id="date".
tous les champs devront être vide à nouveaux pour une nouvelle saisie de données.

* si un des champs est vide et que le bouton est cliqué alors un Popup d'alert s'affiche avec le message suivant : "Tous les champs sont obligatoires."

* Lorsqu'on rempllie à nouveau tous les champs et que le bouton est cliqué, alors les nouvelles données d'input vont s'afficher de la meme facon que l'ancien block olListeSavoir, mais en dessous du dernier.

* Lorsqu'on clique sur un des affichages ol, cela efface l'affichage du block divResltat concerné sans supprimé l'affichage des autres block affiché qui n'ont pas été cliqué.
* Toutefois lors d'un clique sur un block d'affichage, un popup d'alerte devra s'afficher avec un message d'alerte suivant : "Voulez-vous supprimer le Savoir ?", une fois la confirmation valider, alors la suppression est effectué.

* Pour la gestion de la date de saisie, exploiter la propriété "ValueAsDate" disponible sur l'élément.
