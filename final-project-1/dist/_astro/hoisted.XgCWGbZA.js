import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";document.addEventListener("DOMContentLoaded",function(){const a=JSON.parse(localStorage.getItem("searchResults")),c=document.getElementById("recipes-container");a.forEach(e=>{const t=document.createElement("div");t.className="col-md-4",t.innerHTML=`
                    <div class="card mb-4">
                        <img src="${e.recipe.image}" class="card-img-top" alt="${e.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${e.recipe.label}</h5>
                            <a href="${e.recipe.url}" class="btn btn-primary" target="_blank">View Recipe</a>
                        </div>
                    </div>
                `,c.appendChild(t)})});
