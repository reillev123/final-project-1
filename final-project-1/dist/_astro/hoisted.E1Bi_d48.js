import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js";import"https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";import"./SocialMediaIcons.astro_astro_type_script_index_0_lang.Bx-rmOrY.js";document.getElementById("loginForm")?.addEventListener("submit",function(e){const t="evereilly@bakemyday.com",o="password123",n=document.getElementById("email"),a=document.getElementById("password"),i=n.value,l=a.value;(i!==t||l!==o)&&(e.preventDefault(),alert("Invalid email or password. Please try again."))});document.getElementById("loginForm").addEventListener("submit",function(e){e.preventDefault();const t=e.target;t.checkValidity()?window.location.href="/final-project-1":t.reportValidity()});