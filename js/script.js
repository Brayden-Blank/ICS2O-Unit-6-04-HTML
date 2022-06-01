// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-06-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-06-HTML/",
  });
}

const randomNumber = Math.floor(Math.random() * 6) + 1;

/**
 * This function compares slider with random number.
 */
function guessClicked() {
  
  const counter1 = parseInt(document.getElementById("integer1").value)
	const counter2 = parseInt(document.getElementById("integer2").value)
  var addedNumber = 0
  var result = 0

  if (counter1 > 0 && counter2 > 0) {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      result = result + counter1;
    }
  } else if (counter1 < 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      result = result - counter1;
    }
  } else if (counter1 > 0 && counter2 < 0) {
    while (addedNumber > counter2) {
      addedNumber = addedNumber - 1;
      result = result - counter1;
    }
  } else {
    while (addedNumber < counter2) {
      addedNumber = addedNumber + 1;
      result = result + counter1;
    }
  }

document.getElementById('answer').innerHTML = counter1 + " x " + addedNumber + " = " + result;
}
