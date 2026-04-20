'use strict';
//funzione per creare l'intera polaroid in modo dinamico ed avere completo accesso 
//ad ogni punto della polaroid e grazie a questo approccio ho potuto metterer 
//un event listener direttamente sugli elementi della polaroid che m'interessavano
//senza dover mettere un eventlistener su tutta la row 
function polaroidAssembler(polaroidData, index) { 
    const col = document.createElement('div');
    //da ricordare se si sta creando un nuovo elemento del DOM si puó tranquillamente 
    //usare il className dato che non c'é nulla da sovrascrivere 
    // ma se l'elemento esiste giá bisogna usare il classList.add per aggiornare la lista delle classi 
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
    imgPolaroid.addEventListener('click', (event) => {
    openOverlay(imgPolaroid.src);
});
    
    const titlePolaroid = document.createElement('p');
    titlePolaroid.className = 'm-0 mt-2';
    titlePolaroid.textContent = polaroidData.title;
    
    const datePolaroid = document.createElement('p');
    datePolaroid.className = 'm-0 date-font';
    datePolaroid.textContent = polaroidData.date;
    

    //qui ho avuto un pó di problemi all'inizio perché mi ero dimenticato che é importante
    //l'ordine d'incapsulamento dei vari elementi creati devo usare piú spesso il metodo createElement
    //infatti per questo mi sono sforzato di crare tutto in questo modo
    polaroid.append(pinPolaroid, imgPolaroid, titlePolaroid, datePolaroid);
    col.appendChild(polaroid);
   

    //questo qui sotto era il modo nel quale ho risolto la prima parte della creazione della pagina
    //dato che il mio unico obbiettivo era quello creare la pagina in modo dinamico senza preoccuparmi
    //come avere accesso per i singoli elementi della pagina cosa che mi e stata fatta notare in seguito
    // perché per il mio punto di vista avevo in mente di sfruttare il bubbling sulla row e poi fare diversi 
    //controlli per capire dove l'event click fosse generato

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


function openOverlay(imageSrc) {
    const overlay = document.createElement('div');
    overlay.className = 'custom-overlay';

    const bigImg = document.createElement('img');
    bigImg.src = imageSrc;
    bigImg.className = 'overlay-img';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '<i class="bi bi-x-circle text-white"></i>';

    closeBtn.addEventListener('click', (event) => {
        overlay.remove();
        document.body.classList.remove('overflow-hidden');
    });

    overlay.append(bigImg, closeBtn);

    document.body.appendChild(overlay);
    document.body.classList.add('overflow-hidden');
}