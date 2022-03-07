"use strict"

function renderCoffee(coffee) {
    var coffeeDisplayedInHTML = '<div class="coffee">';
    coffeeDisplayedInHTML += '<div class="d-none">' + coffee.id + '</div>';
    coffeeDisplayedInHTML += '<div class="name">' + coffee.name + '</div>';
    coffeeDisplayedInHTML += '<p class="small-name">' + coffee.roast + '</p>';
    coffeeDisplayedInHTML += '</div>';

    return coffeeDisplayedInHTML;
}

// ORIGINAL CODE PROVIDED
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }


// filtersCoffees IS A NEW FUNCTION USED TO FILTER THE LIST BASED OFF SELECTED ROAST (LIGHT, MEDIUM, DARK, DOES NOT WORK FOR ALL)
function filtersCoffees(coffees) {
    var coffeeNameFiltered = '';
    for(var i = 0; i < coffees.length; ++i) {
        if (coffees[i].roast === 'light') {
            coffeeNameFiltered += renderCoffee(coffees[i]);
        }
    }
    for(var j = 0; j < coffees.length; ++j) {
        if (coffees[j].roast === 'medium') {
            coffeeNameFiltered += renderCoffee(coffees[j]);
        }
    }
    for(var k = 0; k < coffees.length; ++k) {
        if (coffees[k].roast === 'dark') {
            coffeeNameFiltered += renderCoffee(coffees[k]);
        }
    }

    return coffeeNameFiltered;
}



function updateCoffees(e) {
    if (e !== undefined) {
    e.preventDefault();
}
     // don't submit the form, we just want to update the data
    var searchInput = coffeeSearch.value;
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {

        // THIS IF STATEMENT ALLOWS THE TEXT FIELD TO SEARCH FOR COFFEES BASED ON WHAT KEYWORDS ARE TYPED
        if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        // THIS ELSE IF ALLOWS THE "ALL" OPTION TO WORK AND SHOW ALL
        else if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && selectedRoast === 'all roasts' ) {
            filteredCoffees.push(coffee);
        }
    });
    mainDisplay.innerHTML = filtersCoffees(filteredCoffees);
}

// THIS FUNCTION IS FOR ADDING A NEW CUSTOM COFFEES
function createCoffee(e) {
    e.preventDefault();
    // don't submit the form, we just want to update the data
    var newCoffeeName = document.querySelector('#new-coffee-name').value;
    var newCoffeeRoast = document.querySelector('#new-coffee-roast').value;
    var newCoffee = {
        id: coffees.length + 1,
        name: newCoffeeName,
        roast: newCoffeeRoast
    }
        coffees.push(newCoffee);
        updateCoffees();

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


var mainDisplay = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit-coffee');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-text');


mainDisplay .innerHTML = filtersCoffees(coffees);
submitButton.addEventListener('click', updateCoffees);


// THIS ALLOWS THE SELECT OPTIONS TO AUTO COMPLETE IN REAL TIME
roastSelection.addEventListener('change', updateCoffees);

// THIS ALLOWS THE TEXT FIELD TO COMPLETE IN REAL TIME
coffeeSearch.addEventListener('keyup', updateCoffees);

// ACTIVATES NEW BUTTON
var newCoffeeSubmit = document.querySelector('#new-coffee-button');
newCoffeeSubmit.addEventListener('click', createCoffee);



// var newCoffeeSearch  = document.getElementById('new-coffee-name');