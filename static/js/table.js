let container = document.querySelector('.container');
let rows = document.querySelectorAll('.rows');
let cells = document.querySelectorAll('.datas');
if (cells.length > 24) {
    if (window.innerWidth > 500) {
        container.style.width = '29rem';
    }
    container.style.overflowY = 'scroll';
    container.style.overflowX = 'hidden';
    rows.forEach((row) => {
        row.style.height = 'fit-content';
    });
    rows.forEach((row) => {
        row.lastElementChild.style.borderBottom = 'none';
    });




} else {

}