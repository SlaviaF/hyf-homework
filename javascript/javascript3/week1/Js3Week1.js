//jsonData
const recipes =
    [{
        "recipeName": "Sheperds Pie",
        "mainIngrediens": [{
            "potatoes": 4
        }, {
            "minced lamb": "500 grams"
        }, {
            "mixed herds": ["thyme", "basil", "rosemary"]
        }, {
            "canned Tomatoes": "1 can"
        }]
    }]

//Investigate API
fetch('https://api.jikan.moe/v3')
    .then(response => response.json())
    .then(jikan => console.log(jikan))
//this is string type Json







