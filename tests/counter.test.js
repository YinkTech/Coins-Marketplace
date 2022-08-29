/**
 * @jest-environment jsdom
 */

import { counter } from "../src/counter.js";
const coins = [{
    coin_id: '1',
    name: 'bitcoin',
    price_btc: '$ 21,633.00',
},
{
    coin_id: '2',
    name: 'Ethereum',
    price_btc: '$ 1,621.17',
},
{
    coin_id: '3',
    name: 'Tether',
    price_btc: '$ 1.00',
},
];

describe('Test Coin counter', () => {
    test('it return the number of coins', () => {
        expect(counter(coins)).toBe(3);
    });
});