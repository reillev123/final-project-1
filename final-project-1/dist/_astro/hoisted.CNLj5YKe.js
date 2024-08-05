import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.ckDVDfCL.js";async function c(){const a="https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=%22pastry%22&app_id=d7193a6c&app_key=c9b8ee8a1b8166ef57bc491438a36768&dishType=Desserts";try{const e=await fetch(a);if(!e.ok)throw new Error("Network response was not ok "+e.statusText);return(await e.json()).hits}catch(e){console.error("There was a problem with the fetch operation:",e)}}c().then(a=>{const e=document.getElementById("recipes-container");a.forEach(t=>{const r=document.createElement("div");r.className="col-md-4",r.innerHTML=`
                    <div class="card mb-4">
                        <img src="${t.recipe.image}" class="card-img-top" alt="${t.recipe.label}">
                        <div class="card-body">
                            <h5 class="card-title">${t.recipe.label}</h5>
                            <a href="${t.recipe.url}" class="btn btn-primary" target="_blank">View Recipe</a>
                        </div>
                    </div>
                `,e.appendChild(r)})});
