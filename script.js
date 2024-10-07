function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}







function allitems(category,buttonElement) {

   


    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => {
            // console.log(data.pets);
            // displayItems(data.pets);
            

            data.pets.forEach(pet => {

                if (!pet.breed) {
                    pet.breed = 'No Data Available'; // Set default value if breed is missing
                  }


                  if(!pet.gender)
                  {
                    pet.gender = 'No Data Available'; 
                  }


                  if(!pet.date_of_birth)
                  {
                    pet.date_of_birth = 'No Data Available'; 
                  }


                // Check each key for null or undefined values
                Object.keys(pet).forEach(key => {
                    if (pet[key] === null || pet[key] === undefined  ) {
                        pet[key] = 'No Data Available';
                      }
                });
              });


              
            if (category) {
                const filteredData = data.pets.filter((element) => element.category === category);
                console.log(filteredData);
                displayItems(filteredData);
            } else {
                console.log(data.pets);
                displayItems(data.pets);
            }

            const buttons = document.querySelectorAll('.category-button');
            buttons.forEach(button => {
                button.classList.remove('active-button');
            });
        
            // Highlight the selected button
            buttonElement.classList.add('active-button');
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
    if (data.length === 0) {
        const no_result = document.createElement("div");
        // no_result.classList.add("flex", "flex-col", "items-center");
        no_result.innerHTML = `
        <div class="flex flex-col items-center">
        <img class="w-1/2" src="images/error.webp" alt="">
        <h1 class="text-3xl font-bold">No Information Available</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout.</p>
        </div>
        `;
        card_container.appendChild(no_result);
    }


    else{

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
                   <button onclick="addsidebar_apidata('${element.image}')"    class="btn"><i class="fa-regular fa-thumbs-up"></i></button>
                   <button class="btn">Adopt</button>
                   <button class="btn">Details</button>
               </div>
        
           </div>
        
               `
        
               card_container.appendChild(card);
           })

    }
   
}




function displayCategories(data) {
  
    const category_types = document.getElementById("category_types");

    data.forEach(element => {
        const category = document.createElement("div");
        category.innerHTML = `
        <div class="rounded-xl p-3"><button  onclick="allitems('${element.category}',this)" class="btn w-full h-full py-3 font-bold text-xl category-button"><img
                            src="${element.category_icon}" alt="">${element.category}</button></div>
        
        `

        category_types.appendChild(category);
    })

}




function addsidebar_apidata(element) {
   
    const sidebar = document.getElementById("sidebar");
    const sideelement = document.createElement("div");
    sideelement.innerHTML = `    
     <div class="pl-5 mt-5 "><img  class="rounded-xl w-40"   src="${element}" alt="" srcset=""></div>`;

    sidebar.appendChild(sideelement);

}





 allitems();
allcategories();