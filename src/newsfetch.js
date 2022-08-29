export const newsData = () => {
        fetch(`https://api.coingecko.com/api/v3/search/trending`).then(function(response){
            response.json().then(function(data) {
                console.log(data.coins);
                displayNews(data.coins);
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            });
};

export const displayNews = (data) => {
    const newsList = document.getElementById('newsDetails');
        for (let i = 0; i < data.length; i++){
                var  rowes = `<div class="news-data">
                                <a class="news-table-data"><img src="${data[i].item.large}" class="coin-img" alt="coin-image"></a>
                                <a class="news-table-data">${data[i].item.name}</a>
                                <a class="news-table-data price"><b>$</b> ${data[i].item.price_btc}</a>
                             </div>`
                            newsList.innerHTML += rowes
        };
};
