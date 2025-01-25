document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("newsletterForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const email = document.getElementById("nl_email").value;
        const consent = document.getElementById("consent").checked;

        const formData = new FormData();
        formData.append("email", email);
        formData.append("consent", consent);

        try {
            const response = await fetch("assets/scripts/newsletter.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                showAlert("success", "Merci de vous être abonné à notre newsletter !");
                form.reset(); // Réinitialise le formulaire
            } else {
                showAlert("error", "Erreur : " + result.message);
            }
        } catch (error) {
            // console.error("Erreur :", error);
            showAlert("error", "Une erreur est survenue. Veuillez réessayer.");
        }
    });
});
