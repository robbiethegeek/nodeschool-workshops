var pets = ['cat', 'dog', 'rat'];

pets.forEach(function(pet, index){
    pets[index] = pet + 's';
})

console.log(pets)