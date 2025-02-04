# Utiliser une image PHP officielle
FROM php:8.1-cli

# Copier les fichiers dans l'image
COPY . /app
WORKDIR /app

# Exposer le port 10000 pour Render
EXPOSE 10000

# Démarrer le serveur PHP intégré
CMD ["php", "-S", "0.0.0.0:10000", "-t", "/app"]

