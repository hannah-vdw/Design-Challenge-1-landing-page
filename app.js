
// const btns = document.querySelectorAll('.p-button');
const psheets = document.querySelectorAll('.sheet');


psheets.forEach(psheet => {

    psheet.addEventListener('click', function() {

        psheets.forEach(psht => {
            psht.classList.remove('pselected')
            psht.children[1].classList.remove('btnselected')

            this.classList.add('pselected')
            this.children[1].classList.add('btnselected')   
        })
    })
})




