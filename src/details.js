
export const details = (coinId) => {
    if (coinId) {
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=false&community_data=true&developer_data=false&sparkline=false`).then(function(response){
            response.json().then(function(data) {
                console.log([data]);
                idDeatils([data]);
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            });
    };
};

export const idDeatils = (data) => {
    const coinist = document.getElementById('detail-cont');
    for (let i = 0; i < data.length; i++){
            var  rows = `<div class="details-cont">
                        <span class="details-data"><img src='${data[i].image.large}' class="detail-img-cont"></span>
                        <span class="details-data link-details"> ${data[i].symbol}  •¦•  ${data[i].name}</span>
                        <span class="details-data link-details">Genesis Date •• ${data[i].genesis_date}  ••</span>
                        <span class="details-data"> <a href="${data[i].subreddit_url}" class="link-det" target="_blank"> Sub Reddit </a></span>
                        <span class="details-data"> <a href="${data[i].links.repos_url.github[1]}" class="link-det" target="_blank">  Github Repo</a> •¦• <a href="https://www.facebook.com/${data[i].links.facebook_username}" class="link-det" target="_blank">Facebook Page</a></span>
                        <span class="details-data"> <a href="${data[i].links.homepage[0]}" class="link-det" target="_blank"> ${data[i].name}.com</a></span>
                        <span class="details-data"> <a href="${data[i].links.blockchain_site[0]}" class="link-det" target="_blank"> Blockchain Site </a></span>
                        <span class="details-data link-details">Votes Percentage Down¦ ${data[i].sentiment_votes_down_percentage} ↓↓</span>
                        <span class="details-data link-details">Votes Percentage Up¦ ${data[i].sentiment_votes_up_percentage} ⇈</span>
                        <span class="decription">${data[i].description.en}</span>
                        
                        </div>`
        coinist.innerHTML += rows
    }


// export const idDeatils = (data) => {
    // const newsList = document.getElementById('newsDetails');
    // const newsDetails = data.coins.map(coin => {
    //     return 
    // });
    // newsList.insertAdjacentHTML("beforeend", newsDetails);
}
//     // const formatToCurrency = amount => {
//     //     return "$ " + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
//     // };
    
//    const coinist = document.getElementById('detail-cont');
    
//     for (let i = 0; i < data.length; i++){
//         const item = data[i];
//         const row = `<div class="con-data" id='${item.id}'>
//                        <span class="table-data">${item.market_cap_rank}</span>
//                        <span class="table-data">${item.symbol}</span>
//                        <span class="table-data">  ${item.name}</span>
//                     </div>`
//                     coinist.innerHTML += row;
//     };
// };
