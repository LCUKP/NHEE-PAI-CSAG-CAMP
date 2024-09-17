let pet = {
    type: "dog",
    name: "Buddy"
}

let petType;

petType = pet.type
if (petType == "dog"){
    console.log("This is a dog named "+pet.name)
}
else if (petType == "cat"){
    console.log("This is a cat named "+pet.name)
}
else {
    console.log("This is a "+petType+" named "+pet.name)
}