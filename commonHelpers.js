import{a as f,S as y,i as n}from"./assets/vendor-D1eTGYtO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function m(r,t){const s="https://pixabay.com/api/",a="45132179-4e43907cb4a483db7f713893c";try{return(await f.get(s,{params:{key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}})).data}catch(e){iziToast.error({position:"topRight",message:`${e}`})}}function p(r){const t=new y(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),s=document.querySelector(".gallery");let a=r.hits.map(e=>`<div class="image-size"><a href="${e.largeImageURL}"><img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${e.likes}</p></div><div class="text-block"><h5>views</h5><p>${e.views}</p></div><div class="text-block"><h5>comments</h5><p>${e.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${e.downloads}</p></div></div></div>`).join("");s.insertAdjacentHTML("beforeend",a),t.refresh()}function v(){const r=document.querySelector(".gallery");r.innerHTML=""}function L(){const t=document.querySelector(".gallery").firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}const b=document.querySelector(".form-gallery"),w=document.querySelector(".form-input"),i=document.querySelector(".loader"),c=document.querySelector(".load"),h=document.querySelector(".bottom"),d=15;let l=1,g="";b.addEventListener("submit",S);c.addEventListener("click",x);async function S(r){v(),r.preventDefault(),i.classList.remove("hidden"),h.classList.remove("show-text");let t=w.value.trim();if(g=t,l=1,t===""){n.error({position:"topRight",message:"Please fill the input"}),i.classList.add("hidden");return}try{const s=await m(t,l,d);if(s.total===0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),i.classList.add("hidden");return}else await p(s),c.classList.remove("hidden");s.hits.length<d&&(c.classList.add("hidden"),h.classList.add("show-text"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})),i.classList.add("hidden")}catch(s){n.error({position:"topRight",message:s.message}),i.classList.add("hidden")}}async function x(r){l+=1,i.classList.remove("hidden"),c.classList.add("hidden");try{const t=await m(g,l,d);t.hits.length<d?(c.classList.add("hidden"),h.classList.add("show-text"),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):c.classList.remove("hidden"),await p(t),L(),i.classList.add("hidden")}catch(t){n.error({position:"topRight",message:t.message}),i.classList.add("hidden")}}
//# sourceMappingURL=commonHelpers.js.map
