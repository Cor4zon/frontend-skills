
const ul = document.querySelector('.background-image')
const backgroundImages = ul.children;

const buttonNext = document.querySelector('.right-scroll');
const buttonPrev = document.querySelector('.left-scroll');

let slotID = 0;
backgroundImages[slotID].style.display = 'block';


buttonNext.addEventListener('click', () => {
    backgroundImages[slotID++].style.display = 'none';
    slotID = (slotID > 4) ? 0 : slotID;

    backgroundImages[slotID].style.display = 'block';
})

buttonPrev.addEventListener('click', () => {
    backgroundImages[slotID--].style.display = 'none';
    slotID = (slotID < 0) ? 4 : slotID;

    backgroundImages[slotID].style.display = 'block';
})


const dotSet = document.querySelector('.dot-set').children;

for (let dot of dotSet) {
    dot.addEventListener('click', event => {
        backgroundImages[slotID].style.display = 'none';
        slotID = event.target.id % 10;
        backgroundImages[slotID].style.display = 'block';
    })
}