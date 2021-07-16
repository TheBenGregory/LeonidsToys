const toys = [
{
    name: "Bop It",
    maker: "Hasbro",
    price: 29.99,
    cost: 20,
    ageGroup: "10+",
    inventory: 3
},

 {
    name: "Slingshot",
    maker: "Mr Slingshot",
    price: 25.99,
    cost: 15,
    ageGroup:  "12",
    inventory: 5
},

{
    name: "Mecha Nixon Action Figure",
    maker: "Mom's Friendly Robot Company",
    price: 54.99,
    cost: 40,
    ageGroup: "18+",
     inventory: 4
}
]

const lawnDarts = {
    name: "Lawn Darts",
    maker: "ACME",
    price: 34.99,
    cost: 23,
    ageGroup: "All Ages",
    inventory: 6
}
toys.push(lawnDarts)

const flameThrower = {
        name: "Fun Time Flamethrower",
        maker: "Ikea",
        price: 99.99,
        cost: 58,
        ageGroup: "10+",
        inventory: 9
    }

    toys.push(flameThrower)

for (const toy of toys) {
        console.log(toy.name);
    }

