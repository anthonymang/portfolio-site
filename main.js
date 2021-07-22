function collapse (x) {
    if (x.matches) {
        let pizza = document.getElementById('collapsePizza')
        let share = document.getElementById('collapseShare')
        let gallery = document.getElementById('collapseGallery')
        let point = document.getElementById('collapsePONR')
        let collapsing = [pizza, gallery, point, share]
        console.log(collapsing)
        for (let i=0; i < collapsing.length; i++){
            collapsing[i].className = 'collapse'

        }

    } else {
        console.log('desktop')
        let collapsing = document.getElementsByClassName('coll-link')
        for (let i=0; i < collapsing.length; i++){
            console.log(collapsing[i])
            collapsing[i].removeAttribute('href');
            collapsing[i].setAttribute('data-bs-toggle', '');
            collapsing[i].style.cursor = 'inherit';
        }
    }
}

let x = window.matchMedia("(max-width: 700px)")
collapse(x)
x.addListener(collapse);