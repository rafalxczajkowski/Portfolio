//Change active button and active section
const sectBtn = document.querySelectorAll('.control')

for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', () => {
        document.querySelector('.active-btn').classList.remove('active-btn')
        sectBtn[i].className += ' active-btn'
        let id = sectBtn[i].dataset.id
        document.querySelector('.active').classList.remove('active')
        document.getElementById(id).classList.add('active')
    })
}

//Toggle theme
const html = document.querySelector('html')
html.dataset.theme = 'dark'
const themeBtn = document.querySelector('.theme-btn')
themeBtn.addEventListener('click', () => {
    if (html.dataset.theme == 'dark') {
        html.dataset.theme = 'light'
    } else {
        html.dataset.theme = 'dark'
    }
})

//Progress bars width - HTML, CSS, JS, React, Python, NumPy/Pandas, SQL, Django

let skill_perc = ['40%', '40%', '35%', '25%', '35%', '30%', '25%', '10%']
skillbars = document.getElementsByClassName('skill')
bartexts = document.getElementsByClassName('prog-text')
for (let i in skill_perc) {
    skillbars[i].style.width = skill_perc[i]
    bartexts[i].innerHTML = skill_perc[i]
}