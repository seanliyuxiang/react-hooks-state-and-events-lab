import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // useState hook to track light/dark modes
  const [isDarkMode, setIsDarkMode] = useState(false);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light";

  function toggleDarkLightModesHandler() {
    setIsDarkMode(isDarkMode => !isDarkMode);
    // setIsDarkMode(!isDarkMode);
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkLightModesHandler}>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
