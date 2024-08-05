import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";const s="pastries,cakes,bread";async function i(e=s){return(await(await fetch(`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${e}&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts`)).json()).hits}function a(e){for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e}async function o(){const e=document.getElementById("spinner"),t=document.getElementById("recipes-container");e.style.display="block",t.style.display="none";try{const n=await i(),c=a(n).slice(0,9);r(c)}catch(n){console.error("Error fetching recipes:",n)}finally{e.style.display="none",t.style.display="flex"}}function r(e){const t=document.getElementById("recipes-container");t.innerHTML="",e.forEach(n=>{const c=document.createElement("div");c.className="col-md-4 mb-4",c.innerHTML=`
                    <div class="card">
                        <img src="${n.recipe.image}" class="card-img-top" alt="${n.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${n.recipe.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(n.recipe.uri)}" class="btn btn-primary mt-2">View Recipe</a>
                        </div>
                    </div>
                `,t.appendChild(c)})}document.addEventListener("DOMContentLoaded",()=>{o()});
