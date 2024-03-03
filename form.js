                                    
                            //ADDING ALL THE NAME OF THE POKEMON ON OUT OPTION LISTS
let arrayOfPokemon=['pikachu'];
fetchingData();
async function fetchingData(){
    try{
    const url=`https://pokeapi.co/api/v2/pokemon/`;
    let fetchedPromise=await fetch(url);
    let usefulFetchedData=await fetchedPromise.json();  
    usefulFetchedData.results.forEach((e) => {
        arrayOfPokemon.push(e.name); // Push individual Pokemon names into the array
        let option = document.createElement("option");
        option.innerText = e.name;
        document.querySelector("#pokemonName").appendChild(option);
    });
    let pikachuOption = document.createElement("option");
    pikachuOption.innerText = "pikachu";
    document.querySelector("#pokemonName").appendChild(pikachuOption);

    }
    catch (error) {
        console.log("Error occurred during fetching:", error);
    }
}
                                    //CHANGING THE VALUE OF INPUT BOX
 let searchingPokemon="";
 let inputPokemon=document.querySelector('.inputPokemon');
 let pokemonName=document.querySelector("#pokemonName");

 pokemonName.addEventListener('change', function() {
     inputPokemon.value = this.value;
     searchingPokemon=this.value;
 });
                            //ON CHANGING THE VALUE OF INPUT MAKE CHANGES ON OUR OPTION
 inputPokemon.addEventListener('click',function(){
    inputPokemon.value='';
 })
 inputPokemon.addEventListener('change',function(){
    if(inputPokemon.value === '' || !arrayOfPokemon.includes(inputPokemon.value)) {
        console.log("Enter a proper name.");
    }    
    else{
        pokemonName.value=this.value;
        searchingPokemon = this.value;
        searchingPokemon = searchingPokemon.toLowercase();
    }
 })    
                           
                            //SEARCHING THE POKEMON AFTER CLICKING THE BUTTON
function searchButton(){
    if (arrayOfPokemon.includes(searchingPokemon) && arrayOfPokemon.includes(inputPokemon.value)){
        document.querySelector(".containerOfInfo1").style.opacity = "0";
        document.querySelector(".containerOfInfo").style.opacity = "1";
    }
    async function suraj(){
        try{
            let url=`https://pokeapi.co/api/v2/pokemon/${searchingPokemon}`;
            let fetchedPromise=await fetch(url);
            console.log(fetchedPromise);
            let usefulFetchedData=await fetchedPromise.json();
            console.log(usefulFetchedData);
            document.querySelector(".image").src=`${usefulFetchedData.sprites.front_default}`;
            //GAVING THE NAME TO THE PROPERTIES
            let containerOfInfo=document.querySelectorAll(".common")
            containerOfInfo[0].innerText=`Name: ${searchingPokemon.toUpperCase()}`;
            containerOfInfo[1].innerText=`Attack: ${usefulFetchedData.abilities[1].ability.name.toUpperCase()}`;
            containerOfInfo[2].innerText=`Weight: ${usefulFetchedData.weight}`;
        }
        catch(error){
            console.log("SOME ERROR OCURRED DURING FETCHIN the search",error);
        }
    }
    suraj();
}


