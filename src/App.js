import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // This function will be used later to initiate the search
    console.log("Search for:", searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crooked Monkey Order Search</h1>
        <div>
          <input
            type="text"
            placeholder="Enter order number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="order-info">
          <p>Order Number: order 23453</p>
          <p>Shipping Address: 1104 S Brook St.</p>
        </div>
      </header>
    </div>
  );
}

export default App;
