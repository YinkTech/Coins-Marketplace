export const getData = () => {
  fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`).then(function (response) {
    response.json().then(function (data) {
      console.log(data);
      displayCoins(data);
    });
  }).catch(function (error) {
    console.log('Fetch Error:', error);
  });
};
export const displayCoins = data => {
  const formatToCurrency = amount => {
    return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  const coinsList = document.getElementById('coinDetails');

  for (var i = 0; i < data.length; i++) {
    const item = data[i];
    var row = `<div class="con-data">
                       <span class="table-data" >${item.market_cap_rank}</span>
                       <span class="table-data"><img src="${item.image}" class="coin-img" alt="coin-image"></span>
                       <span class="table-data">${item.name}</span>
                       <span class="table-data price"> ${formatToCurrency(item.current_price)}</span>
                       
                       <button type="button" class="table-data button" id="${item.id}"> View </button>
                       
                    </div>
                    `;
    coinsList.innerHTML += row;
  }

  ;
};