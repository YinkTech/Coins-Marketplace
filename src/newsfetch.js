// export const newsData = () => {
//         fetch(`https://api.coingecko.com/api/v3/search/trending`).then(function(response){
//             response.json().then(function(data) {
//                 console.log(data.coins);
//                 displayNews(data);
//             });
//         }).catch(function(error) {
//             console.log('Fetch Error:', error);
//             });
// };

// export const displayNews = (data) => {
    
//     const newsList = document.getElementById('newsDetails');
//     const newsDetails = data.coins.map(coin => {
//         return `<div class="news-data">
//                     <a class="news-table-data"><img src="${coin.item.large}" class="coin-img" alt="coin-image"></a>
//                     <a class="news-table-data">${coin.item.name}</a>
//                     <a class="news-table-data price"><b>$</b> ${coin.item.price_btc}</a>
//                </div>`
//     });
//     newsList.insertAdjacentHTML("beforeend", newsDetails);
// }