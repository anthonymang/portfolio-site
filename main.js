function collapse (x) {
    if (x.matches) {
        let collapsing = document.getElementsByClassName('mobile-coll')
        for (let i=0; i < collapsing.length; i++){
            collapsing[i].className = 'collapse'
        }

    } else {
        console.log('desktop')
        let collapsing = document.getElementsByClassName('coll-link')
        for (let i=0; i < collapsing.length; i++){
            collapsing[i].removeAttribute('href');
            collapsing[i].setAttribute('data-bs-toggle', '');
            collapsing[i].style.cursor = 'inherit';
        }
    }
}

let x = window.matchMedia("(max-width: 700px)")
collapse(x)
x.addListener(collapse);