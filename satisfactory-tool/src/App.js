import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        Satisfactory Tool
      </header>

      <main>
        <section>
          <h1>Calculator</h1>
          <p>
            Based on the game 'Satisfactory' by CoffeeStain Studios, this
            application can be utilized for calculating total raw resources
            needed to make a bunch of items, for use either in expansion or
            meeting project milestones. For a deeper explanation about
            Satisfactory see the bottom of the page.
          </p>

          <form>
            <h2>New Item to be Crafted - </h2>
            <label for='element'>Select an ingot:</label>
            <select id='element' name='element' required>
              <option value='iron'>Iron</option>
              <option value='copper'>Copper</option>
              <option value='steel'>Steel</option>
            </select>

            <label for='craftedItem'>Select recipe: </label>
            <select id='craftedItems' name='craftedItems' required>
              <option value='plate'>Plate</option>
              <option value='rod'>Rod</option>
              <option value='screws'>Screws</option>
            </select>
            <label for='craftQuantity'>
              How many of the selected item(s) would you like to craft?
            </label>
            <input
              type='number'
              id='craftQuantity'
              name='craftQuantity'
              value='1'
              required
            />

            <fieldset>
              <input type='reset' class='btn btn-warning' />
              <input type='submit' id='submit' class='btn btn-success' />
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <h2>Footer Nav</h2>
        <button class='btn btn-info' onclick='Singleton.toggleHiddenDesc()'>
          Toggle Game Description
        </button>
        <section id='hiddenDesc'>
          <p>
            Satisfactory is an FPS open-world factory building sim. You play as
            an engineer on an alien planet tasked to complete ‘Project Assembly’
            - a massive machine for a mysterious purpose. Conquer nature, build
            multi-story factories, and automate to satisfaction!
          </p>
        </section>
      </footer>
    </div>
  );
}

export default App;
