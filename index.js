import{a as d,S as f,i as s}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",p="53377193-0ff55e0243d64b70ef9ccd5fb";function h(n){const o={key:p,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(m,{params:o}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-backdrop"),y=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(n){const o=n.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}">
        </a>
        <ul class="card-info">
          <li><b>Likes:</b> ${t.likes}</li>
          <li><b>Views:</b> ${t.views}</li>
          <li><b>Comments:</b> ${t.comments}</li>
          <li><b>Downloads:</b> ${t.downloads}</li>
        </ul>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){l.innerHTML=""}function L(){c.classList.remove("hidden")}function w(){c.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",S);function S(n){n.preventDefault();const o=n.target.elements["search-text"].value.trim();if(!o){s.warning({message:"Please enter search text!",position:"topRight"});return}b(),L(),h(o).then(t=>{if(!t.hits.length){s.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}).catch(()=>{s.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{w(),u.reset()})}
//# sourceMappingURL=index.js.map
