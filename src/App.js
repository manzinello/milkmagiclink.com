import React from "react";

import "@zeit-ui/style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faAppStoreIos,
  faGooglePlay,
  faTwitter,
  faInstagram,
  faApple,
  faAndroid,
  faChrome,
  faSpotify
} from "@fortawesome/free-brands-svg-icons";

import "mailgo";

import "./App.scss";

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
        <p>
          Milk gives you a single <strong>magic</strong> link that will{" "}
          <strong>redirect the user to the correct store</strong> to download
          your app.
        </p>
        <p>
          Why we have to add two badges for the App Store and Play Store? With a
          single milk magic link the Android users will see the Google Play{" "}
          <FontAwesomeIcon icon={faGooglePlay} /> and the iOS users the App
          Store <FontAwesomeIcon icon={faAppStoreIos} /> (all the iOS links are
          in the new <em>apps.apple.com</em> form){" "}
          <span class="zi-tag">no more double badges!</span>
        </p>
        <pre class="zi-dark" style={{ marginTop: 5, marginBottom: 5 }}>
          https://milkmagic.link/twitter
        </pre>
        <p>
          Obviously instead of <code>twitter</code> you can decide everything
          you want.
        </p>
        <p>
          <div class="zi-tag">
            All links are{" "}
            <strong>
              human-checked{" "}
              <span className="check">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
            </strong>
          </div>
        </p>

        <h3>Real examples</h3>
        <p>
          Try to click these buttons from iOS, from Android or from desktop.
        </p>
        <div className="milk-examplelinks">
          <a
            href="https://milkmagic.link/twitter"
            className="zi-btn small twitter"
          >
            <FontAwesomeIcon icon={faTwitter} /> Twitter
          </a>
          <a
            href="https://milkmagic.link/instagram"
            className="zi-btn small instagram"
          >
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </a>
          <a
            href="https://milkmagic.link/spotify"
            className="zi-btn small spotify"
          >
            <FontAwesomeIcon icon={faSpotify} /> Spotify
          </a>
        </div>

        <h3>Request</h3>
        <p>
          Request the <strong>magic link</strong> for your app now, at the
          moment milk supports <FontAwesomeIcon icon={faApple} /> iOS and{" "}
          <FontAwesomeIcon icon={faAndroid} /> Android.
        </p>
        <p>
          You must provide also a website <FontAwesomeIcon icon={faChrome} />{" "}
          (or other) URL as a fallback for all the unsupported OS and for the
          desktop.
        </p>
        <div className="milk-request">
          <a
            href="https://airtable.com/shrIvWsukFBXl0HyM"
            className="zi-btn success shadow"
          >
            Request your magic link
          </a>
          <a href="mailto:matteo@manzinello.dev" className="zi-btn shadow">
            <FontAwesomeIcon icon={faPaperPlane} /> Contact me
          </a>
        </div>

        <p className="zi-comment">milk is wip</p>
      </div>
      <p className="zi-comment">
        <a
          href="http://status.milkmagiclink.com?ref=milk"
          target="_blank"
          rel="noopener noreferrer"
        >
          status
        </a>{" "}
        · a project by{" "}
        <a
          href="https://matteomanzinello.com?ref=milk"
          target="_blank"
          rel="noopener noreferrer"
        >
          matteo manzinello
        </a>
      </p>
    </div>
  );
}

export default App;
