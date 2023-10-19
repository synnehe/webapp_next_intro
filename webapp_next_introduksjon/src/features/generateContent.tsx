import type { Product } from "./types"

let randomIndex = 0

const getRandomTitle = () => {
const titles: string[] = ["Pink rubber duck", "Giant gummy lizard", "Inflatable taco", "Sparkling tennis racket", "Bubble generator", "Teleportation machine", "Crying Plant Pot", "20,000 piece puzzle", "Cinnamon bun hat", "Magic feather pen", "Niffler plushy"]
randomIndex = Math.floor(Math.random() * titles.length)

return titles[randomIndex]
}

const getRandomDescription = () => {
  const descriptions: string[] = ["A delightful and whimsical addition to your bath time, this pink rubber duck brings a touch of playfulness to your daily routine.", 
  "Indulge your sweet tooth with this colossal gummy lizard, a delicious and fun treat for candy lovers of all ages.", 
  "Take your love for tacos to the next level with this inflatable taco that adds a quirky and tasty twist to your pool or beach adventures.", 
  "Elevate your tennis game with a touch of glamour using this sparkling tennis racket, designed to make you shine on the court.", 
  "Create a magical atmosphere at parties and gatherings with this bubble generator, producing a continuous stream of shimmering bubbles for everyone to enjoy.",
  "A sci-fi enthusiast's dream, this teleportation machine offers a glimpse into the future, promising to transport you to distant places in the blink of an eye (Disclaimer: Actual teleportation not guaranteed!).",
  "A quirky and endearing addition to your home decor, this plant pot appears to shed tears when your greenery is in need of a drink, adding a touch of emotion to your indoor garden.",
  "Challenge your puzzle-solving skills with this mammoth 20,000-piece puzzle, sure to keep you entertained for hours as you piece together an intricate masterpiece.",
  "Stay warm and stylish in the colder months with this cozy cinnamon bun hat, designed to look just as delicious as it is comfortable to wear.",
  "Unlock your creativity with this magical feather pen that seems to channel the spirit of ancient wizards, making every word you write feel like a spell in the making.",
  "Delight in the world of Harry Potter with this adorable Niffler plushy, a mischievous creature known for its love of shiny objects, perfect for fans of the wizarding world and collectors of magical creatures."]
  //const randomIndex = Math.floor(Math.random() * descriptions.length)
  //Lagde tilfeldig generering for beskrivelse først, men så ville jeg at de skulle passe tittel så endret til å bruke samme index som for tittel
  
  return descriptions[randomIndex]
  }
  

const getRandomPrice = (): number => {
  return Math.floor(Math.random() * 800) + 50
}                     

export const createProducts = () => {
const products: Product[] = []

for(let i = 0; i < 8; i++) {
  const product: Product = { 
    id: i,
    title: getRandomTitle(),
    description: getRandomDescription(),
    price: getRandomPrice(),
    quantity: 1
  }

products.push(product)
}

return products
}