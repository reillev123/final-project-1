import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";const p="pastries,cakes,bread";async function d(e=p){return(await(await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${e}&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts`)).json()).hits}function u(e){for(let i=e.length-1;i>0;i--){const t=Math.floor(Math.random()*(i+1));[e[i],e[t]]=[e[t],e[i]]}return e}async function f(){const e=document.getElementById("spinner"),i=document.getElementById("recipes-container");e.style.display="block",i.style.display="none";try{const t=await d(),n=u(t).slice(0,9);m(n)}catch(t){console.error("Error fetching recipes:",t)}finally{e.style.display="none",i.style.display="flex"}}function m(e){const i=document.getElementById("recipes-container");i.innerHTML="",e.forEach(t=>{const n=document.createElement("div");n.className="col-md-4 mb-4",n.innerHTML=`
                    <div class="card">
                        <img src="${t.recipe.image}" class="card-img-top" alt="${t.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${t.recipe.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(t.recipe.uri)}" class="btn btn-primary mt-2">View Recipe</a>
                            <button class="btn btn-outline-primary mt-2 favourite-btn">
                                <i class="fa-regular fa-heart"></i>
                            </button>
                        </div>
                    </div>
                `,i.appendChild(n)}),document.querySelectorAll(".favourite-btn").forEach(t=>{t.addEventListener("click",function(n){n.preventDefault();const c=this.querySelector("i"),r=c.classList.contains("fa-solid");c.classList.toggle("fa-regular",r),c.classList.toggle("fa-solid",!r);const l=this.previousElementSibling.href.split("=")[1],o=e.find(a=>encodeURIComponent(a.recipe.uri)===l);let s=JSON.parse(localStorage.getItem("favourites"))||[];r?s=s.filter(a=>a.uri!==o.recipe.uri):s.push(o.recipe),localStorage.setItem("favourites",JSON.stringify(s))})})}document.addEventListener("DOMContentLoaded",()=>{f()});
