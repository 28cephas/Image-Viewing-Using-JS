const current = document.querySelector('#current')
const source = document.querySelectorAll('#source img')

source[0].style.opacity=0.3

source.forEach(img => img.addEventListener('click', imgClick))

function imgClick(e){
    current.src = e.target.src

    source.forEach(img => (img.style.opacity=1))

    e.target.style.opacity=0.3
}


