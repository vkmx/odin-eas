let gridLength = 16;
let container = document.querySelector('.grid');
let button = document.querySelector('.container button');

createGrid();

function setOpacity(element) {
    let currentOpacity = element.style.opacity;

    if( currentOpacity === '1' ) return;

    let opacity = Number( currentOpacity ) + 0.1;
    element.style.opacity = opacity;
}

function getRandomRGBColor(){

    let r = Math.ceil( Math.random() * 255 );
    let g = Math.ceil( Math.random() * 255 );
    let b = Math.ceil( Math.random() * 255 );

    return `rgb(${r} ${g} ${b})`;
}

function setColor( element ){

    let currentBackgroundColor = element.style.backgroundColor;

    if( currentBackgroundColor !== '' ) return;

    element.style.backgroundColor = getRandomRGBColor();
}

function createGrid(){

    let gridSize    = gridLength * gridLength;
    let gridItems   = document.createDocumentFragment();
    let itemSize    = `${200/gridLength}px`;

    container.innerHTML = '';

    for( let i = 0; i < gridSize; i++ ){
        let item = document.createElement('div');
        item.className = 'grid-item';
        item.style.padding = itemSize;

        gridItems.appendChild( item );
    }

    container.appendChild( gridItems );

}

container.addEventListener( 'mouseover', ( event ) => {
    const target = event.target;

    setColor( target );
    setOpacity( target );
});

button.addEventListener( 'click', (event) => {

    let newGridLength = prompt( 'Enter grid size' );

    if( newGridLength <= 100 ){
        gridLength = newGridLength;
        createGrid();
    } else {
        alert ( 'Grid size cannot be more than 50' );
    }

});