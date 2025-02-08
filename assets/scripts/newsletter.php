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

function sanitize_input($data)
{
    return htmlspecialchars(strip_tags(trim($data)), ENT_QUOTES, 'UTF-8');
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = sanitize_input($_POST['email'] ?? '');
    $consent = filter_var($_POST['consent'] ?? '', FILTER_VALIDATE_BOOLEAN);

    // Validation des données
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["success" => false, "message" => "Adresse email invalide."]);
        exit;
    }

    if (!$consent) {
        echo json_encode(["success" => false, "message" => "Le consentement est obligatoire."]);
        exit;
    }

    // Enregistrement dans la base de données
    $sql = "INSERT INTO newsletter (email, consent) VALUES (:email, :consent)";
    $stmt = $pdo->prepare($sql);

    try {
        $stmt->execute([
            ':email' => $email,
            ':consent' => $consent,
        ]);

        echo json_encode(["success" => true, "message" => "Inscription réussie."]);
    } catch (PDOException $e) {
        // Gérer les erreurs, par ex. email déjà existant
        if ($e->getCode() == 23000) { // Code erreur MySQL pour violation de contrainte UNIQUE
            echo json_encode(["success" => false, "message" => "Cet email est déjà inscrit."]);
        } else {
            echo json_encode(["success" => false, "message" => "Erreur : " . $e->getMessage()]);
        }
    }
}
?>