console.log("HIYA")

// const btns = document.querySelectorAll('.p-button');
const psheets = document.querySelectorAll('.pricesheet');


function addStyles() {
    this.classList.add('pselected')
    this.children[1].classList.add('btnselected')
}

function removeStyles() {
    this.classList.remove('pselected')
    this.children[1].classList.remove('btnselected')
}


for (let psheet of psheets) {
    psheet.addEventListener('mouseover', addStyles);
    psheet.addEventListener('mouseout', removeStyles);
    psheet.addEventListener('click', addStyles);
}


// when click on .pricesheet add class selected and remove from all other items
