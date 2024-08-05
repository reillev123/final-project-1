import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.ckDVDfCL.js";async function c(){const n="https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=%22cake%22&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts";try{const e=await fetch(n);if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return(await e.json()).hits}catch(e){return console.error("There was a problem with the fetch operation:",e),[]}}async function a(){const n=document.getElementById("spinner"),e=document.getElementById("recipes-container");n.style.display="block",e.style.display="none";try{const t=await c();i(t.slice(0,9))}catch(t){console.error("Error fetching recipes:",t)}finally{n.style.display="none",e.style.display="flex"}}function i(n){const e=document.getElementById("recipes-container");e.innerHTML="",n.forEach(t=>{const r=document.createElement("div");r.className="col-md-4 mb-4",r.innerHTML=`
                    <div class="card">
                        <img src="${t.recipe.image}" class="card-img-top" alt="${t.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${t.recipe.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(t.recipe.uri)}" class="btn btn-primary mt-2">View Recipe</a>
                        </div>
                    </div>
                `,e.appendChild(r)})}document.addEventListener("DOMContentLoaded",()=>{a()});
