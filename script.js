let titre = document.getElementById("titre")
titre.textContent = "Nouveau "
for(let i = 0 ; i <= 5 ; i++){
    titre.textContent+=" "+i
}
document.write(typeof(titre))

const personne = {
    nom: "Yon-Tailleux",
    prenom: "Cassandre",
    age: 18,
    ville: "Ifs"
}

const personnes = { 
    persUn : {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    persDeux : {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    persTrois : {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
}

console.log(personnes.persUn)
console.log(personnes.persDeux)
console.log(personnes.persTrois)

console.table(personnes)

const personnesTab = [
    {prenom: "John", nom: "Doe", age: 25, ville: "Rouen"},
    {prenom: "Jane", nom: "Doe", age: 30, ville: "Paris"},
    {prenom: "Jim", nom: "Doe", age: 35, ville: "Caen"}
]
personnesTab.push({prenom: " Marc", nom: "Doe", age: 32, ville: "Marseille"})
console.table(personnesTab)

personnesTab[0].prenom = 'Jean'
console.table(personnesTab)
personnesTab.splice(1,1)
console.table(personnesTab)

const numeros=[1,2,3,4,5,6,7,8,9,10]
console.log(numeros[0])
console.log(numeros[numeros.length-1])
console.log(numeros.length)

const dizaine = []
for(let i = 0; i<=100 ; i+=10){
    dizaine.push(i)
}
console.table(dizaine)
console.table(dizaine.reverse())

const  numbers = [ 2, 5, 1, 9, 0, 3, 7, 4, 6, 8 ]
console.table(numbers)
console.table(numbers.sort())

numbers.push(11)
console.table(numbers)
numbers.unshift(0)
console.table(numbers)
numbers.pop()
console.table(numbers)


