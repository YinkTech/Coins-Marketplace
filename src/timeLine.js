export const timeData = () => {
       fetch(`https://newsdata.io/api/1/news?apikey=pub_1012585392c281e8fa1ce1640b22bffb18ffd&q=crypto&country=ng,gb,us&category=business,technology,world`).then(function(response){
            response.json().then(function(data) {
                console.log(data.results);
                timelineNews(data.results);
            });
        }).catch(function(error) {
            console.log('Fetch Error:', error);
            });
};



export const timelineNews = (data) => {
    const newsTag = document.getElementById('timlineDiv');
        for (let i = 0; i < data.length; i++){
                var  rowes = `<div class="timlineList">
                            <img src="${data[i].image_url}" class="newsImage" alt="news-Image">
                            <h3 class="newsTitle"> ${data[i].title}</h3>
                            <p>${data[i].description}</p>
                            <p><b> Created by: </b>${data[i].creator}</p>
                            <a href="${data[i].link}" class="new-link-fullStory" target="_blank">Full story</a>
                            </div>`
                            newsTag.innerHTML += rowes
        };
};
