function load() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(data => loadAlbums(data))

}

load();

function loadAlbums(albumData) {
    const albumContainer = document.getElementById('albums');

    for (const album of albumData) {
        const p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.fontWeight = 'bold'
        p.innerText = album.title
        albumContainer.appendChild(p);
    }
}