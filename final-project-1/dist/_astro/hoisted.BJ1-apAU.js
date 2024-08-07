import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.Bx-rmOrY.js";document.addEventListener("DOMContentLoaded",function(){function l(i){const r=document.getElementById("recipe-container");r.innerHTML="",i.forEach(e=>{const t=document.createElement("div");t.className="col-md-4 mb-4",t.innerHTML=`
                <div class="card">
                    <img src="${e.recipe.image}" class="card-img-top" alt="${e.recipe.label}">
                    <div class="card-body">
                        <h5 class="card-title">${e.recipe.label}</h5>
                        <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(e.recipe.uri)}" class="btn btn-primary mt-2 view-recipe-btn">View Recipe</a>
                        <button class="btn btn-outline-primary mt-2 favourite-btn">
                            <i class="fa-regular fa-heart"></i>
                        </button>
                    </div>
                </div>
            `,r.appendChild(t)}),document.querySelectorAll(".favourite-btn").forEach(e=>{e.addEventListener("click",function(t){t.preventDefault();const n=this.querySelector("i"),c=n.classList.contains("fa-solid");n.classList.toggle("fa-regular",c),n.classList.toggle("fa-solid",!c);const s=this.previousElementSibling.href.split("=")[1],u=i.find(a=>encodeURIComponent(a.recipe.uri)===s);let o=JSON.parse(localStorage.getItem("favourites"))||[];c?o=o.filter(a=>a.uri!==u.recipe.uri):o.push(u.recipe),localStorage.setItem("favourites",JSON.stringify(o))})}),document.querySelectorAll(".view-recipe-btn").forEach(e=>{e.addEventListener("click",function(t){const n=this.href.split("=")[1],c=i.find(s=>encodeURIComponent(s.recipe.uri)===n);localStorage.setItem("currentRecipe",JSON.stringify(c.recipe))})})}function m(i){const r=`https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${encodeURIComponent(i)}&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts`;fetch(r).then(e=>{if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return e.json()}).then(e=>{const t=e.hits;l(t)}).catch(e=>{console.error("There was a problem with the fetch operation:",e)})}const p=document.getElementById("search-form");p&&p.addEventListener("submit",function(i){i.preventDefault();const r=document.getElementById("search-input").value;m(r)});const d=localStorage.getItem("searchResults");d&&l(JSON.parse(d))});
