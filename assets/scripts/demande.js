document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("demandeForm");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // Empêche le rechargement de la page

        const formData = new FormData(form);

        try {
            const response = await fetch("assets/scripts/demande.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                showAlert("success", "Votre demande a été envoyée avec succès !");
                form.reset(); // Réinitialise le formulaire
            } else {
                showAlert("error", "Erreur : " + result.message);
            }
        } catch (error) {
            console.error("Erreur :", error);
            showAlert("error", "Une erreur réseau s'est produite. Veuillez réessayer.");
        }
    });
});
