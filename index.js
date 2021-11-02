function searchButton() {
    const search = document.getElementById("search").value;
    document.getElementById("ingredientsDisplay").innerHTML = "";
    const mealDisplay = document.getElementById("mealDisplay");
    mealDisplay.innerHTML = ""
    if (search == "") {
        const error = 
        mealDisplay.innerHTML = `<p class="error">There are no search results.Try again!</p>`;
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        fetch(url)
            .then(res => res.json())
            .then(data => mealItem(data.meals))
        const mealItem = meals => {
            // console.log(meals);
            const search = document.getElementById("search").value = ""
            meals.forEach(mealsName => {
                const div = document.createElement("div");
                div.innerHTML = `<div class="meal-item" onclick="IngredientsSection('${mealsName.strMeal}')">            
                              <div class="meal-img">
                                <img src = "${mealsName.strMealThumb}" 
                               </div>
                               <div class="meal-name">
                                    <h3>${mealsName.strMeal}</h3>
                                </div>
                           </div>`;
                // console.log(mealsName.strMeal);
                mealDisplay.appendChild(div);
            });
        }
    }
}

function IngredientsSection(names) {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${names}`
        // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => Ingredients(data.meals))
    const Ingredients = ingredient => {
        const ingredientsDisplay = document.getElementById("ingredientsDisplay");
        ingredientsDisplay.innerHTML = ""
            // console.log(ingredient);
        ingredient.forEach(ingredients => {
            // console.log(ingredients.strMeal);
            const div1 = document.createElement("div");
            div1.innerHTML = `<div class="ingredients-item">            
                              <div class="ingredients-img">
                                <img src = "${ingredients.strMealThumb}" 
                               </div>
                               <div class="mealName">
                                   <h3>${ingredients.strMeal}</h3>
                               </div>
                               <div class="ingredientItem">
                                   <h3>Ingredients</h3>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient1}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient2}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient3}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient4}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient5}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient6}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient7}</p>
                                   <p><input class"checkbox" type="checkbox" checked>${ingredients.strIngredient8}</p>
                                   </ul>
                               </div>
                           </div>`;
            // console.log(ingredients.strMeal);
            ingredientsDisplay.appendChild(div1);
        });
    }
}