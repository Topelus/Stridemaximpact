// Récupérer le formulaire
const recruitmentForm = document.getElementById("recruitmentForm");

// Charger le plugin intl-tel-input sur l'input de téléphone
const telephoneInput = document.getElementById("telephone");
const iti = window.intlTelInput(telephoneInput, {

    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js", // Nécessaire pour les fonctionnalités avancées
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
                alert("Les informations ont été enregistrées avec succès !");
                recruitmentForm.reset(); // Réinitialiser le formulaire
            } else {
                alert("Erreur : " + data.message);
            }
        })
        .catch((error) => {
            console.error("Erreur :", error);
            alert("Une erreur est survenue lors de l'enregistrement.");
        });
});

