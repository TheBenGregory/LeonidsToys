const toyToFind = 6

const toys = [
{
    id: 1,
    name: "Bop It",
    maker: "Hasbro",
    price: 29.99,
    cost: 20,
    ageGroup: "10+",
    inventory: 3
},

 {
    id: 2,
    name: "Slingshot",
    maker: "Mr Slingshot",
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
    
    id: 5,
    name: "Lawn Dart Battle Set",
    maker: "ACME",
    price: 34.99,
    cost: 23,
    ageGroup: "All Ages",
    inventory: 6
}
toys.push(lawnDarts)

const flameThrower = {
        id: 6,
        name: "Fun Time Flamethrower",
        maker: "Ikea",
        price: 99.99,
        cost: 58,
        ageGroup: "10+",
        inventory: 9
    }

    toys.push(flameThrower)

for (const toy of toys) {
    if (toy.id === toyToFind) {
        toy.price = toy.price * 1.05
        console.log(`The ${toy.name} is made by ${toy.maker} and costs $${toy.price}  
`);
    }
}

