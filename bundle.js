(()=>{"use strict";var e={402:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,"body {\n    font-family: Arial, sans-serif;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.overlay {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n.modal {\n    display: flex;\n    flex-direction: column;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    background-color: #ffffff;\n    padding: 20px;\n    border-radius: 15px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    text-align: center;\n    z-index: 2;\n}\n\n.button {\n    margin: 20px auto 0px auto;\n    border-radius: 15px;\n    height: 40px;\n    width: 200px;\n    background-color: white;\n}\n\n.tooltip {\n    display: none;\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 400px;\n    border-radius: 15px;\n    background-color: #333;\n    color: #fff;\n    padding-left: 20px;\n    padding-right: 20px;\n    height: 100%;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index: 3;\n}\n\n.alias {\n    margin-top: 20px;\n    height: 40px;\n}\n\n.chat-container {\n    display: flex;\n    flex-direction: column;\n    border: 1px solid #ccc;\n    padding: 10px;\n    border-radius: 15px;\n    margin-right: 20px;\n    margin-top: 20px;\n    width: 500px;\n    height: 500px;\n}\n\n.messages-container {\n    overflow-y: auto;\n    overflow-x: hidden;\n    width: 500px;\n    margin-bottom: 20px;\n}\n\n.message-container {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-top: 20px;\n}\n\n.yours {\n    margin-right: 0px;\n    text-align: right;\n    color: red;\n}\n\n.message-text {\n    margin-top: 10px;\n    color: black;\n}\n\n.user-container {\n    display: flex;\n    margin-left: 20px;\n    margin-top: 50px;\n    margin-bottom: 20px;\n    margin-right: -1px;\n    flex-direction: column;\n    align-self: flex-start;\n    align-items: center;\n    border: 1px solid #ccc;\n    padding: 10px;\n    border-radius: 15px 0 0 15px;\n    max-width: 200px;\n    min-width: 150px;\n    overflow-y: auto;\n    overflow-x: hidden;\n    height: 400px;\n}\n\n.user-card {\n    display: flex;\n    width: 100%;\n    padding: 10px;\n}\n\n.user-avatar {\n    width: 40px;\n    min-width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 1px solid #ccc;\n    background-color: #ececec;\n    margin-bottom: 5px;\n}\n\n.user-name {\n    margin: auto 10px;\n}\n\n.message-input {\n    height: 50px;\n    margin: 20px;\n    width: 90%;\n    border: 1px solid #ccc;\n    border-radius: 15px;\n    align-self: flex-end;\n    margin-top: auto;\n    padding: 5px;\n}",""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=t(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=o(m,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),d=0;d<i.length;d++){var l=t(i[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),d=t(216),l=t.n(d),u=t(589),p=t.n(u),m=t(402),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const g=new WebSocket("https://sse-ws-server-4itr.onrender.com:10000"),h=new class{constructor(){this.userContainer=document.querySelector(".user-container")}displayUsers(e){this.userContainer.innerHTML="";for(let n=0;n<e.length;n++){const t=this._createUserCard(e[n]);this.userContainer.appendChild(t)}}_createUserCard(e){const n=document.createElement("div");n.className="user-card",n.id=e;const t=`<div class="user-avatar"></div><div class="user-name">${e}</div>`;return n.innerHTML=t,n}},x=new class{constructor(e){this.socket=e,this.user="",this.container=document.querySelector(".messages-container"),this.inputElem=document.querySelector(".message-input"),this.inputElem.addEventListener("keydown",(e=>{"Enter"===e.key&&""!==this.inputElem.value&&(this._sendMessage(this.inputElem.value),this.inputElem.value="")}))}_sendMessage(e){const n=this._timeString(),t=JSON.stringify(["new message",{user:this.user,text:e,timestamp:n}]);this.socket.send(t)}_timeString(){const e=new Date;return`${e.getHours().toString().padStart(2,"0")}:${e.getMinutes().toString().padStart(2,"0")} ${e.getDate().toString().padStart(2,"0")}.${(e.getMonth()+1).toString().padStart(2,"0")}.${e.getFullYear()}`}displaydMessages(e){this.container.innerHTML="";for(let n=0;n<e.length;n++)this.container.appendChild(this._createMessageElem(e[n]));this.container.scrollTop=this.container.scrollHeight}_createMessageElem(e){const n=document.createElement("div");return e.user==this.user?(n.className="message-container yours",n.innerHTML=`<div class="message-info">You, ${e.timestamp}</div><div class="message-text">${e.text}</div>`):(n.className="message-container",n.innerHTML=`<div class="message-info">${e.user}, ${e.timestamp}</div><div class="message-text">${e.text}</div>`),n}}(g);document.querySelector(".alias").value="",g.addEventListener("open",(e=>{console.log("Connected to the server")})),g.addEventListener("message",(e=>{const n=Array.from(JSON.parse(e.data)),t=Array.from(n[0]),r=Array.from(n[1]);function o(){x.user=document.querySelector(".alias").value;const e=document.getElementById("tooltip");if(e.onclick=()=>e.style.display="none",""==x.user)e.textContent="необходимо ввести имя пользователя",e.style.display="flex";else if(t.includes(x.user))e.textContent="Такой пользователь уже зарегестрирован",e.style.display="flex";else{document.querySelector(".modal").style.display="none",document.querySelector(".overlay").style.display="none";const e=JSON.stringify(["new user",x.user]);g.send(e)}}x.displaydMessages(r),h.displayUsers(t),document.querySelector(".button").addEventListener("click",(()=>{o()})),document.querySelector(".alias").addEventListener("keydown",(e=>{"Enter"===e.key&&o()}))}))})()})();