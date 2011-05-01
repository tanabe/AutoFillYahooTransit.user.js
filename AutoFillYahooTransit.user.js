// ==UserScript==
// @name           AutoFillYahooTransit
// @version        1.1
// @namespace      http://blog.kaihatsubu.com/
// @description    auto filling transit from and transit to
// @include        http://transit.map.yahoo.co.jp/*
// ==/UserScript==
(function() {
  document.getElementById("from-dflt").style.display = "none";
  document.getElementById("to-dflt").style.display = "none";

  //disable suggest window
  var style = document.createElement("style");
  style.setAttribute("type", "text/css");
  style.appendChild(document.createTextNode("#suggest {display: none;}"));
  document.getElementsByTagName('head')[0].appendChild(style);

  var keyFrom = "yahoo_map_transit_from";
  var keyTo = "yahoo_map_transit_to";
  var from = document.getElementById("sfrom");
  var to = document.getElementById("sto");
  from.value = window.localStorage.getItem(keyFrom) || "";
  to.value = window.localStorage.getItem(keyTo) || "";

  var submitButton = document.getElementById("submit-box").getElementsByTagName("input")[0];
  submitButton.addEventListener("click", function() {
    window.localStorage.setItem(keyFrom, from.value);
    window.localStorage.setItem(keyTo, to.value);
  }, false);
})();
