function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}




function sortPrice(){
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => {
        const sortedData = data.pets.sort((a, b) => b.price - a.price);
        displayItems(sortedData);
    });

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


                  if(pet.price === null)
                  {
                    pet.price = 'No Data Available'; 
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
                
                displayItems(filteredData);
            } else {
                
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
                   <button id="showAdoptModal_id" onclick="showAdoptModal()" class="btn">Adopt</button>
                   <button onclick="showDetailsModal('${element.petId}')" class="btn">Details</button>
                   
               </div>
        
           </div>
        
               `
        
               card_container.appendChild(card);
           })

    }
   
}


const showAdoptModal = () => {

    let  countdown = 3;
   

    const countdownElement = document.getElementById('countdown');




  const intervalId = setInterval(() => {
    
    countdownElement.innerText = countdown;
    countdown--;

    if (countdown === -1) {
      clearInterval(intervalId);
      my_modal_4.close();
      
      
    }
  }, 800);


  my_modal_4.showModal()

   
}



const showDetailsModal = async(pet_id) => {
 

    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${pet_id}`);

    const data = await response.json();

    console.log(data);

    const modal_container = document.getElementById("modal_container");
    modal_container.innerHTML = `
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                  
                  <img class="w-full" src="${data.petData.image}" alt="">
                  <h1 class="text-5xl font-extrabold">${data.petData.pet_name}</h1>


                  <div class="grid grid-cols-2">
                  <div class="flex">
                   <div class=""><img src="images/Frame.png" alt=""></div>
                   <div class="">
                       <p class="text-sm">Breed: ${data.petData.breed} </p>
                   </div>
                   </div>


                   <div class="flex">
                   <div class=""><img src="images/Frame (1).png" alt=""></div>
                   <div class="">
                       <p class="text-sm">Birth: ${data.petData.date_of_birth} </p>
                   </div>
                   </div>



                   <div class="flex">
                   <div class=""><img src="images/Frame (3).png" alt=""></div>
                   <div class="">
                       <p class="text-sm">Gender: ${data.petData.gender}</p>
                   </div>
                   </div>



                   <div class="flex">
                   <div class=""><img src="images/Frame (2).png" alt=""></div>
                   <div class="">
                       <p class="text-sm">Price: ${data.petData.price}</p>
                   </div>
                   </div>


                   <div class="flex">
                   <div class=""><img src="images/Frame (3).png" alt=""></div>
                   <div class="">
                       <p class="text-sm">VaccinatedStatus: ${data.petData.vaccinated_status}</p>
                   </div>
                   </div>

                   </div>



                   

                  <h1 class="text-xl font-extrabold">Details Information</h1>
                  <p>${data.petData.pet_details}</p>
                  <div class="modal-action">
                    <form method="dialog">
                      <!-- if there is a button in form, it will close the modal -->
                      <button class="btn">Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
    
    `;
    my_modal_5.showModal()
    
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