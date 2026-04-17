'use strict';
function polaroidAssembler(polaroidData, index) {
    const col = document.createElement('div');
    col.className = 'col-12 col-md-6 col-lg-4 mb-4';
    col.dataset.id = index;
    
    const polaroid = document.createElement('div');
    polaroid.className = 'polaroid';
    
    const pinPolaroid = document.createElement('img');
    pinPolaroid.src = './img/pin.svg';
    pinPolaroid.alt = 'puntina';
    pinPolaroid.className = 'pin-polaroid';
    
    const imgPolaroid = document.createElement('img');
    imgPolaroid.src = polaroidData.url;
    imgPolaroid.alt = polaroidData.title;
    imgPolaroid.className = 'img-fluid';
    
    const titlePolaroid = document.createElement('p');
    titlePolaroid.className = 'm-0 mt-2';
    titlePolaroid.textContent = polaroidData.title;
    
    const datePolaroid = document.createElement('p');
    datePolaroid.className = 'm-0 date-font';
    datePolaroid.textContent = polaroidData.date;
    
    polaroid.append(pinPolaroid, imgPolaroid, titlePolaroid, datePolaroid);
    col.appendChild(polaroid);
   
    //let cardString = '';
    //for (const card of array) {
        // cardString += `
        // <div class="col-12 col-md-6 col-lg-4 mb-4">
        //     <div class="polaroid">
        //         <img src="./img/pin.svg" alt="" class="pin-polaroid ">
        //         <img src=${card.url} alt="${card.title}" class="img-fluid">
        //         <p class="m-0 mt-2">${card.title}</p>
        //         <p class="m-0 date-font">${card.date}</p>
        //     </div>
        // </div>`
    //}
    return col;
}