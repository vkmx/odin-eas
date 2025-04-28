let gridLength = 16;
let gridSize = gridLength * gridLength;
let container = document.querySelector('.grid');
let gridItems = document.createDocumentFragment();
let itemSize = `${100/gridLength}%`;

for( let i = 0; i < gridSize; i++ ){
    let item = document.createElement('div');
    item.className = 'grid-item';
    item.style.minWidth = itemSize;
    item.style.minHeight = itemSize;

    gridItems.appendChild( item );
}

container.appendChild( gridItems );

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

container.addEventListener( 'mouseover', ( event ) => {
    const target = event.target;

    setColor( target );
    setOpacity( target );
});