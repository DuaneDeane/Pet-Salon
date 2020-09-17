console.log("directory.js");
function display(){
    // create the vars
    var pets = salon.pets;
    var text ="";
    var petSection=document.getElementById("petSection");
    const dogIcon='<i class="fas fa-dog"></i>';
    const catIcon='<i class="fas fa-cat"></i>';
    const birdIcon='<i class="fas fa-crow"></i>';

    
    // travel the pets array
    for(var i=0;i<pets.length;i++){
        console.log(pets[i]);
        // create the HTML text
        text+=
        `<div class="pet">
                <h2> ${pets[i].name} </h2>
                <p> Age: ${pets[i].age} </p>
                <p> Type: ${pets[i].type} </p>
                <p> Breed: ${pets[i].breed} </p>
                <p> Color: ${pets[i].color}</p>
                <p> Gender: ${pets[i].gender} </p>
                <p> Service: ${pets[i].service}</p>
                <p> Price: ${pets[i].price}</p>
                <p> Owner: ${pets[i].ownerName} </p>
                <p> Contact: ${pets[i].contactPhone} </p>
        </div>`;
        console.log(text);
    }
    //display the pets on the HTML
    petSection.innerHTML=text;

}

display();

// extra challenge: display the number of the registered pets in any part of the html