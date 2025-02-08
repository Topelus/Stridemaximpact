// Récupérer le formulaire
const recruitmentForm = document.getElementById("recruitmentForm");

// Charger le plugin intl-tel-input sur l'input de téléphone
const telephoneInput = document.getElementById("telephone");
const iti = window.intlTelInput(telephoneInput, {
  initialCountry: "auto",
  geoIpLookup: function (callback) {
    fetch('https://ipapi.co/json/') // API pour obtenir la localisation via IP
      .then(response => response.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("BJ")); // Valeur par défaut si l'API échoue
  },

  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js", // Nécessaire pour les fonctionnalités avancées
});



// Optionnel : Ajouter un gestionnaire pour obtenir le numéro formaté
phoneInput.addEventListener("blur", () => {
  const isValid = iti.isValidNumber();
  const formattedNumber = iti.getNumber(); // Numéro formaté avec l'indicatif
  if (isValid) {
    console.log("Numéro valide :", formattedNumber);
  } else {
    console.log("Numéro invalide !");
  }
});







const specialitesParDomaine = {
  Economie: [
    "Expert Économiste du développement",
    "Expert Économiste de la Santé / santé publique",
    "Expert en finances (durable et locale)",
    "Expert Statisticien en évaluation d’impact",
    "Expert Statisticien en études statistiques et enquêtes",
    "Expert Économiste spécialisé en évaluation d’impact",
    "Expert Planificateur en évaluations de politiques publiques",
    "Expert agronome"
  ],
  Social: [
    "Expert sociologue en dynamiques sociales et protection sociale",
    "Expert sociologue du développement",
    "Expert Sociologue spécialisé en évaluation d’impact",
    "Expert anthropologue",
    "Expert démographe",
    "Expert éducateur/Spécialiste en politiques éducatives",
    "Expert en politiques culturelles",
    "Expert historien",
    "Expert en Santé publique/épidémiologiste",
    "Expert/Coach en Entreprenariat et accompagnement des AGR"
  ],
  Environnement: [
    "Expert en changement climatique",
    "Expert géographe aménagiste",
    "Expert Économiste de l’environnement"
  ],
  Gouvernance: [
    "Expert en Gouvernance publique / gouvernance de l’Administration publique",
    "Expert analyste géopolitique et géostratégique",
    "Expert politologue",
    "Expert en diplomatie",
    "Expert en sécurité (cybercriminalité, terrorisme, etc)"
  ],
  Finances_publiques: [
    "Expert en finances publiques avec des expériences en politique fiscale",
    "Expert en finances publiques avec des expériences en investissements cases"
  ]
};

const domainesSelect = document.getElementById("domaine");
const specialitesSelect = document.getElementById("specialites");

domainesSelect.addEventListener("change", () => {
  const domaineChoisi = domainesSelect.value;
  specialitesSelect.innerHTML = '<option value="">--Sélectionnez une spécialité--</option>';
  specialitesSelect.disabled = !domaineChoisi;

  if (domaineChoisi) {
    const specialites = specialitesParDomaine[domaineChoisi];
    specialites.forEach(specialite => {
      const option = document.createElement("option");
      option.value = specialite;
      option.textContent = specialite;
      specialitesSelect.appendChild(option);
    });
  }
});






// Affichage du champ "Autres" si nécessaire
document.getElementById("diplome").addEventListener("change", function () {
  const autreDiplomeField = document.getElementById("autreDiplome");
  if (this.value === "AUTRES") {
    autreDiplomeField.style.display = "flex";
    autreDiplomeField.setAttribute("required", "required");
  } else {
    autreDiplomeField.style.display = "none";
    autreDiplomeField.removeAttribute("required");
  }
});


const autreDiplome = document.getElementById("autreDiplome").value; // Champ "Autres"
// Gestion des diplômes : vérifier si "AUTRES" est sélectionné
let diplomeFinal = diplome === "AUTRES" ? autreDiplome : diplome;

// Écouter l'événement de soumission
recruitmentForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les données du formulaire
  const formData = new FormData(recruitmentForm);

  // Envoyer les données via AJAX
  fetch("Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com-files/recruitment.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success) {
        showAlert("success", "Les informations ont été enregistrées avec succès !");
        recruitmentForm.reset(); // Réinitialiser le formulaire
      } else {
        showAlert("error", "Erreur : " + data.message);
      }
    })
    .catch((error) => {
      console.error("Erreur :", error);
      alert(error);
      showAlert("error", "Une erreur est survenue. Veuillez réessayer.");
    });
});

