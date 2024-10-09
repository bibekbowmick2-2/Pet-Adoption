# Project Name: Pet Adoption
# Live Site Link: https://bibekbowmick2-2.github.io/Pet-Adoption/
# Figma UI for this project
![Screenshot_3](https://github.com/user-attachments/assets/d28f4daf-1ee9-4346-9856-ace9f0103ee7)

![Screenshot_4](https://github.com/user-attachments/assets/fdc4561b-67de-4744-99aa-8ee9af9706e0)

![Screenshot_6](https://github.com/user-attachments/assets/63f12335-ae46-43e5-bf25-8679134dd75f)


# Short description of the project.

## 1.Google Fonts and DaisyUI:

- It uses Google Fonts (Lato family) for styling text.
- DaisyUI (built on top of Tailwind CSS) is used for easy styling and UI components.


## 2.Navbar:

- A responsive navigation bar with options like "Home," "Shop," and "Contact."
- Uses a dropdown menu for smaller screens (mobile).



## 3.Hero Section:

- It features a banner introducing the service with a large, bold title ("Your Path to Adoption Starts Here").
- A "View More" button triggers the scrollToSection() function to smoothly scroll to the next section.


## 4.Category Section:

- A grid layout dynamically filled with pet categories, which are fetched from an API.
- Each category button triggers a filter function (allitems) to display pets of that category.


## 5.Main Section:

- It includes the display area for pet cards and a sidebar for a list of selected pets.
- Pets are fetched from the API, and the displayItems() function generates dynamic cards for each pet with details like breed, birth date, gender, and price.


## 6.Modal Section:

- A modal (popup) is used to display adoption success messages with a countdown timer.
- Another modal (showDetailsModal) is used to display detailed information about a pet when the user clicks on "Details."





# ES6 features used here

## 1. Arrow Functions
Arrow functions provide a more concise syntax for writing functions and automatically bind the value of this to the surrounding scope.

```bash
  const showAdoptModal = () => { ... };
fetch("url").then((res) => res.json()).then((data) => { ... });

```


## 2. Template Literals
Template literals are used to embed variables or expressions directly inside strings. They are enclosed in backticks (`) and allow interpolation using ${}.

```bash
 const sideelement = document.createElement("div");
sideelement.innerHTML = `
  <div class="pl-5 mt-5 "><img  class="rounded-xl w-40" src="${element}" alt="" srcset=""></div>`;


```


## 3. const and let for Block Scoping
const and let are used to declare variables with block scope instead of function scope, making the code cleaner and more predictable.

```bash
const section = document.getElementById(id);
let countdown = 3;


```


## 4. Destructuring Assignment
Destructuring allows for the extraction of data from arrays or objects into distinct variables.

```bash
 .then(({ pets }) => { ... }); // Destructuring `pets` from `data`


```


## 5. Default Parameter Values
Functions can have default values for parameters. In the function addsidebar_apidata, element is passed, but a default value is not explicitly shown. This feature allows developers to set defaults if needed.




## 6. fetch() API for Promises
fetch() is part of ES6 and used to make network requests that return Promises. It's an alternative to older XMLHttpRequest (XHR).

```bash
 fetch("https://openapi.programming-hero.com/api/peddy/pets")
  .then((res) => res.json())
  .then((data) => { ... });


```


## 7. async and await
The function showDetailsModal uses async and await to handle asynchronous requests in a cleaner, synchronous-looking manner.

```bash
  const showDetailsModal = async (pet_id) => {
  const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pet_id}`);
  const data = await response.json();
  ...
};


```

## 8. let and const in Loops
Using let in loops ensures that the value of the loop variable is block-scoped to each iteration.js

```bash
  data.forEach(element => { ... }); // `element` is block-scoped in this `forEach` loop


```

# 5 key features of the project.

## 1.Dynamic Data Fetching & Display
## 2.Category-Based Filtering
## 3.Modal for Detailed Information
## 4.Adoption Countdown Modal
## 5.Sidebar Update with User Interaction
