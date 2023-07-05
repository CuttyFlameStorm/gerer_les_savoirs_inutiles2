
/*

instruction :

*  Lorsqu'on clique sur le Bouton, alors le données des champs Inputs id= "libelleSavoir", id="auteur",id="date" vont s'afficher directement dans le 
block où l'id ="divResultat", suivant la construction de type liste ol : la données du champs où id="libelleSavoir" est placé dans une balise <h1> et dans une balise <h2> la donnée de l'input où id="auteur" + espace + la donnée de l'input où l'id="date".
tous les champs devront être vide à nouveaux pour une nouvelle saisie de données.

* si un des champs est vide et que le bouton est cliqué alors un Popup d'alert s'affiche avec le message suivant : "Tous les champs sont obligatoires."

* Lorsqu'on rempllie à nouveau tous les champs et que le bouton est cliqué, alors les nouvelles données d'input vont s'afficher de la meme facon que l'ancien block olListeSavoir, mais en dessous du dernier.

* Lorsqu'on clique sur un des affichages ol, cela efface l'affichage du block divResltat concerné sans supprimé l'affichage des autres block affiché qui n'ont pas été cliqué.
* Toutefois lors d'un clique sur un block d'affichage, un popup d'alerte devra s'afficher avec un message d'alerte suivant : "Voulez-vous supprimer le Savoir ?", une fois la confirmation valider, alors la suppression est effectué.

* Pour la gestion de la date de saisie, exploiter la propriété "ValueAsDate" disponible sur l'élément.


*/


// ***********************************************

// Fonction appelée lors du clic sur le bouton "Ajouter"
function ajouter() {
    let libelleSavoir = document.getElementById("libelleSavoir").value;
    let auteur = document.getElementById("auteur").value;
    let date = document.getElementById("date").valueAsDate;
  
    // Vérification des champs vides
    if (libelleSavoir === "" || auteur === "" || date === null) {
      alert("Tous les champs sont obligatoires.");
      return;
    }
  
    let divResultat = document.getElementById("divResultat");
    let olListeSavoir = document.getElementById("olListeSavoir");
  
    // Création des éléments pour l'affichage des données saisies
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
  
    // Remplissage des données saisies dans les éléments créés
    h1.textContent = libelleSavoir;
    h2.textContent = auteur + " " + formatDate(date);
  
    // Ajout des éléments à la liste ordonnée
    li.appendChild(h1);
    li.appendChild(h2);
    olListeSavoir.appendChild(li);
  
    // Ajout de la gestion de l'événement de clic pour supprimer l'affichage
    li.addEventListener("click", function(event) {
      if (confirm("Voulez-vous supprimer le Savoir ?")) {
        li.parentNode.removeChild(li);
      }
    });
  
    // Réinitialisation des champs de saisie
    document.getElementById("libelleSavoir").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("date").value = "";
  }
  
  // Fonction pour formater la date au format "jj/mm/aaaa"
  function formatDate(date) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
  
    return day + "/" + month + "/" + year;
  }
  
  
  
  