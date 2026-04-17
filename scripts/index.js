//@ts-check
'use strict';
const apiPosts = 'https://lanciweb.github.io/demo/api/pictures/';


fetch(apiPosts)
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    })
    .catch((error) => {
        console.error(error);
    })