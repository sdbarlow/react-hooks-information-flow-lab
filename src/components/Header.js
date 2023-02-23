import React, { useState } from "react";

function Header({ onDarkModeClick, darkModeVal }){
    return (
        <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {darkModeVal ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}


export default Header;