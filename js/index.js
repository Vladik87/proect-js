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
       <h2>Price:  ${price} $</h2>
        </div>
        `

    });


}

setCards()

let currenc = document.querySelector('.flag');
currenc?.addEventListener('click', currency);
let regExp = '\$'



function currency(event) {
    let flag = event.target.getAttribute('Alt');
      
    if (flag === 'BY') {
        setCurrencyBy()
    }
    if (flag === 'RUB') {
        setCurrencyRub()
    }
    if (flag === 'USD') {
       setCurrencyUsd()
    }

}


async function setCurrencyBy() {

    let data = await getData('https://api.nbrb.by/exrates/rates/431');
    let by = data.Cur_OfficialRate;
    

    let res = await getData('https://fakestoreapi.com/products');
   
    res.forEach(({ title, image, category, description, price }) => {
        let f = (price*by).toFixed(2)
         let car = document.querySelector('.card');
        car.innerHTML = `
        <div class="card"> 
        <p>${category}</p>
        <h3>${title}</h3>
        <div class="imag">
         <img src = ${image} alt = ${title}>
       </div>
       <span>${description}</span>
       <h2>Price:  ${f} BY</h2>
        </div>
        `
        cards?.append(car)
    });
}

async function setCurrencyRub() {

    let data = await getData('https://www.cbr-xml-daily.ru/daily_json.js', { mode: 'no-cors'});

    let rub = data.Valute.USD.Value;
    rub = rub.toFixed(2)
    
let res = await getData('https://fakestoreapi.com/products');
   
    res.forEach(({ title, image, category, description, price }) => {
        let f = (price*rub).toFixed(2)
         let car = document.querySelector('.card');
        car.innerHTML = `
        <div class="card"> 
        <p>${category}</p>
        <h3>${title}</h3>
        <div class="imag">
         <img src = ${image} alt = ${title}>
       </div>
       <span>${description}</span>
       <h2>Price:  ${f} RUB</h2>
        </div>
        `
        cards?.append(car)
    });
}

async function setCurrencyUsd(){
    let res = await getData('https://fakestoreapi.com/products');
   
    res.forEach(({ title, image, category, description, price }) => {       
         let car = document.querySelector('.card');
        car.innerHTML = `
        <div class="card"> 
        <p>${category}</p>
        <h3>${title}</h3>
        <div class="imag">
         <img src = ${image} alt = ${title}>
       </div>
       <span>${description}</span>
       <h2>Price:  ${price} $</h2>
        </div>
        `
        cards?.append(car)
    });
}



