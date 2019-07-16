import React from "react";

import "@zeit-ui/style";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="milk-title">
        <img
          className="zi-avatar milk-logo"
          src="/images/milk.png"
          alt="milk"
        />
        milk
      </h1>
      <p className="zi-title">a magic link for your app</p>
      <div className="zi-card">
        <p>
          <h3>What is milk?</h3>
          Milk gives you a single <strong>magic</strong> link that will redirect
          the user to the correct store to download your app. Why we have to add
          two badges for the App Store and Play Store? With a single milk magic
          link the Android users will see the Play Store and the iOS users the
          App Store.
          <pre>https://milkmagic.link/twitter</pre>
          Obviously instead of <code>twitter</code> you can decide everything
          you want.
        </p>
        <p>
          All links are <strong>human-checked</strong>.
        </p>
        <p>
          <h3>Real examples</h3>
          <a href="https://milkmagic.link/twitter">twitter </a> or{" "}
          <a href="https://milkmagic.link/instagram">instagram</a>
        </p>
        <br />
        <a
          href="https://airtable.com/shrIvWsukFBXl0HyM"
          className="zi-btn success"
        >
          Request your magic link
        </a>
      </div>
      <p className="zi-comment">
        a project by{" "}
        <a href="https://matteomanzinello.com">matteo manzinello</a>
      </p>
    </div>
  );
}

export default App;
