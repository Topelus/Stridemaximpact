<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">
    <!-- custom css links -->
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="shortcut icon" href="assets/images/favicon_io/favicon.ico" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="assets/css/cookiebanner.style.css" type="text/css">
    <title>STRIDE | Accompagnement pour la croissance des PMEs</title>

</head>

<body>
<?php include('assets/blocs/header4.php'); ?>
    <div id="bloc_page">
        <main class="content">
            <div class="container">
                <!-- Règles d'utilisation -->
                <section id="terms-of-use">
                    <h2>Conditions d'utilisation</h2>
                    <p>Bienvenue sur notre site. En accédant à notre plateforme, vous acceptez de respecter les règles
                        suivantes :</p>
                    <ul>
                        <li><strong>Respect des lois :</strong> Vous vous engagez à utiliser notre site dans le respect
                            des
                            lois en vigueur.</li>
                        <li><strong>Utilisation appropriée :</strong> Toute tentative de nuire au bon fonctionnement du
                            site
                            est strictement interdite.</li>
                        <li><strong>Propriété intellectuelle :</strong> Les contenus du site sont protégés par des
                            droits
                            d'auteur et ne doivent pas être copiés sans autorisation préalable.</li>
                    </ul>
                </section>

                <!-- Politique de confidentialité -->
                <section id="privacy-policy">
                    <h2>Politique de confidentialité</h2>
                    <p>Nous attachons une grande importance à la confidentialité de vos données. Voici comment nous les
                        collectons et utilisons :</p>
                    <ul>
                        <li><strong>Collecte de données :</strong> Nous recueillons uniquement les informations
                            nécessaires
                            à l'amélioration de nos services.</li>
                        <li><strong>Utilisation des données :</strong> Vos données ne seront utilisées qu'à des fins
                            internes et jamais partagées sans votre consentement.</li>
                        <li><strong>Protection des données :</strong> Nous utilisons des mesures de sécurité avancées
                            pour
                            protéger vos informations.</li>
                    </ul>
                    <p>Pour plus d'informations, vous pouvez nous contacter à <a
                            href="mailto:contact@stridemaximpact.com">contact@stridemaximpact.com</a>.</p>
                </section>
            </div>
        </main>
        <style>
            body {
                line-height: 1.6;
                margin: 0;
                padding: 0;
                color: #333;
                background-color: #f9f9f9;
            }

            .container {
                width: 90%;
                max-width: 1200px;
                margin: 0 auto;
                padding: 20px;
            }

            .page-header {
                background-color: rgb(187, 109, 1);
                color: #fff;
                padding: 20px 0;
                text-align: center;
            }

            /* .page-header h1 {
                margin: 0;
                font-size: 4.5rem;
            } */

            .page-header p {
                margin: 10px 0 0;
                font-size: 2rem;
                opacity: 0.9;
            }

            .content {
                padding: 40px 0;
                background-color: #fff;
            }

            .content h2 {
                color: rgb(187, 109, 1);
                margin-bottom: 20px;
                font-size: 2.5rem;
                border-bottom: 1px #bb6d01 solid;
                text-align: center;
            }

            .content ul {
                list-style: disc;
                margin-left: 20px;
            }

            .content li {
                margin-bottom: 10px;
            }
        </style>
    </div>
    <?php include('assets/blocs/footer.php'); ?>
    <script src="assets/scripts/alert.js"></script>
    
<script>
    $(document).ready(function() {
        cookieBanner.init();
    });
</script>
</body>
<script src="assets/scripts/cookiebanner.script.js"></script>
<script src="assets/scripts/newsletter.js"></script>
<script src="assets/scripts/legals.js"></script>

</html>