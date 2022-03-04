"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    html += '<div class="d-none">' + coffee.id + '</div>';
    html += '<div class="name"><p>' + coffee.name + '</p></div>';
    html += '<p class="small-name">' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

// ORIGINAL CODE PROVIDED
// function renderCoffees(coffees) {
//     var html = '';
//     for(var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }



function filtersCoffees(coffees) {
    var html = '';
    for(var i = 0; i < coffees.length; ++i) {
        if (coffees[i].roast === 'light') {
            html += renderCoffee(coffees[i]);
        }
    }
    for(var i = 0; i < coffees.length; ++i) {
        if (coffees[i].roast === 'medium') {
            html += renderCoffee(coffees[i]);
        }
    }
    for(var i = 0; i < coffees.length; ++i) {
        if (coffees[i].roast === 'dark') {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
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
        if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        else if ((coffee.name.toLowerCase()).includes(searchInput.toLowerCase()) && selectedRoast === 'all') {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = filtersCoffees(filteredCoffees);
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


var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit-coffee');
var roastSelection = document.querySelector('#roast-selection');
var coffeeSearch = document.querySelector('#coffee-text');


tbody.innerHTML = filtersCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);


// THIS ALLOWS THE SELECT OPTIONS TO AUTO COMPLETE IN REAL TIME
// roastSelection.addEventListener('change', updateCoffees);

// THIS ALLOWS THE TEXT FIELD TO COMPLETE IN REAL TIME
// coffeeSearch.addEventListener('keyup', updateCoffees);

// ACTIVATES NEW BUTTON
var newCoffeeSubmit = document.querySelector('#new-coffee-button');
newCoffeeSubmit.addEventListener('click', createCoffee);



var newCoffeeSearch  = document.getElementById('new-coffee-name');