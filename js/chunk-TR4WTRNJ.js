import{J as g,K as v,T as f,b as m,ca as h,d as c,l as w,n as L,r as b}from"./chunk-ESFHHLAC.js";import{c as o}from"./chunk-DDP3HXYL.js";o(),o();var u={set(e,t){localStorage.setItem(e,t)},get(e){return localStorage.getItem(e)},del(e){localStorage.removeItem(e)}},T=e=>{if(!e)return;let t=c(b,"div",{innerHTML:e,className:"tip"});setTimeout(()=>{t.addClass("hide"),setTimeout(()=>{b.removeChild(t)},300)},3e3)},x=()=>{w.auto_scroll&&u.set(v,String(L.y))},y=e=>{let t=window.location.hash,a=null;if(g){u.del(v);return}t?a=m(decodeURI(t)):a=w.auto_scroll?parseInt(u.get(v)):0,a&&(h(a),f(1)),e&&t&&!g&&(h(a),f(1))},E=(e,t)=>{navigator.clipboard&&window.isSecureContext?navigator.clipboard.writeText(e).then(()=>{t&&t(!0)},()=>{t&&t(!1)}):(console.error("Too old browser, clipborad API not supported."),t&&t(!1))};o(),o();var A=()=>{let e;m.each("div.tab",t=>{if(t.getAttribute("data-ready"))return;let a=t.getAttribute("data-id"),d=t.getAttribute("data-title"),n=m("#"+a);n?e=!1:(n=document.createElement("div"),n.className="tabs",n.id=a,n.innerHTML='<div class="show-btn"></div>',n.child(".show-btn").addEventListener("click",()=>{h(n)}),t.parentNode.insertBefore(n,t),e=!0);let s=n.child(".nav ul");s||(s=c(n,"div",{className:"nav",innerHTML:"<ul></ul>"}).child("ul"));let r=c(s,"li",{innerHTML:d});e&&(r.addClass("active"),t.addClass("active")),r.addEventListener("click",p=>{let l=p.currentTarget;n.find(".active").forEach(i=>{i.removeClass("active")}),t.addClass("active"),l.addClass("active")}),n.appendChild(t),t.setAttribute("data-ready",String(!0))})},O=/mobile/i.test(window.navigator.userAgent);o();function M(){let e=!0;window.addEventListener("DOMContentLoaded",function(){e=!1}),document.readyState==="loading"&&window.addEventListener("load",function(){e&&(window.dispatchEvent(new Event("DOMContentLoaded")),console.log("%c \u2601\uFE0Fcloudflare patch %c running(rocket & minify)","color: white; background: #ff8c00; padding: 5px 3px;","padding: 4px;border:1px solid #ff8c00"))})}var N=(e,t,a)=>{if(a)t();else{let d=document.createElement("script");d.onload=function(n,s){(s||!d.readyState)&&(console.log("abort!"),d.onload=null,d=void 0,!s&&t&&setTimeout(t,0))},d.src=e,document.head.appendChild(d)}},S=e=>{let{text:t,parentNode:a,id:d,className:n,type:s,src:r,dataset:p}=e,l=t||e.textContent||e.innerHTML||"";a.removeChild(e);let i=document.createElement("script");d&&(i.id=d),n&&(i.className=n),s&&(i.type=s),r&&(i.src=r,i.async=!1),p.pjax!==void 0&&(i.dataset.pjax=""),l!==""&&i.appendChild(document.createTextNode(l)),a.appendChild(i)};o();var C=(e,t)=>{let a=w[e][t];return a.includes("http")?a:a.includes("gh")||a.includes("combine")?`https://cdn.jsdelivr.net/${a}`:a.includes("npm")?`https://cdn.jsdelivr.net/${a}`:`/${a}`},I=(e,t,a)=>{LOCAL[e]&&N(C("js",e),t||function(){window[e]=!0},a||window[e])},j=(e,t)=>{window["css"+e]||LOCAL[e]&&(c(document.head,"link",{rel:"stylesheet",href:C("css",e)}),window["css"+e]=!0)};export{u as a,T as b,x as c,y as d,E as e,A as f,M as g,S as h,I as i,j};/*! For license information please see chunk-TR4WTRNJ.js.LEGAL.txt */
