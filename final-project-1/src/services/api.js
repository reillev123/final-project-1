// api.js
export async function fetchRecipes(queryParams) {
    const baseURL = "https://api.edamam.com/api/recipes/v2";
    const appId = "d7193a6c";
    const appKey = "c9b8ee8a1b8166ef57bc491438a36768";
    
    const queries = queryParams.query.map(q => `"${q}"`).join(', ');
    const fullURL = `${baseURL}?type=public&beta=true&q=${encodeURIComponent(queries)}&app_id=${appId}&app_key=${appKey}&dishType=${queryParams.dishType}`;
    
    try {
        const response = await fetch(fullURL);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return [];
    }
}

export function renderRecipe(recipe, containerId) {
    const container = document.getElementById(containerId);
    const recipeCard = document.createElement('div');
    recipeCard.className = 'card';
    recipeCard.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.label}">
        <h5 class="card-title">${recipe.label}</h5>
        <a href="${recipe.url}" target="_blank" class="btn">View Recipe</a>
    `;
    container.appendChild(recipeCard);
}
async function loadRecipes() {
    const recipes = await fetchRecipes({ query: ["pastries", "cakes", "bread", "cookies"], dishType: "Desserts" });
    
    if (recipes.length > 0) {
        const breadRecipes = recipes.filter(recipe => recipe.recipe.label.toLowerCase().includes('bread'));
        const cakeRecipes = recipes.filter(recipe => recipe.recipe.label.toLowerCase().includes('cake'));
        const pastryRecipes = recipes.filter(recipe => recipe.recipe.label.toLowerCase().includes('pastry'));
        const cookiesRecipes = recipes.filter(recipe => recipe.recipe.label.toLowerCase().includes('cookie'));

        if (breadRecipes.length > 0) {
            const randomBreadRecipe = breadRecipes[Math.floor(Math.random() * breadRecipes.length)].recipe;
            renderRecipe(randomBreadRecipe, 'bread-recipes');
        }

        if (cakeRecipes.length > 0) {
            const randomCakeRecipe = cakeRecipes[Math.floor(Math.random() * cakeRecipes.length)].recipe;
            renderRecipe(randomCakeRecipe, 'cake-recipes');
        }

        if (pastryRecipes.length > 0) {
            const randomPastryRecipe = pastryRecipes[Math.floor(Math.random() * pastryRecipes.length)].recipe;
            renderRecipe(randomPastryRecipe, 'pastry-recipes');
        }

        if (cookiesRecipes.length > 0) {
            const randomCookiesRecipe = cookiesRecipes[Math.floor(Math.random() * cookiesRecipes.length)].recipe;
            renderRecipe(randomCookiesRecipe, 'cookies-recipes');
        }
    } else {
        console.log('No recipes found');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    loadRecipes();
});