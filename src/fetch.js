import { details } from "./details.js";
import { counter } from "./counter.js"
let rawData = [];
let filteredData = [];
export const getData = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(function(response){
        response.json().then(function(data) {
          //  console.log(data);
            rawData = data;
            filteredData = rawData;
            displayCoins(filteredData);
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
};

const searchElement = document.getElementById("coinsearch");
searchElement.onkeyup = (e)=>{
e.preventDefault();
search(searchElement.value);
clearScreen();
displayCoins(filteredData);
}
const clearScreen = ()=>{
const coinsList = document.getElementById('coinDetails');
coinsList.innerHTML = "";
}
const search = (keyword)=>{
    if(keyword == ""){
        filteredData = rawData;
        return;
    }
   filteredData =  rawData.filter((e)=>e.name.toLowerCase() === keyword.toLowerCase())
   console.log(filteredData);
}

const onclickFn = (id)=> {
    console.log(`Console log coming ${id}`);
}

function searchTable (value, data){
    var filterdData = []
    for (var i = 0; i < data.length; i++){
        value = value.toUpperCase()
        var name = data[i].FULL_NAME

        if (name.includes(value)){
            filterdData.push(data[i])
        }
    }
    return filterdData;
}

export const displayCoins = (data) => {
    const formatToCurrency = amount => {
        return "$ " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
   const coinsList = document.getElementById('coinDetails');
   const count = document.getElementById('counts');
   const ul = document.createElement("div");
    for (let i = 0; i < data.length; i++){
        const item = data[i];
        const li= document.createElement("div")
        const countof = counter(data)
        const row = `<div class="con-data" id='${item.id}'>
                       <span class="table-data">${item.market_cap_rank}</span>
                       <span class="table-data"><img src="${item.image}" class="coin-img" alt="coin-image"></span>
                       <span class="table-data">  ${item.name}</span>
                       <span class="table-data price"> ${formatToCurrency(item.current_price)}</span>
                    </div>`
                    count.innerHTML = countof;
                    const overlay = document.getElementById('overlay');
                    const down = document.getElementById('coinDlist');
                    li.innerHTML = row;
                    li.onclick = ()=>{
                            details(item.id)
                            overlay.style.display = 'block';
                            down.style.display = 'none';
                    };
                ul.appendChild(li)
    };
                coinsList.appendChild(ul)
};

/* eslint-enable import/no-cycle, consistent-return */