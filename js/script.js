// Created by: Brayden Blank
// Created on: May 2022
// This file contains the JS functions for index.html

'use strict'

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit-6-04-HTML/",
  })
}

/**
 * This function calculates the volume of a sphere
 */
window.onload = function() {
  const params = new URLSearchParams(document.location.search)

  // input and process
  const radius = params.get('r')
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3)
  const dimensions = "Radius: " + radius + " cm"

  // output
  if (radius > 0) {
    document.getElementById('dimensions').innerHTML = dimensions
    document.getElementById('volume').innerHTML = 'Volume is: ' + volume.toFixed(2) + ' cm³'
  } else {
    document.getElementById('volume').innerHTML = 'Volume is NaN.'
  }
}
