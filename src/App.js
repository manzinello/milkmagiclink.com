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
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";

import "mailgo/dist/mailgo.min.js";

import "./App.scss";

import "@fab-ulous/github";

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
        <p>milk project has been closed.</p>
      </div>
      <p className="zi-comment">
        <a className="netlify-badge" href="https://www.netlify.com">
          <img src="https://www.netlify.com/img/global/badges/netlify-dark.svg" />
        </a>
      </p>
    </div>
  );
}

export default App;
