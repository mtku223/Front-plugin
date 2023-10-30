// deconetwork.js

// Define and export the function in one step
export const fetchOrderData = async (orderNumber) => {
    console.log('fetchData called');  // New log statement
    try {
      const response = await fetch(`https://crookedmonkey.com/api/json/manage_orders/find`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=mattkustes1&password=ViRkLTFtWz69Fr&criteria[order_number]=${orderNumber}`
      });
  
      if (!response.ok) {
        throw new Error('Failed to fetch order data');
      }
  
      const data = await response.json();
      console.log('fetch complete', data);  // New log statement
      console.log(data);  // Log the data to the console for now
    } catch (error) {
      console.error('Fetch error:', error);
    }
};