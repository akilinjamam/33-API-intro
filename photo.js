function load() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photoData => takingPhoto(photoData))
}


load();

function takingPhoto(dataRcv) {

    const photoContainer = document.getElementById('photo');

    for (const photo of dataRcv) {
        const creatingPhoto = document.createElement('img');
        creatingPhoto.src = photo.url;
        photoContainer.appendChild(creatingPhoto);
    }
}