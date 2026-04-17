'use strict';
function polaroidRender(array) {
    let cardString = '';
    for (const card of array) {
        cardString += `
        <div class="col-12 col-md-6 col-lg-4 mb-3">
            <div class="polaroid">
                <img src="./img/pin.svg" alt="" class="pin-polaroid ">
                <img src=${card.url} alt="${card.title}" class="img-fluid">
                <p class="m-0">${card.title}</p>
                <p class="m-0 date-font">${card.date}</p>
            </div>
        </div>`
    }
    return cardString;
}