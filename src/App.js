import React from "react";

import "@zeit-ui/style";

import "./App.css";

function App() {
  return (
    <div>
      <h1>
        <img
          className="zi-avatar milk-logo"
          src="/images/milk.png"
          alt="milk"
        />
        milk
      </h1>
      <p class="zi-title">a magic link for your app</p>
      <div class="zi-card">
        <p>
          no more double badges, just a single link that opens the correct store
          for the device, try{" "}
          <a href="https://milkmagic.link/twitter">twitter app</a>
        </p>
        <a href="https://airtable.com/shrIvWsukFBXl0HyM" class="zi-btn success">
          Request your magic link
        </a>
      </div>
      <p class="zi-comment">
        a project by{" "}
        <a href="https://matteomanzinello.com">matteo manzinello</a>
      </p>
    </div>
  );
}

export default App;
