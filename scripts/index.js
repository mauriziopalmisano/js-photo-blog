'use strict';
const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';
const polaroidWallElem = document.querySelector('#polaroid-wall');


fetch(apiPosts)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        json.forEach(post => {
            const polaroid = polaroidAssembler(post);
            polaroidWallElem.appendChild(polaroid);
        })
    })
    .catch((error) => {
        console.error(error);
    })