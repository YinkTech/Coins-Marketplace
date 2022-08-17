// // async const fetchData = () => {
    
// // }
// async function fetch () {
//     try {
//         const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
//         if (!response.ok) {
//             throw new Error (`failed to fetch resullts: ${response.status}`);
//         }
//         return response.json();
//         console.log(response)
//     } catch (e) {
//         console.log(e);
//     }
// }

// export const getCoins = (coinContainerId) => {
//     const coinContainerElement = document.getElementById(coinContainerId);
//     if (!coinContainerElement) {
//         return;
//     }

//     fetch()
//     .then((datas) => {
//         if (!datas) {
//             coinContainerElement.innerHTML = 'no data.';
//             return;
//         }

//         for (const data of datas) {
//             coinContainerElement.appendChild(dataElement(data));
//         }
//     })
//     .catch((e) => {
//         console.log(e);
//     });
// }

// const dataElement = (data) => {
//     const fistDiv = document.createElement(div);
//     fistDiv.setAttribute('class', 'con-data')

    
//     const secDiv = document.createElement(span);
//     secDiv.setAttribute('class', 'table-data')
//     secDiv.innerHTML = data.name
//     fistDiv.appendChild(secDiv);
    
//     console.log(post.name);
//     return fistDiv;
// }
