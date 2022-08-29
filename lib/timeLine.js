export const timeData = () => {
  fetch(`https://newsdata.io/api/1/news?apikey=pub_1012585392c281e8fa1ce1640b22bffb18ffd&q=crypto&country=ng,gb,us&category=business,technology,world`).then(function (response) {
    response.json().then(function (data) {
      console.log(data.results);
      timelineNews(data);
    });
  }).catch(function (error) {
    console.log('Fetch Error:', error);
  });
};
export const timelineNews = data => {
  const newsTag = document.getElementById('timlineDiv');
  const newsDetail = data.results.map(newsSort => {
    return `<div class="timlineList">
                    <img src="${newsSort.image_url}" class="newsImage" alt="news-Image">
                    <h3 class="newsTitle"> ${newsSort.title}</h3>
                    <p>${newsSort.description}</p>
                    <p><b> Created by: </b>${newsSort.creator}</p>
                    <a href="${newsSort.link}" class="new-link-fullStory" target="_blank">Full story</a>
                    </div>`;
  });
  newsTag.insertAdjacentHTML("beforeend", newsDetail);
};