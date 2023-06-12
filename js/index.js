"use strict"
let filter = document.querySelector('.filter')


async function getData(url) {

    let res = await fetch(url)

    let data = await res.json();

    return data;
}


let cards = document.querySelector('.cards');

async function setCards() {

    let data = await getData('https://fakestoreapi.com/products');
    console.log(data);

    data.forEach(({ title, image, category, description, price }) => {
        cards.innerHTML += `
        <div class="card"> 
        <p>${category}</p>
        <h3>${title}</h3>
        <div class="imag">
         <img src = ${image} alt = ${title}>
       </div>
       <span>${description}</span>
       <h2>Price:  ${price}$</h2>
        </div>
        `

    });


}

setCards()

let currenc = document.querySelector('.flag');
currenc.addEventListener('click', currency);
let regExp = '\$'



function currency(event) {
    let flag = event.target.getAttribute('Alt');
    console.log(flag);
    if (flag === 'BY') {        
        setCurrencyBy()
        
    }
    if(flag === 'RUB') {
        setCurrencyRub()
    }
    if(flag === 'USD'){
        location.reload(true);
    }

}


async function setCurrencyBy() {
    
    let data = await getData('https://api.nbrb.by/exrates/rates/431');
    let by = data.Cur_OfficialRate;
    let card = document.querySelectorAll('.card h2');
    console.log(card);
    card.forEach((elem) => {
        let f = elem.innerText;
        let a = f.replace(regExp, '')
        f = +a.split(' ')[1];      
        let d = (f*by).toFixed(2)
       elem.innerHTML=`Price: ${d}BY`
        
    })

}

async function setCurrencyRub() {

    let data = await getData('https://www.cbr-xml-daily.ru/daily_json.js');
    
    let rub = data.Valute.USD.Value;
    rub = rub.toFixed(2)  
    
    let card = document.querySelectorAll('.card h2');
    
    card.forEach((elem) => {
        let f = elem.innerText;        
        let a = f.replace(regExp, '')
        f = +a.split(' ')[1];      
        let d = (f*rub).toFixed(2)
       elem.innerHTML=`Price: ${d}RUB`
        
    })

}



