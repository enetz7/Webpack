(()=>{var t={499:(t,o,e)=>{"use strict";var r=e(645);e.n(r)()((function(t){return t[1]})).push([t.id,"body *.dark{background-color:#000;color:#fff}body *.light{background-color:#fff;color:#000}body{color:rgba(0,0,0,.4);background-color:gray}body header{background-color:#000;height:10%}body #mapid{height:780px}body section{background-color:inherit;height:85%}body footer{background-color:#fff;height:5%}",""])},645:t=>{"use strict";t.exports=function(t){var o=[];return o.toString=function(){return this.map((function(o){var e=t(o);return o[2]?"@media ".concat(o[2]," {").concat(e,"}"):e})).join("")},o.i=function(t,e,r){"string"==typeof t&&(t=[[null,t,""]]);var a={};if(r)for(var s=0;s<this.length;s++){var n=this[s][0];null!=n&&(a[n]=!0)}for(var c=0;c<t.length;c++){var i=[].concat(t[c]);r&&a[i[0]]||(e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),o.push(i))}},o}},766:(t,o,e)=>{var r='<!DOCTYPE html> <html> <head> <meta charset="utf-8"/> <title>Golaso</title> <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.core.js" integrity="sha512-8x6YTLa62u654TJu7Ihmx4R3jyILOJ90ONScxW95JbHDlazLP9164VVp4jKWdJcWeD5YjWZUOFvG3Kbh2D3S1A==" crossorigin="anonymous"><\/script> <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"><\/script> <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/> </head> <body> <header class="dark"> h d dad daw dwar raw </header> <section class="light"> <div id="mapid"></div> dwadaw dwadaw dwadaw </section> <footer> awd daw </footer> <script src="'+e(91)(e(736))+'"><\/script> </body> </html>';t.exports=r},91:t=>{"use strict";t.exports=function(t,o){return o||(o={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(o.hash&&(t+=o.hash),o.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(t)?'"'.concat(t,'"'):t)}},736:(t,o,e)=>{"use strict";e.r(o);const r=_;var a=e.n(r);const s=L;var n=e.n(s);e(499);var c=n().map("mapid").setView([51.505,-.09],13);n().tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',maxZoom:18,id:"mapbox/streets-v11",tileSize:512,zoomOffset:-1,accessToken:"pk.eyJ1IjoiZW5ldHoiLCJhIjoiY2s5MmxzNW1qMDFhdzNocGJzamxydTMzciJ9.pkPbcC4N9MRUBM4xFspT4A"}).addTo(c),n().marker([51.5,-.09]).addTo(c),n().circle([51.508,-.11],{color:"red",fillColor:"#f03",fillOpacity:.5,radius:500}).addTo(c),n().polygon([[51.509,-.08],[51.503,-.06],[51.51,-.047]]).addTo(c),n().popup().setLatLng([51.5,-.09]).setContent("I am a standalone popup.").openOn(c),document.body.appendChild(function(){const t=document.createElement("div");return t.innerHTML=a().join(["Hello","webpack"]," "),t}())}},o={};function e(r){if(o[r])return o[r].exports;var a=o[r]={id:r,exports:{}};return t[r](a,a.exports,e),a.exports}e.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return e.d(o,{a:o}),o},e.d=(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},e.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e(736),e(766)})();