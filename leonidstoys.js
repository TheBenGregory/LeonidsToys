// const toyToFind = 6

const toys = [
{
    id: 1,
    name: "Lil' Docs Liposuction Playset",
    maker: "Hasbro",
    price: 29.99,
    cost: 20,
    ageGroup: "10+",
    inventory: 3
},
{
    id: 2,
    name: "Baby's First TIG Welder",
    maker: "Joanne Fabrics",
    price: 25.99,
    cost: 15,
    ageGroup:  "12",
    inventory: 5
},
{
    id: 3,
    name: "Mecha Nixon Action Figure",
    maker: "Mom's Friendly Robot Company",
    price: 54.99,
    cost: 40,
    ageGroup: "18+",
    inventory: 4
}
]
const lawnDarts = {
    
    
    name: "Lawn Dart Battle Set",
    maker: "ACME",
    price: 34.99,
    cost: 23,
    ageGroup: "All Ages",
    inventory: 6
}
// toys.push(lawnDarts)

const flameThrower = {
        
        name: "Fun Time Flamethrower",
        maker: "Ikea",
        price: 99.99,
        cost: 58,
        ageGroup: "10+",
        inventory: 9
    }

    const elmo = {
        
        name: "Lemme Bum a Smoke Elmo",
        maker: "Mattel",
        price: 59.99,
        cost: 32,
        ageGroup: "7+",
        inventory: 13
    }    

    const throwingStars = {
        name: "Ninja Throwing Stars",
        maker: "Pediatric Eye Surgeons Inc",
        price: 14.99,
        cost: 5,
        ageGroup: "10+",
        inventory: 47
    }

   

const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length -1
    const currentLastToy = toys[lastIndex]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}


addToyToInventory(flameThrower)
addToyToInventory(throwingStars)
addToyToInventory(elmo)
addToyToInventory(lawnDarts)


for (const toy of toys) {
    // if (toy.id === toyToFind) {
    //     toy.price = toy.price * 1.05
        console.log(`The ${toy.name} is made by ${toy.maker} and costs $${toy.price} and its ID is ${toy.id} 
`);
    }
