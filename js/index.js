"use strict"
let filter = document.querySelector('.filter')


async function getData(url) {

    let res = await fetch(url)

    let data = await res.json();

    return data;
}


let count = 0;
async function setFilter() {

    let data = await getData('https://starline-alarm.by/starline/category_search');
    console.log(data);

    
        }



      
  


setFilter()

