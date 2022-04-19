//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){
    // users is able to put in words that are capital
    let drinkName = document.querySelector('input').value.toLowerCase()
    // safe for users to put spaces 
    drink = drinkName.replace(/\s+/g, '');
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json())
    .then(data => {
            console.log(data.drinks)
            document.querySelector('h2').classList.toggle('hidden')
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').classList.toggle('hidden')
            document.querySelector('h3').innerText = data.drinks[0].strInstructions

    })
    .catch(err =>{
        console.log(`error ${err}`)
    });
}; 
