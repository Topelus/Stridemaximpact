<?php
header('Content-Type: application/json');
header("Content-Security-Policy: default-src 'self'; script-src 'self';");
header("X-Frame-Options: DENY");
header("X-Content-Type-Options: nosniff");
header("Referrer-Policy: no-referrer");
header("Strict-Transport-Security: max-age=31536000; includeSubDomains");

$host = 'localhost';
$dbname = 'stride_database';
$username = 'root';
$password = 'root';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "message" => "Erreur de connexion : " . $e->getMessage()]);
    exit;
}

function sanitize_input($data) {
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = sanitize_input($_POST['nom'] ?? '');
    $prenom = sanitize_input($_POST['prenom'] ?? '');
    $domaine = sanitize_input($_POST['domaine'] ?? '');
    $email = sanitize_input($_POST['email'] ?? '');
    $message = sanitize_input($_POST['message'] ?? '');

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Adresse email invalide."]);
        exit;
    }

    if (strlen($message) > 500) {
        echo json_encode(["success" => false, "message" => "Le message est trop long (500 caractères max)."]);
        exit;
    }

    $sql = "INSERT INTO demandes (nom, prenom, domaine, email, message) VALUES (:nom, :prenom, :domaine, :email, :message)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([
            ':nom' => $nom,
            ':prenom' => $prenom,
            ':domaine' => $domaine,
            ':email' => $email,
            ':message' => $message,
        ]);
        echo json_encode(["success" => true, "message" => "Demande enregistrée avec succès."]);
    } catch (Exception $e) {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'enregistrement : " . $e->getMessage()]);
    }
}
?>
