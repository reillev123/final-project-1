import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.Bx-rmOrY.js";function a(){const e=localStorage.getItem("favourites");return e?JSON.parse(e):[]}function s(){const e=document.getElementById("favorites-container"),n=a();if(e.innerHTML="",n.length===0){e.innerHTML="<p>No favorite recipes found.</p>";return}n.forEach(t=>{const i=document.createElement("div");i.className="col-md-4 mb-4",i.innerHTML=`
                    <div class="card">
                        <img src="${t.image}" class="card-img-top" alt="${t.label}">
                        <div class="card-body">
                            <h5 class="card-title">${t.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(t.uri)}" class="btn btn-primary mt-2 view-recipe-btn">View Recipe</a>
                        </div>
                    </div>
                `,e.appendChild(i)}),document.querySelectorAll(".view-recipe-btn").forEach(t=>{t.addEventListener("click",function(i){i.preventDefault();const r=this.href.split("=")[1],o=n.find(c=>encodeURIComponent(c.uri)===r);localStorage.setItem("currentRecipe",JSON.stringify(o)),window.location.href=this.href})})}document.addEventListener("DOMContentLoaded",s);
