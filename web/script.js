const dishData = [
    {
        name: "Burger",
        description: "Thee pieces with regular Chips and Coleslaw",
        price: "Ksh 400",
        photo: "img/buger.jpg"
    },{
        name: "Burger Flies",
        description: "One large burger and flies",
        price: "Ksh 200",
        photo: "img/burgerfries.jpg"
    },{
        name: "Cheese Burger",
        description: "Large Cheese Burger",
        price: "Ksh 200",
        photo: "img/cheeseBurger.jpg"
    },{
        name: "Wings",
        description: "4 spicy wings",
        price: "Ksh 100",
        photo: "img/wings.jpg"
    }
];

document.getElementById("dishes").innerHTML = `
<h1 class="header">Our Dishes</h1>
<h2> Order your favourite</h2>
`

// JavaScript Template Literals: JSON to HTML
// https://www.youtube.com/watch?v=DG4obitDvUA