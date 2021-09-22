let username = prompt("Veuillez renseigner votre nom !")
let randomNumber = Math.floor(Math.random() * 101);
let chance = 0;
let counter;

for(counter=1; counter<=10; counter+=1) {
    choiceNumber = parseInt(prompt("Saisir un chiffre:"), 10);

    if(choiceNumber < randomNumber) {
        alert("It's more !");
        
    }

    if(choiceNumber > randomNumber) {
        alert("It's less");
    }

    if 
        (choiceNumber === randomNumber) {
            alert("You Win " + username );
            break;
        }
}   



