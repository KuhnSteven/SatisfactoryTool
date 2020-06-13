import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Satisfactory Tool
      </header>

      <main>
        <section>
          <h1>Calculator</h1>
          <p>text</p>

          <form>
            <h2>New Item to be Crafted - </h2>
            <label for="craftedItem">Select what you would like to craft: </label>
              <select id="craftedItems" name="craftedItems" required>
              <option value="plate">Plate</option>
              <option value="rod">Rod</option>
              <option value="screws">Screws</option>
            </select>
            <label for="craftQuantity">How many of the selected item(s) would you like to craft?</label>
            <input type="number" id="craftQuantity" name="craftQuantity" value="1" required />

              <label for="element">Select an element:</label>
              <select id="element" name="element" required>
                <option value="iron">Iron</option>
                <option value="copper">Copper</option>
                <option value="steel">Steel</option>
              </select>

              <input type="reset" class="btn btn-warning" />
              <input type="submit" id="submit" class="btn btn-success" />
          </form>

        </section>
      </main>

      <footer>
        <h2>Footer Nav</h2>
      </footer>
    </div>
  );
}

export default App;
