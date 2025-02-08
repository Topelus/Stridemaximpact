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
    <link rel="stylesheet" href="../../assets/css/style.css">
    <link rel="stylesheet" href="../../assets/css/font-awesome/css/font-awesome.min.css" type="text/css">
    <link rel="shortcut icon" href="../../assets/images/favicon_io/favicon.ico" type="image/x-icon">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <link rel="stylesheet" href="../../assets/css/cookiebanner.style.css" type="text/css">
    <link rel="stylesheet"
        href="Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com-files/style_r.css"
        type="text/css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/css/intlTelInput.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/intlTelInput.min.js"></script>
    <title>Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com</title>

</head>

<body>

    <?php include('../../assets/blocs/header6.php'); ?>
    <div id="bloc_page">
        <section class="recrut_container">
            <h1> Avis de constitution du répertoire des consultants<br>de STRIDE pour l'année 2025</h1>
            <h5>-Avis de recrutement-</h5>
            <div class="img-banner"></div>
            <p>Nous recherchons des experts qui souhaiteraient collaborer avec nous en 2025 dans les domaines ci-après:
            </p>
            <ul>
                <li>Appui aux Petites et moyennes entreprises (PMEs)</li>
                <li>Études et formations</li>
                <li>Gouvernance, Management et Leadership</li>
                <li>Télécommunications, Communication et Évènementiels</li>
            </ul>
            <p>Date limite d’inscription: (date à insérer) à 18h00.<br>
                Remplissez le formulaire ci-dessous pour soumettre votre dossier. <br>Pour plus de détails, consultez<a
                    href="Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com-files/Profils Experts_Etudes_ Stride.pdf"
                    target="_blank"> le
                    fichier PDF ci-joint</a>
            </p>
            <form id="recruitmentForm" method="POST" action="">
                <label for="nom">Nom:</label>
                <input type="text" id="nom" name="nom" required>

                <label for="prenoms">Prénoms:</label>
                <input type="text" id="prenoms" name="prenoms" required>

                <label for="sexe">Sexe:</label>
                <select id="sexe" name="sexe" required>
                    <option value="">--Choisissez--</option>
                    <option value="Masculin">Masculin</option>
                    <option value="Féminin">Féminin</option>
                </select>

                <label for="domaine">Domaine:</label>
                <select id="domaine" name="domaine" required>
                    <option value="" disabled selected>Sélectionnez un domaine</option>
                    <option value="Economie">Economie</option>
                    <option value="Social">Social</option>
                    <option value="Environnement">Environement</option>
                    <option value="Gouvernance">Gouvernance</option>
                    <option value="Finances_publiques">Finances publiques</option>
                </select>


                <label for="specialite">Spécialité:</label>
                <select id="specialites" name="specialite" disabled>
                    <option value="">--Sélectionnez une spécialité--</option>
                </select>

                <label for="diplome">Diplôme le plus élevé:</label>
                <select id="diplome" name="diplome" required>
                    <option value="" disabled selected>Sélectionnez votre diplôme</option>
                    <option value="BAC">BAC</option>
                    <option value="LICENCE">LICENCE</option>
                    <option value="MASTER">MASTER</option>
                    <option value="MBA">MBA</option>
                    <option value="DOCTORAT">DOCTORAT</option>
                    <option value="AUTRES">AUTRES (à préciser)</option>
                </select>
                <input type="text" id="autreDiplome" name="autreDiplome" placeholder="Précisez votre diplôme"
                    style="display: none;">

                <label for="telephone">Numéro de téléphone (WhatsApp):</label>
                <input type="tel" id="telephone" name="telephone" placeholder="Entrez votre numéro de téléphone"
                    required>

                <label for="email">Adresse email:</label>
                <input type="email" id="email" name="email" required>

                <label for="experience">Nombre d'années d'expérience:</label>
                <input type="number" id="experience" name="experience" required min="0">

                <label for="missions">Nombre de missions déjà réalisées:</label>
                <input type="number" id="missions" name="missions" required min="0">

                <label for="institutions">Expériences avec les institutions internationales:</label>
                <select id="institutions" name="institutions" required>
                    <option value="">OUI/NON</option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                </select>

                <label for="disponibilite">Disponibilité:</label>
                <select id="disponibilite" name="disponibilite" required>
                    <option value="">OUI/NON</option>
                    <option value="OUI">OUI</option>
                    <option value="NON">NON</option>
                </select>

                <button type="submit">Envoyer</button>
            </form>



        </section>
        <section class="contact-CTA">
            <form action="" id="demandeForm">
                <div>
                    <h2>Une question ? Un projet ? Contactez-nous dès maintenant et laissez-nous vous
                        accompagner
                        vers le
                        succès !</h2>
                    <h3>Nous sommes à votre écoute pour répondre à vos besoins et vous offrir des solutions
                        adaptées.</h3>
                    <select id="domaine" name="domaine" required>
                        <option value="">Choisissez un domaine d'intervention</option>
                        <option value="Dévelopement de PMEs">Dévelopement de PMEs</option>
                        <option value="Etudes recherches et formation">Etudes recherches et formation</option>
                        <option value="Gouvernance, management et leadership">Gouvernance, management et leadership
                        </option>
                        <option value="Télécommunications, communication et évènementiel">Télécommunications,
                            communication et évènementiel</option>
                    </select>
                </div>
                <div>
                    <input type="email" id="email" name="email" placeholder="Adresse email" required>
                    <textarea name="message" id="message" placeholder="Message" required></textarea>
                    <input type="submit" value="Envoyer">
                </div>
            </form>
        </section>

    </div>
    <?php include('../../assets/blocs/footer.php'); ?>

    <script>
        $(document).ready(function () {
            cookieBanner.init();
        });
    </script>

</body>
<script src="../../assets/scripts/cookiebanner.script.js"></script>
<script src="../../assets/scripts/alert.js"></script>
<script
    src="Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com-files/recruitment.js"></script>
<script src="../../assets/scripts/newsletter.js"></script>
<script src="../../assets/scripts/legals.js"></script>
<script src="../../assets/scripts/demande.js"></script>

</html>