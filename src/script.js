// const fetchData = async () => {
//     try {
//         const response = await fetch('https://crookedmonkey.com/api/json/manage_orders/find', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded',
//             },
//             body: new URLSearchParams({
//                 username: 'mattkustes1',
//                 password: 'ViRkLTFtWz69Fr',
//                 // ...other parameters as needed
//             }),
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.statusText}`);
//         }

//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Fetch error:', error);
//     }
// };

// fetchData();

// script.js

import { fetchOrderData } from './deconetwork.js';

// Call the function with an order number
fetchOrderData('Order-19891');
