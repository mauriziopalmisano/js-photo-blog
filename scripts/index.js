//@ts-check
'use strict';
const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';
const polaroidWallElem = document.querySelector('#polaroid-wall');


fetch(apiPosts)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
        if (polaroidWallElem !== null) {
            polaroidWallElem.innerHTML = polaroidRender(json);
        }
    })
    .catch((error) => {
        console.error(error);
    })