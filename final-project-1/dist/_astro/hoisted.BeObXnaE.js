import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";async function p(){const i="https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=%22pastry%22&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts";try{const e=await fetch(i);if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return(await e.json()).hits}catch(e){console.error("There was a problem with the fetch operation:",e)}}async function d(){const i=document.getElementById("spinner"),e=document.getElementById("recipes-container");i.style.display="block",e.style.display="none";try{const t=await p();u(t.slice(0,9))}catch(t){console.error("Error fetching recipes:",t)}finally{i.style.display="none",e.style.display="flex"}}function u(i){const e=document.getElementById("recipes-container");e.innerHTML="",i.forEach(t=>{const r=document.createElement("div");r.className="col-md-4 mb-4",r.innerHTML=`
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
        `,e.appendChild(r)}),document.querySelectorAll(".favourite-btn").forEach(t=>{t.addEventListener("click",function(r){r.preventDefault();const n=this.querySelector("i"),a=n.classList.contains("fa-solid");n.classList.toggle("fa-regular",a),n.classList.toggle("fa-solid",!a);const l=this.previousElementSibling.href.split("=")[1],o=i.find(c=>encodeURIComponent(c.recipe.uri)===l);let s=JSON.parse(localStorage.getItem("favourites"))||[];a?s=s.filter(c=>c.uri!==o.recipe.uri):s.push(o.recipe),localStorage.setItem("favourites",JSON.stringify(s))})})}document.addEventListener("DOMContentLoaded",()=>{d()});
