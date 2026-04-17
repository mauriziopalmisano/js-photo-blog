'use strict';
const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';
const polaroidWallElem = document.querySelector('#polaroid-wall');


fetch(apiPosts)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        json.forEach((post, index) => {
            const polaroid = polaroidAssembler(post, index);
            console.log(polaroid);
            polaroid.addEventListener('click', function () {
                const id = this.dataset.id;
                console.log(`Hai cliccato la card numero ${id}`);
            });
            polaroidWallElem.appendChild(polaroid);
        })
    })
    .catch((error) => {
        console.error(error);
    })