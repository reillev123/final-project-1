import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";document.addEventListener("DOMContentLoaded",function(){function a(c){const t=document.getElementById("recipes-container");t.innerHTML="",c.forEach(e=>{const n=document.createElement("div");n.className="col-md-4",n.innerHTML=`
                        <div class="card mb-4">
                            <img src="${e.recipe.image}" class="card-img-top" alt="${e.recipe.label}">
                            <div class="card-body">
                                <h5 class="card-title">${e.recipe.label}</h5>
                                <a href="/final-project-1/recipe-details" class="btn btn-primary" target="_blank">View Recipe</a>
                            </div>
                        </div>
                    `,t.appendChild(n)})}function o(c){const t=`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${encodeURIComponent(c)}&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts`;fetch(t).then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{const n=e.hits;a(n)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})}const r=document.getElementById("search-form");r&&r.addEventListener("submit",function(c){c.preventDefault();const t=document.getElementById("search-input").value;o(t)});const i=localStorage.getItem("searchResults");i&&a(JSON.parse(i))});
