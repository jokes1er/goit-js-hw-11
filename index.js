import{a as m,S as p,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="https://pixabay.com/api/",g="53377193-0ff55e0243d64b70ef9ccd5fb";function y(i){const r={key:g,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(h,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader-backdrop"),b=new p(".gallery a",{captionsData:"alt",captionDelay:250});function L(i){const r=i.map(({largeImageURL:o,webformatURL:s,tags:e,likes:t,views:n,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a href="${o}">
          <img src="${s}" alt="${e}">
        </a>
        <ul class="card-info">
          <li><b>Likes:</b> ${t}</li>
          <li><b>Views:</b> ${n}</li>
          <li><b>Comments:</b> ${f}</li>
          <li><b>Downloads:</b> ${d}</li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),b.refresh()}function S(){c.innerHTML=""}function w(){l.classList.remove("hidden")}function P(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",q);function q(i){i.preventDefault();const r=i.target.elements["search-text"].value.trim();if(!r){a.warning({message:"Please enter search text!",position:"topRight"});return}S(),w(),y(r).then(o=>{if(!o.hits.length){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(o.hits)}).catch(()=>{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
