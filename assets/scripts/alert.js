function showAlert(type, message) {
    const overlay = document.getElementById("overlay");
    const alertMessage = document.getElementById("alertMessage");

    // Appliquer la classe en fonction du type
    alertMessage.className = `alert ${type}`;
    alertMessage.innerHTML = `
        <span class="icon">${type === "success" ? "✔️" : type === "error" ? "❌" : "ℹ️"}</span>
        ${message}
    `;

    // Afficher l'overlay
    overlay.style.display = "flex";

    // Masquer automatiquement après 5 secondes
    setTimeout(() => {
        overlay.style.display = "none";
    }, 5000);
}
