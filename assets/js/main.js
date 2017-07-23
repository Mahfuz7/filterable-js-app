/**
 * JavaScript Functionality
 */

let filterInput = document.getElementById('filterInput');

filterInput.addEventListener('keyup', filterNames );

function filterNames() {
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names ul
    let ul = document.getElementById('names');

    // Get lis from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item li
    for( i = 0; i < li.length; i++ ) {
        let a = li[i].getElementsByTagName('a')[0];

        if( a.innerHTML.toUpperCase().indexOf(filterValue) > -1 ) {
            li[i].style.display = '';
        }else {
            li[i].style.display = 'none';
        }
    }

}
