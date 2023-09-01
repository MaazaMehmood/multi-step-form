//getting elements
const allItems = document.querySelectorAll('.sidebar ul li a');
const allSteps = document.querySelectorAll('.form-step');
const btnNext = document.querySelectorAll('.btn-next');
const btnPrev = document.querySelectorAll('.btn-prev');
const card = document.querySelectorAll('#cd');

let i = 0;

//Next-Button
allSteps[i].classList.add('show');
btnNext.forEach(btn => {
    btn.addEventListener('click', function (e) {
        allSteps[i].classList.remove('show');
        i += 1;
        allSteps[i].classList.add('show');
        for(let i = 0; i <allItems.length; i++) {  //loop to remove previous active classes
            allItems[i].classList.remove("active");
            allItems[i].style.color = "hsl(217, 100%, 97%)";
        }
        allItems[i].classList.add("active");
        allItems[i].style.color = "hsl(213, 96%, 18%)";
    });
});

//Go-Back-Button
btnPrev.forEach(btn => {
    btn.addEventListener('click', function (e) {
        allSteps[i].classList.remove('show');
        i -= 1;
        allSteps[i].classList.add('show');
        for(let i = 0; i <allItems.length; i++) { //loop to remove previous active classes
            allItems[i].classList.remove("active");
            allItems[i].style.color = "hsl(217, 100%, 97%)";
        }
        allItems[i].classList.add("active");
        allItems[i].style.color = "hsl(213, 96%, 18%)";  
    });  
});

// plan cards color on select
for (var n = 0; n< card.length; n++) {
  card[n].addEventListener("click", function() {
    [...document.getElementsByClassName("select")].forEach(ele => {
        ele.classList.remove("select")
    });
    this.classList.add("select");
  });
}

//onClick toggle button change content
let month = document.querySelector('#monthly');
let year = document.querySelector('#yearly');


document.querySelector('.switch input').addEventListener('change', e => { 
    e.target.checked ? yearData() : year.style.color = '#b6b4b4';
    e.target.checked ? month.style.color = '#b6b4b4' : monthData();
});

const yearData = () => {
    const yrData = ['90', '120', '150', '10', '20', '20']
    year.style.color = 'hsla(213, 94%, 25%, 0.842)';
    let p = document.querySelectorAll('#mo');
    p.forEach((paragraph, index) => {
        paragraph.textContent = `$${yrData[index]}/yr`;
    });    
}

const monthData = () => {
    const moData = ['9', '12', '15', '1', '2', '2']
    month.style.color = 'hsla(213, 94%, 25%, 0.842)' ;
    let p = document.querySelectorAll('#mo');
    p.forEach((paragraph, index) => {
        paragraph.textContent = `$${moData[index]}/mo`;
    });
} 





