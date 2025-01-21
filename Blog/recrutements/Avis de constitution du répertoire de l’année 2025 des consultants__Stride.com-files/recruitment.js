// Récupérer le formulaire
const recruitmentForm = document.getElementById("recruitmentForm");

// Charger le plugin intl-tel-input sur l'input de téléphone
const telephoneInput = document.getElementById("telephone");
const iti = window.intlTelInput(telephoneInput, {
    // initialCountry: "auto", // Détecte automatiquement le pays de l'utilisateur
    // geoIpLookup: (callback) => {
    //     fetch("https://ipinfo.io?token=YOUR_IPINFO_TOKEN") // Remplacez avec un token valide
    //         .then((response) => response.json())
    //         .then((data) => callback(data.country))
    //         .catch(() => callback("us"));
    // },
    utilsScript:
        "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.min.js", // Nécessaire pour les fonctionnalités avancées
});

// const phoneInputField = document.querySelector("#telephone");
// const phoneInput = window.intlTelInput(phoneInputField, {
//   utilsScript:
//     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
// });

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
