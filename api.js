// what is api(application programming interface)?

// when a user give an order. the website take this order and send it to server through internet.according to the order(the order is data actually). after that, data is processed and interprete through programming.then it return to the user with result.




function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')  //through fetch, data is transfered from server
        .then(response => response.json())
        .then(json => console.log(json))

}

function loadPhoto() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(photoData => console.log(photoData))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(postData => test(postData))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(userData => test(userData))
}


function test(data) {
    const ul = document.getElementById('user');
    for (const user of data) {

        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}
