// exercice 1

let lastName = prompt(`Quel est votre nom?`);

if (lastName.toLowerCase() == "Durand");
{
    console.log(`Bienvenue Mr ${lastName}`);
}

let firstName = prompt(`Quel est votre prénom?`);
let age = prompt(`Quel est votre âge?`);
age =parseInt(age) +1
if (firstName.toLowerCase() == "Michel" && age.toLowerCase() == "30");
{
    console.log(`je m'appelle ${firstName} et j'ai ${age} ans l'année prochaine`);
}
// exercice 2
let lenght = prompt(`Définissez une longueur`);

let width = prompt(`Définissez une largueur`);

let surface= lenght*width;

console.log(`Le rectangle de longueur ${lenght}cm et de largeur ${width}cm a pour surface ${surface}cm2`);
// exercice 3


let tempCelsius = prompt(`Quel est la temperature exterieure en °Celsius?`);
let tempKelvin = parseInt(tempCelsius) + 273.15;

console.log(`la temperature de ${tempCelsius} °Celsius vaut ${tempKelvin} en Kelvin`)

// exercice 4

let x = prompt(`Définissez x`);
let y = prompt(`Définissez y`);
let message ;

if (parseInt(x) < parseInt(y)) {
    message = `x est plus petit que y`;
} else  {
    message =`x est plus grand que y`;
}

let paragraphe = document.getElementById("p1");
paragraphe.innerHTML= message;