export const getData = () => {
    if (location) {
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(function(response){
            response.json().then(function(data) {
                console.log(data);
                displayCoins(data);
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            });
    };
};


export const displayCoins = (data) => {
    const formatToCurrency = amount => {
        return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
    };
    
    const coinsList = document.getElementById('coinDetails');
    const details = data.map(coin => {
        return `<div class="con-data">
                    <a class="table-data">${coin.market_cap_rank}</a>
                    <a class="table-data"><img src="${coin.image}" class="coin-img" alt="coin-image"></a>
                    <a class="table-data">${coin.name}</a>
                    <a class="table-data price"> ${formatToCurrency(coin.current_price)}</a>
                </div>`
    });
    coinsList.insertAdjacentHTML("beforeend", details);
}