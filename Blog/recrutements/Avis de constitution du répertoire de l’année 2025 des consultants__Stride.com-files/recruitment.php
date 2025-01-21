<?php
header("Content-Type: application/json");

// Paramètres de connexion à la base de données
$host = "localhost";
$dbname = 'stride_database';
$username = 'root';
$password = 'root';

try {
    // Connexion à la base de données
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Vérifier si les données ont été envoyées
    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        // Récupérer les données du formulaire
        $nom = htmlspecialchars($_POST["nom"]);
        $prenoms = htmlspecialchars($_POST["prenoms"]);
        $sexe = htmlspecialchars($_POST["sexe"]);
        $domaine = htmlspecialchars($_POST["domaine"]);
        $specialite = htmlspecialchars($_POST["specialite"]);
        $diplome = htmlspecialchars($_POST["diplome"]);
        $telephone = htmlspecialchars($_POST["telephone"]);
        $email = htmlspecialchars($_POST["email"]);
        $experience = intval($_POST["experience"]);
        $missions = intval($_POST["missions"]);
        $institutions = htmlspecialchars($_POST["institutions"]);
        $disponibilite = htmlspecialchars($_POST["disponibilite"]);

        // Préparer la requête d'insertion
        $stmt = $pdo->prepare("
            INSERT INTO recruitment
            (nom, prenoms, sexe, domaine, specialite, diplome, telephone, email, experience, missions, institutions, disponibilite) 
            VALUES 
            (:nom, :prenoms, :sexe, :domaine, :specialite, :diplome, :telephone, :email, :experience, :missions, :institutions, :disponibilite)
        ");

        // Exécuter la requête avec les données
        $stmt->execute([
            ":nom" => $nom,
            ":prenoms" => $prenoms,
            ":sexe" => $sexe,
            ":domaine" => $domaine,
            ":specialite" => $specialite,
            ":diplome" => $diplome,
            ":telephone" => $telephone,
            ":email" => $email,
            ":experience" => $experience,
            ":missions" => $missions,
            ":institutions" => $institutions,
            ":disponibilite" => $disponibilite,
        ]);

        // Répondre avec succès
        echo json_encode(["success" => true]);
        exit;
    }
} catch (PDOException $e) {
    // En cas d'erreur, retourner un message d'erreur
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
    exit;
}
