import { details } from "./details.js";
export const getData = () => {
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            displayCoins(data);
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
};





export const displayCoins = (data) => {
    const formatToCurrency = amount => {
        return "$ " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    
   const coinsList = document.getElementById('coinDetails');
    
    for (let i = 0; i < data.length; i++){
        const item = data[i];
        const row = `<div class="con-data" id='${item.id}'>
                       <span class="table-data">${item.market_cap_rank}</span>
                       <span class="table-data"><img src="${item.image}" class="coin-img" alt="coin-image"></span>
                       <span class="table-data">  ${item.name}</span>
                       <span class="table-data price"> ${formatToCurrency(item.current_price)}</span>
                    </div>`
                    coinsList.innerHTML += row;
                    
                    const select = document.getElementById(item.id);
                    select.addEventListener('click', () => {
                        details(item.id);
                    });
    };
};
