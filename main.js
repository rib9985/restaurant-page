(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var a=t(81),r=t.n(a),i=t(645),o=t.n(i)()(r());o.push([e.id,":root{\n    padding: 100px;\n}\n\n.intro {\n    gap: 10px;\n    padding: 20px;\n}\n\n.nav{\n    display: flex;\n    gap: 4rem;\n    align-items: center;\n    justify-content: center;\n}\n\n.about:hover, .menu:hover, .rev:hover, .address:hover {\n    color:aliceblue;\n    \n}\n\n.header{\n    display: flex;\n    justify-content: center;\n    \n}\n\n.title{\n    font-size: 3rem;\n    color:aqua;\n}\n\n.title:hover{\n   color: aliceblue;\n}\n\n.restaurant-image{\n    align-self: center;\n    justify-content: center;\n    display: flex;\n    max-height: 500px;\n    transform: rotate(90deg);\n}\n\n.home{\n    padding: 6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.nav-header{\n    display: flex;\n    padding: 10px;\n    justify-content: center;\n    align-items: center;\n    gap: 10rem;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 1.2rem;\n}\n\n.logo-image{\n    padding:10px;\n    max-height: 6rem;\n    justify-self: center;\n    align-self: center;\n    display: flex;\n    filter: drop-shadow(0px 15px 60px #a5a5a5);\n    transition: transform 250ms\n}\n\n.logo-image:hover{\n    transform: scale(1.20);\n}\n\n#content{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 10px\n}\n\n.nav:hover{\ntransform: scale(110%);\ncolor:green;\n}\n\n.nav:active{\n    transform: scale(110%);\n    color: lightcoral\n}\n\n.nav-activeTab{\n    color:lightsalmon;\n    transform: scale(130%);\n    filter: drop-shadow(0px 2px 3px #cfcfcf);\n    font-weight: bold;\n\n\n}\n\n.nav-inactiveTab{\n    color:antiquewhite\n}\n\n.menuItemOne-image, .menuItemTwo-image, .menuItemThree-image {\n    display: flex;\n    max-height: 400px;\n    max-width: 400px;\n    padding: 2rem;\n}\n\n.menu{\n    display:flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n\n\n.menu>*{\n    display:flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 6rem;\n}\n\n.map-div{\n    display: flex;\n    flex-direction: row;\n}\n\n.info{\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.reservations-div{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-size: 2rem;\n    gap: 2rem;\n}\n\n#callDiv{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: 2rem;\n}\n\n\n\n.div-reservation{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 1rem;\n}\n\ninput:focus {\n\tborder-style: solid;\n\tborder-bottom-width: 0.1rem;\n\toutline: none;\n\tborder-color: lightcoral;\n}\n\ninput:hover{\n    color: whitesmoke;\n    border-color: whitesmoke;\n}\n\ninput,\nselect {\n\tborder-style: solid;\n\toutline: none;\n\tborder-radius: 10px;\n\theight: 2rem;\n\tborder-color: rgba(rgba(176, 218, 185, 0.26), green, blue, alpha);\n\tfont-size: 1.5rem;\n\tfont-family: var(--menu-font);\n\tpadding: 5px;\n\tbackground-color: var(--main-color);\n\tcolor: var(--orange);\n}\n\n\n.submit-input{\n    display: flex;\n    flex-direction: column;\n    width: fit-content;\n    font-size: 1.5rem;\n    padding: 20px;\n    justify-content: center;\n    align-items: center;\n    color: green;\n    background-color: lightgreen;\n}\n\n.submit-input:active{\n    transform: scale(104%);\n\tborder-style: solid;\n\tborder-bottom-width: 0.1rem;\n\toutline: none;\n\tborder-color: lightcoral;\n}\n\n",""]);const c=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(a)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(o[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);a&&o[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var i={},o=[],c=0;c<e.length;c++){var s=e[c],d=a.base?s[0]+a.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=r(m,a);a.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}o.push(p)}return o}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=a(e=e||[],r=r||{});return function(e){e=e||[];for(var o=0;o<i.length;o++){var c=t(i[o]);n[c].references--}for(var s=a(e,r),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={id:a,exports:{}};return e[a](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&!e;)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),a=t(795),r=t.n(a),i=t(569),o=t.n(i),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(426),f={};function h(e,n){const t=document.createElement("p");return t.textContent=e,t.setAttribute("class",`${n}`),t}function v(e,n,t){const a=new Image;return a.alt=n,a.src=e,a.setAttribute("class",`${t}`),a}function g(e,n,t){const a=document.createElement(`${e}`);return a.textContent=n,a.setAttribute("class",`${t}`),a}function b(e,n,t){const a=document.createElement("div");return a.setAttribute("class",`${n}`),a.setAttribute("id",`${t}`),a.textContent=e,a}function y(e,n,t,a){const r=document.createElement("input");return r.setAttribute("type",`${e}`),r.setAttribute("id",`${t}`),r.setAttribute("class",`${a}`),r.setAttribute("placeholder",`${n}`),r}function x(e){document.getElementById(`${e}`).innerHTML=""}f.styleTagTransform=u(),f.setAttributes=s(),f.insert=o().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const C="Have someone special you would like to invite? How about a special occassion? Feel free to reserve a table below! Or give us a Call!",w="This is story about how Italy and its cuisine was made. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sed diam euismod, vulputate ante nec, euismod diam. Vivamus bibendum libero lorem, id sodales nunc auctor nec.",E="Check out more about us on this website! Feel free to navigate! Lorem ipsum dolor sit amet, consectetur adipiscing elit",A="Cacio Pepe: Authentic Roman pasta dish featuring al dente spaghetti tossed in creamy pecorino and black pepper sauce, a true flavor sensation.",I="Lasagna: Layers of homemade pasta, rich Bolognese sauce, creamy béchamel, and melted cheese, a comforting classic worth savoring.",T="Matriciana: Traditional Italian pasta with spicy tomato sauce, smoky pancetta, pecorino cheese, and a hint of garlic, a fiery delight.",$=t.p+"2f2e402e2264ffc5f13a.jpg";const j=t.p+"5694b4f018c1f24c7deb.jpg",B=t.p+"80866b8af2978affbed4.jpg",M=t.p+"6fe10d10eb9c61fe822f.jpg";function L(e,n,t,a,r,i,o){const c=b("",`menu-item-${e}`,`menu-${r}`);return c.appendChild(v(n,`${t}`,`${a}-image`)),c.appendChild(g("h3",`${o}`,`${a}-title`)),c.appendChild(h(i,`${a}-paragraph`)),c}const S=t.p+"4d257845c5b3a4350606.svg";function k(){const e=document.createElement("div");return e.setAttribute("class","div-reservation"),e.appendChild(g("h1","Reservations","reservation-header")),e.appendChild(h(C,"reservation-paragraph")),e.appendChild(function(){const e=b("","reservations-div","reservations-div-1");return e.appendChild(function(e,n){const t=document.createElement("form");return t.setAttribute("action","https://httpbin.org/status/200"),t.setAttribute("method","post"),t}()),e.appendChild(y("text","First Name","firstName","form-input")),e.appendChild(y("text","Last Name","lastName","form-input")),e.appendChild(y("email","Email","userEmail,","form-input")),e.appendChild(y("date","Date of Reservation","date","form-input")),e.appendChild(y("text","Special Requests","requests","form-input")),e.appendChild(y("submit","Submit","","submit-input")),e}()),e.appendChild(function(){const e=b("","callUsDiv","callDiv");return e.appendChild(v(S,"telephone-icon","callIcon")),e.appendChild(h("+1 555-111-222","callText")),e}()),e}const H=t.p+"52baba8a14bf535231fe.png";function P(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("div");return e.appendChild(v(H,"logo","logo-image")),e.setAttribute("class","div-logo"),e.setAttribute("id","main-logo"),e}()),e.appendChild(function(){const e=g("header","","nav-header");return e.appendChild(b("Home","nav","nav-home")),e.appendChild(b("Menu","nav","nav-menu")),e.appendChild(b("Reservations","nav","nav-reserve")),e.appendChild(b("More Information","nav","nav-info")),e}())}const N=document.getElementById("content"),O=()=>N.innerHTML="";function R(){O(),P(),D(),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("class","home"),e.appendChild(g("h1","Who Are We?","home-header")),e.appendChild(h(w,"home-paragraph")),e.appendChild(v($,"restaurant-image","restaurant-image")),e.appendChild(h(E,"home-paragraph")),e}()),document.getElementById("nav-home").setAttribute("class","nav-activeTab")}function z(){x("content"),P(),D(),document.getElementById("content").appendChild(k()),document.getElementById("nav-reserve").setAttribute("class","nav-activeTab")}function F(){x("content"),P(),D(),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("class","info"),e.appendChild(g("h1","Need more info?","info-header")),e.appendChild(g("h2","Open & Closing Times?","infoHeaderAddress")),e.appendChild(h("From Tuesday-Sunday, 11:00AM-10:00PM","info-paragraph")),e.appendChild(g("h2","Email?","infoHeaderAddress")),e.appendChild(h("test@email.com","info-paragraph")),e.appendChild(g("h2","Address?","infoHeaderAddress")),e.appendChild(h("Our address is: 12354412 Boulevard Street","info-paragraph")),e.appendChild(function(){const e=b("","map","map-div"),n=document.createElement("iframe");return n.setAttribute("src",'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d914.2816978912917!2d-46.68427920438772!3d-23.563889320307677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579dbf4eca5d%3A0xa479d0e7c757a5d1!2sR.%20Artur%20de%20Azevedo%2C%201298%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005404-003!5e0!3m2!1sen!2sbr!4v1687991074697!5m2!1sen!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'),e.appendChild(n),e}()),e}()),document.getElementById("nav-info").setAttribute("class","nav-activeTab")}function D(){document.getElementById("nav-home").addEventListener("click",(()=>R())),document.getElementById("nav-menu").addEventListener("click",(()=>(x("content"),P(),D(),document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.setAttribute("class","menu"),e.appendChild(g("h1","Our Menu","menu-header")),e.appendChild(g("h2","Main Dishes","menu-header-main")),e.appendChild(L("one",j,"cacioepepe","menuItemOne","1",A,"Cacio & Pepe")),e.appendChild(L("two",B,"lasangha","menuItemTwo","2",I,"Lasagna")),e.appendChild(L("three",M,"matriciana","menuItemThree","3",T,"Matriciana")),e}()),void document.getElementById("nav-menu").setAttribute("class","nav-activeTab")))),document.getElementById("nav-reserve").addEventListener("click",(()=>z())),document.getElementById("nav-info").addEventListener("click",(()=>F())),document.getElementById("main-logo").addEventListener("click",(()=>R()))}z()})()})();