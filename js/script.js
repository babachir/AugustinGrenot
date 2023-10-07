$(document).ready(function () {
    // Demander à l'utilisateur le nombre d'images
    var numberOfImages = prompt("Combien d'images voulez-vous charger ?");

    if (numberOfImages && !isNaN(numberOfImages)) {
        // Convertir le nombre en entier
        numberOfImages = parseInt(numberOfImages);

        // Construire les données des images
        var imageFiles = [];
        for (var i = 1; i <= numberOfImages; i++) {
            var imageUrl = 'images/img' + i + '.jpg'; // Format de nom attendu
            getMetadata(imageUrl);
            var imageMetadata = {
                src: imageUrl,
                hashtag: 'img' + i + '.jpg',
            };
            
            imageFiles.push(imageMetadata);
        }

        // Données à utiliser avec le modèle Mustache
        var data = {
            images: imageFiles
        };

        // Obtenir le modèle Mustache du script avec l'ID "imageListTemplate"
        var template = $('#imageListTemplate').html();

        // Utiliser Mustache pour rendre le modèle avec les données
        var rendered = Mustache.render(template, data);

        // Insérer la liste rendue dans le body
        $('body').append(rendered);
    } else {
        alert("Nombre d'images invalide. Veuillez recharger la page et entrer un nombre valide.");
    }
});

function getMetadata(imageUrl) {
    // Charger l'image
    var img = new Image();
    img.src = imageUrl;

    // Attendez que l'image soit chargée
    img.onload = function () {
        // Récupérer les métadonnées de l'image
        EXIF.getData(img, function () {
            var metadata = EXIF.getAllTags(this);
            console.log(metadata); // Affiche les métadonnées dans la console
        });
    };

    // Gérer les erreurs de chargement de l'image
    img.onerror = function () {
        console.error('Impossible de charger l\'image.');
    };
}