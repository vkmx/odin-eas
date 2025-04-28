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

container.addEventListener( 'mouseover', ( event ) => {
    const target = event.target;

    target.style.backgroundColor = 'black';
    setOpacity(target);
});