import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.ckDVDfCL.js";async function c(){const r="https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=%22bread%22&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts";try{const e=await fetch(r);if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return(await e.json()).hits}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function a(){const r=document.getElementById("spinner"),e=document.getElementById("recipes-container");r.style.display="block",e.style.display="none";try{const t=await c();i(t.slice(0,9))}catch(t){console.error("Error fetching recipes:",t)}finally{r.style.display="none",e.style.display="flex"}}function i(r){const e=document.getElementById("recipes-container");e.innerHTML="",r.forEach(t=>{const n=document.createElement("div");n.className="col-md-4 mb-4",n.innerHTML=`
                    <div class="card">
                        <img src="${t.recipe.image}" class="card-img-top" alt="${t.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${t.recipe.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(t.recipe.uri)}" class="btn btn-primary mt-2">View Recipe</a>
                        </div>
                    </div>
                `,e.appendChild(n)})}document.addEventListener("DOMContentLoaded",()=>{a()});
