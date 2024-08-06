import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.C-cyE6Sp.js";document.addEventListener("DOMContentLoaded",async function(){const e=JSON.parse(localStorage.getItem("selectedRecipe"));if(e){const t=document.getElementById("recipe-details-container");try{const i=(await(await fetch(e.url)).json()).ingredients.map(n=>`<li>${n}</li>`).join("");t.innerHTML=`
                        <div class="card">
                            <img src="${e.image}" alt="${e.label}">
                            <h5 class="card-title">${e.label}</h5>
                            <h6>Ingredients:</h6>
                            <ul>${i}</ul>
                            <a href="${e.url}" target="_blank" class="btn">View Full Recipe</a>
        
                        </div>
                    `}catch(a){console.error("Error fetching recipe details:",a),t.innerHTML="<p>Failed to load recipe details. Please try again later.</p>"}}});
