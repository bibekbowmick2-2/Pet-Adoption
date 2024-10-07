function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}







function allitems(category) {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.pets);
            // displayItems(data.pets);
            if (category) {
                const filteredData = data.pets.filter((element) => element.category === category);
                console.log(filteredData);
                displayItems(filteredData);
            } else {
                console.log(data.pets);
                displayItems(data.pets);
            }
        });
}



function allcategories() {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((res) => res.json())
        .then((data) => {
            
            displayCategories(data.categories);
        });
}



function displayItems(data) {


    const card_container = document.getElementById("card-container");
    card_container.innerHTML = ``;
   data.forEach(element => {

    const card = document.createElement("div");
       card.innerHTML = `
       <div class="w-full p-2 border-2 border-gray-200 mb-2 ">
       <div class="w-full">
           <img class="w-full" src="${element.image}" alt="" srcset=""><br>
           <p class="font-bold text-xl">${element.pet_name}</p>
       </div>
       <div class="flex w-full">
           <div class=""><img src="images/Frame.png" alt=""></div>
           <div class="">
               <p class="text-sm">Breed: ${element.breed}</p>
           </div>
       </div>
       <div class="flex w-full">
           <div class=""><img src="images/Frame (1).png" alt=""></div>
           <div class="">
               <p class="text-sm">Birth: ${element.date_of_birth}</p>
           </div>
       </div>
       <div class="flex w-full">
           <div class=""><img src="images/Frame (3).png" alt=""></div>
           <div class="">
               <p class="text-sm">Gender: ${element.gender}</p>
           </div>
       </div>
       <div class="flex w-full">
           <div class=""><img src="images/Frame (2).png" alt=""></div>
           <div class="">
               <p class="text-sm">Price : ${element.price}</p>
           </div>
       </div><br>
       <div class="w-full">
           <button class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
           <button class="btn">Adopt</button>
           <button class="btn">Details</button>
       </div>

   </div>

       `

       card_container.appendChild(card);
   })
}




function displayCategories(data) {
  
    const category_types = document.getElementById("category_types");

    data.forEach(element => {
        const category = document.createElement("div");
        category.innerHTML = `
        <div class="rounded-xl p-3"><button onclick="allitems('${element.category}')" class="btn w-full h-full py-3 font-bold text-xl"><img
                            src="${element.category_icon}" alt="">${element.category}</button></div>
        
        `

        category_types.appendChild(category);
    })

}



 allitems();
allcategories();