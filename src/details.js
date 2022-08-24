
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
        const itemsList = data[i];
            var  rows = `<div class="details-cont">
                        <span class="details-data"><img src='${itemsList.image.large}' class="detail-img-cont"></span>
                        <span class="details-data link-details"> ${itemsList.symbol}  •¦•  ${itemsList.name}</span>
                        <span class="details-data link-details">Genesis Date <i class="bi bi-arrows-collapse"></i> ${itemsList.genesis_date}  <i class="bi bi-calendar-plus"></i> </span>
                        <span class="details-data detailsRed"> <a href="${itemsList.links.subreddit_url}" class="link-det" target="_blank"> Sub Reddit </a> <i class="bi bi-reddit"></i>  </span>
                        <span class="details-data detailsGit"> <a href="${itemsList.links.repos_url.github[1]}" class="link-det" target="_blank">  Github </a> <i class="bi bi-github"></i>  </span>
                        <span class="details-data detailsFace">  <a href="https://www.facebook.com/${itemsList.links.facebook_username}" class="link-det" target="_blank">Facebook </a> <i class="bi bi-facebook"></i> </span>
                        <span class="details-data detailsWeb"> <a href="${itemsList.links.homepage[0]}" class="link-det" target="_blank"> ${itemsList.name}.com</a> <i class="bi bi-link-45deg"></i> </span>
                        <span class="details-data detailsDes"> <a href="${itemsList.links.blockchain_site[0]}" class="link-det" target="_blank"> Blockchain Site </a>  <i class="bi bi-link-45deg"></i> </span>
                        <span class="details-data link-details votesDown">Votes <i class="bi bi-graph-down-arrow"></i> ${itemsList.sentiment_votes_down_percentage} % </span>
                        <span class="details-data link-details votesUp">Votes <i class="bi bi-graph-up-arrow"></i> ${itemsList.sentiment_votes_up_percentage} % </span>
                        <span class="decription-show">Read About ${itemsList.name}  <i class="bi bi-three-dots"></i>  <i class="bi bi-arrow-down-circle"></i></span>
                        <span class="decription">${itemsList.description.en} <i class="bi bi-arrow-up-circle-fill decription-hide"></i></span>
                        
                        </div>`
        coinist.innerHTML += rows;
        const decription = document.querySelector('.decription');
        decription.style.display = 'none';
        const decriptionShow = document.querySelector('.decription-show');
        const decriptionHide = document.querySelector('.decription-hide');
        decriptionShow.addEventListener('click', () => {
                decription.style.display = 'block';
                decriptionShow.style.display = 'none';
            });
        decriptionHide.addEventListener('click', () => {
                decription.style.display = 'none';
                decriptionShow.style.display = 'block';
            });
    };
}
