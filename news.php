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
    <?php include('assets/blocs/header3.php'); ?>
    <div id="bloc_page">
        <style>
            .blog {
                padding: 30px 60px;
                background-color: #f9f9f9;
                display: flex;
                justify-content: space-between;
                position: relative;
                box-sizing: border-box;
            }

            .blog h1 {
                text-align: center;
                margin-bottom: 10px;
                font-size: 2.5rem;
            }

            .blog .container {
                width: 100%;
            }

            .search-bar {
                display: flex;
                justify-content: center;
                margin-bottom: 20px;
            }

            .search-bar input {
                width: 50%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                outline: none;
            }

            .search-bar button {
                padding: 10px 15px;
                margin-left: 5px;
                background-color: rgb(187, 109, 1);
                color: #fff;
                border: none;
                border-radius: 5px;
                cursor: pointer;
            }

            .blog-categories {
                width: 200px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                flex-shrink: 0;
            }

            .blog-categories div {
                width: 200px;
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

            .category-btn {
                padding: 10px 20px;
                border: none;
                background-color: transparent;
                color: #555;
                cursor: pointer;
                text-align: left;
                transition: 200ms ease-in-out;
            }

            .category-btn.active {
                /* background-color: rgb(187, 109, 1);*/
                color: rgb(187, 109, 1);
                border-left: 5px rgb(187, 109, 1) solid;
                transition: 200ms ease-in-out;
            }

            .blog-content {
                width: 100%;
                display: flex;
                gap: 20px;
                justify-content: center;
                flex-wrap: wrap;
            }

            .blog-item {
                width: 300px;
                height: auto;
                box-sizing: border-box;
                padding: 20px;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 2px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                justify-content: center;
                /* flex-shrink: 1; */
            }

            .img_article {
                width: 100%;
                height: 300px;
            }

            .img_article img {
                width: 100%;
                /* height: 300px; */
            }

            .blog-item h3 {
                margin-bottom: 10px;
            }

            .blog-item p {
                color: #666;
            }

            .blog-item a {
                text-decoration: none;
                color: rgb(187, 109, 1);
            }

            .blog-item .descript {
                height: 200px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        </style>

        <section class="blog" id="blog">
            <!-- Blog Categories -->

            <div class="blog-categories">
                <h3>Catégories</h3>
                <div>
                    <button class="category-btn active" data-category="all">Tous</button>
                    <button class="category-btn" data-category="articles">Articles</button>
                    <button class="category-btn" data-category="events">Évènements</button>
                    <button class="category-btn" data-category="recruitments">Recrutements</button>
                </div>
            </div>
            <div class="container">
                <!-- <p class="intro">Découvrez nos derniers articles, évènements et opportunités de recrutement.</p> -->

                <!-- Search Bar -->
                <div class="search-bar">
                    <input type="text" id="blogSearch"
                        placeholder="Recherchez un article, un évènement ou un recrutement..." />
                    <button type="button" id="searchBtn"><i class="fa fa-search"></i> Rechercher</button>
                </div>
                <!-- Blog Content -->
                <div class="blog-content">
                    <!-- Articles -->
                    <div class="blog-item" data-category="articles">
                        <div class="img_article"></div>
                        <div class="descript">
                            <h3>Les dernières tendances du secteur</h3>
                            <p>Découvrez les avancées récentes et les conseils d'experts pour réussir dans votre
                                domaine.
                            </p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div>
                    <!-- <div class="blog-item" data-category="articles">
                        <div class="img_article"></div>
                        <div class="descript">
                            <h3>Conseils pour les entrepreneurs</h3>
                            <p>Des stratégies éprouvées pour développer votre entreprise et optimiser vos résultats.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div> -->

                    <!-- Events -->
                    <!-- <div class="blog-item" data-category="events">
                        <div class="img_article"></div>
                        <div class="descript">
                            <h3>Conférence sur l'innovation</h3>
                            <p>Participez à notre événement annuel sur l'innovation et les nouvelles technologies.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div>
                    <div class="blog-item" data-category="events">
                        <div class="img_article"></div>
                        <div class="descript">
                            <h3>Atelier sur la gestion de projet</h3>
                            <p>Un atelier interactif pour renforcer vos compétences en gestion de projet.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div> -->

                    <!-- Recruitments -->
                    <div class="blog-item" data-category="recruitments">
                        <div class="img_article"><img
                                src="Blog/recrutements/Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com-files/close-up-hand-with-magnifying-glass-_1_.webp"
                                alt=""></div>
                        <div class="descript">
                            <h3>Avis de constitution du répertoire de l’année 2025 des consultants</h3>
                            <p>Nous recherchons des experts voulant collaborer avec notre entreprise pour ...</p>
                            <a
                                href="Blog/recrutements/Avis de constitution du répertoire de l’année 2025 des consultants__Stride.com.php">En
                                savoir plus</a>
                        </div>
                    </div>
                    <!-- <div class="blog-item" data-category="recruitments">
                        <div class="img_article"></div>
                        <div class="descript">
                            <h3>Offre de stage : Marketing</h3>
                            <p>Nous recherchons un stagiaire en marketing pour accompagner nos projets stratégiques.</p>
                            <a href="">En savoir plus</a>
                        </div>
                    </div> -->
                </div>
            </div>
        </section>
        
    <?php include('assets/blocs/contactCTA.php'); ?>

    </div>
    <?php include('assets/blocs/footer.php'); ?>
    <script src="assets/scripts/alert.js"></script>
    <script>
        $(document).ready(function () {
            cookieBanner.init();
        });

</body>
<script src="assets/scripts/cookiebanner.script.js"></script>
<script src="assets/scripts/newsletter.js"></script>
<script src="assets/scripts/news.js"></script>
<script src="assets/scripts/demande.js"></script>

</html>