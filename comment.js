function load() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(dataComment => loadComment(dataComment))
}

load();

function loadComment(commentData) {
    const commentContainer = document.getElementById('comments')

    for (const comment of commentData) {
        const p = document.createElement('p');
        p.classList.add('style')
        p.innerHTML = `
        <P> ${comment.body} </p>
        `
        commentContainer.appendChild(p);
    }
}