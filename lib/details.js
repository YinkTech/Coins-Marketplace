export const details = coinId => {
  if (coinId) {
    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false`).then(function (response) {
      response.json().then(function (data) {
        console.log(data); // idDeatils(data);
      });
    }).catch(function (error) {
      console.log('Fetch Error:', error);
    });
  }

  ;
}; // export const idDeatils = (data) => {
//     const formatToCurrency = amount => {
//         return "$" + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
//     };
//     const coinsList = document.getElementById('coinDetails');
//     const details = data.map(coin => {
//         return `<div class="con-data" id="${coin.id}">
//                     <a class="table-data">${coin.market_cap_rank}</a>
//                     <a class="table-data"><img src="${coin.image}" class="coin-img" alt="coin-image"></a>
//                     <a class="table-data">${coin.name}</a>
//                     <a class="table-data price"> ${formatToCurrency(coin.current_price)}</a>
//                 </div>`
//     });
//     coinsList.insertAdjacentHTML("beforeend", details);
// }