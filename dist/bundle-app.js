!function(e){var t={};function a(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(o,r,function(t){return e[t]}.bind(null,r));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=1)}([function(e,t,a){"use strict";a.r(t);var o=class{constructor(){this.templateCardDeck=[{symbol:"fa-diamond",visible:!1,matched:!1},{symbol:"fa-diamond",visible:!1,matched:!1},{symbol:"fa-paper-plane-o",visible:!1,matched:!1},{symbol:"fa-paper-plane-o",visible:!1,matched:!1},{symbol:"fa-anchor",visible:!1,matched:!1},{symbol:"fa-anchor",visible:!1,matched:!1},{symbol:"fa-bolt",visible:!1,matched:!1},{symbol:"fa-bolt",visible:!1,matched:!1},{symbol:"fa-cube",visible:!1,matched:!1},{symbol:"fa-cube",visible:!1,matched:!1},{symbol:"fa-leaf",visible:!1,matched:!1},{symbol:"fa-leaf",visible:!1,matched:!1},{symbol:"fa-bicycle",visible:!1,matched:!1},{symbol:"fa-bicycle",visible:!1,matched:!1},{symbol:"fa-bomb",visible:!1,matched:!1},{symbol:"fa-bomb",visible:!1,matched:!1}]}shuffle(){let e,t,a=this.templateCardDeck,o=a.length;for(;0!==o;)t=Math.floor(Math.random()*o),e=a[o-=1],a[o]=a[t],a[t]=e;return a}};var r=class{buildDeckFragment(e){const t=document.createDocumentFragment();return e.forEach(e=>{const a=document.createElement("li");a.setAttribute("class","card");const o=document.createElement("i");o.setAttribute("class",`fa ${e.symbol}`),a.appendChild(o),t.appendChild(a)}),t}addCardListener(e){e.addEventListener("click",function(e){console.log("event: ",e),console.log("card: ",e.target),e.stopPropagation();let t=e.target,a=t.getAttribute("class")+" open faceup ";console.log("attributes: ",a),t.setAttribute("class",a)})}};(new class{constructor(){this.deck=new o,this.gameDeck=[],this.gameUI=new r}getGameDeck(){return this.gameDeck}startNewGame(){this.gameDeck=this.deck.shuffle();const e=this.gameUI.buildDeckFragment(this.gameDeck),t=document.querySelector(".deck");t.appendChild(e),this.gameUI.addCardListener(t)}}).startNewGame()},function(e,t,a){e.exports=a(0)}]);