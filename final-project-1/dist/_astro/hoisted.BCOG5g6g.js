import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.BAJwamCf.js";function a(){const t=localStorage.getItem("favourites");return t?JSON.parse(t):[]}function s(t){localStorage.setItem("favourites",JSON.stringify(t))}function l(){const t=document.getElementById("favorites-container"),n=a();if(t.innerHTML="",n.length===0){t.innerHTML="<p>No favorite recipes found.</p>";return}n.forEach(e=>{const i=document.createElement("div");i.className="col-md-4 mb-4",i.innerHTML=`
                    <div class="card">
                        <img src="${e.image}" class="card-img-top" alt="${e.label}">
                        <div class="card-body">
                            <h5 class="card-title">${e.label}</h5>
                            <a href="/final-project-1/recipe-details?uri=${encodeURIComponent(e.uri)}" class="btn btn-primary mt-2 view-recipe-btn">View Recipe</a>
                            <button class="btn favorite-recipe-btn mt-2" data-uri="${encodeURIComponent(e.uri)}" style="color:white;">
                                 <i class="fa-solid fa-heart"></i>
                                 </button>
                        </div>
                    </div>
                `,t.appendChild(i)}),document.querySelectorAll(".view-recipe-btn").forEach(e=>{e.addEventListener("click",function(i){i.preventDefault();const r=this.href.split("=")[1],o=n.find(c=>encodeURIComponent(c.uri)===r);localStorage.setItem("currentRecipe",JSON.stringify(o)),window.location.href=this.href})}),document.querySelectorAll(".favorite-recipe-btn").forEach(e=>{e.addEventListener("click",function(){const i=this.getAttribute("data-uri"),r=n.findIndex(o=>encodeURIComponent(o.uri)===i);r!==-1&&(n.splice(r,1),s(n),this.closest(".col-md-4").remove())})})}document.addEventListener("DOMContentLoaded",l);
