// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Mr. Coxall
// Created on: June 2022
// This file contains the JS functions for index.html

"use strict"

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-6-04-HTML/sw.js", {
    scope: "/ICS2O-Unit-6-04-HTML/",
  })
}

window.onload = function() {
  // this calculates volume of a sphere

  const params = new URLSearchParams(document.location.search)

  // input
  const circleRadius = params.get('r')
  console.log(circleRadius)

  // process
  const volume = (4 / 3) * Math.Pi * (circleRadius**3)
  const dimensions = "<ul>\n<li>Radius = " + circleRadius + "</li>\n<ul>"

  // output
  document.getElementById('dimensions').innerHTML = dimensions
  document.getElementById('volume-of-sphere').innerHTML = 'Volume is: ' + volume + ' cm³!' 
}
