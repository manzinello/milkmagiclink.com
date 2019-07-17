import React from "react";

import "@zeit-ui/style";

import "mailgo";

import "./App.css";

function App() {
  return (
    <div className="milk-app">
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
        <h3>What is milk?</h3>
        <p>
          Milk gives you a single <strong>magic</strong> link that will redirect
          the user to the correct store to download your app. Why we have to add
          two badges for the App Store and Play Store? With a single milk magic
          link the Android users will see the Play Store and the iOS users the
          App Store. <u>No more double badges!</u>
        </p>
        <pre class="zi-dark" style={{ marginTop: 5, marginBottom: 5 }}>
          https://milkmagic.link/twitter
        </pre>
        <p>
          Obviously instead of <code>twitter</code> you can decide everything
          you want.
        </p>
        <p>
          All links are <strong>human-checked</strong>.
        </p>

        <h3>Real examples</h3>
        <p>
          Try to click these buttons from iOS, from Android or from desktop.
        </p>
        <div className="milk-examplelinks">
          <a
            href="https://milkmagic.link/twitter"
            className="zi-btn shadow small"
          >
            Twitter
          </a>
          <a
            href="https://milkmagic.link/instagram"
            className="zi-btn shadow small"
          >
            Instagram
          </a>
        </div>

        <h3>Request</h3>
        <p>
          Request the <strong>magic link</strong> for your app now, at the
          moment milk supports iOS and Android. You must provide also a website
          (or other) URL as a fallback for all the unsupported OS and for the
          desktop.
        </p>
        <div className="milk-request">
          <a
            href="https://airtable.com/shrIvWsukFBXl0HyM"
            className="zi-btn success"
          >
            Request your magic link
          </a>
          <a href="mailto:matteo@manzinello.dev" className="zi-btn">
            Contact me
          </a>
        </div>

        <p className="zi-comment">milk is wip</p>
      </div>
      <p className="zi-comment">
        a project by{" "}
        <a href="https://matteomanzinello.com">matteo manzinello</a>
      </p>
    </div>
  );
}

export default App;
