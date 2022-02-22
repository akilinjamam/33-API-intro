
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(respones => respones.json())
        .then(postLoad => displayPost(postLoad))
}


loadPost()

function displayPost(data) {
    const containerPost = document.getElementById('container');
    for (const post of data) {
        const div = document.createElement('div');
        div.classList.add('style')
        div.innerHTML = `
        <h2> ${post.title}</h2>
        <p> ${post.body} </P>
        <p>user id: ${post.id} </P>
        `
        containerPost.appendChild(div);
    }
}