export type MenuItem = {
  name: string
  category: string
  price: number
  image: string
}
const imagePath = "/optimized/"
export const menuItems: MenuItem[] = [
  {
    name: "Chicken Karahi",
    category: "Desi",
    price: 1850,
    image: imagePath + "01-chicken-karahi.jpg",
  },
  {
    name: "Mutton Karahi",
    category: "Desi",
    price: 3200,
    image: imagePath + "02-mutton-karahi.jpg",
  },
  {
    name: "Chicken Handi",
    category: "Desi",
    price: 1950,
    image: imagePath + "03-chicken-handi.jpg",
  },
  {
    name: "Chicken Biryani",
    category: "Desi",
    price: 950,
    image: imagePath + "04-chicken-biryani.jpg",
  },
  {
    name: "Mutton Dum Pukht",
    category: "Desi",
    price: 3100,
    image: imagePath + "05-mutton-dum-pukht.jpg",
  },
  {
    name: "Chicken BBQ Platter",
    category: "Desi",
    price: 2200,
   image: imagePath + "06-chicken-bbq-platter.jpg",
  },
  {
    name: "Beef Nihari",
    category: "Desi",
    price: 1150,
    image: imagePath + "07-beef-nihari.jpg",
  },
  {
    name: "Mutton Raan",
    category: "Desi",
    price: 3500,
    image: imagePath + "08-mutton-raan.jpg",
  },
    {
    name: "Chicken Alfredo Pasta",
    category: "Continental",
    price: 1650,
    image: imagePath + "09-chicken-alfredo-pasta.jpg",
  },
  {
    name: "Chicken Parmesan",
    category: "Continental",
    price: 1850,
    image: imagePath + "10-chicken-parmesan.jpg",
  },
  {
    name: "Grilled Chicken Steak",
    category: "Continental",
    price: 1950,
    image: imagePath + "11-grilled-chicken-steak.jpg",
  },
  {
    name: "Chicken Mushroom Steak",
    category: "Continental",
    price: 2050,
    image: imagePath + "12-chicken-mushroom-steak.jpg",
  },
  {
    name: "Grilled Beef Steak",
    category: "Continental",
    price: 2850,
    image: imagePath + "13-grilled-beef-steak.jpg",
  },
  {
    name: "Chicken Lasagna",
    category: "Continental",
    price: 1750,
    image: imagePath + "14-chicken-lasagna.jpg",
  },
  {
    name: "Creamy Mushroom Pasta",
    category: "Continental",
    price: 1450,
    image: imagePath + "15-creamy-mushroom-pasta.jpg",
  },
  {
    name: "Chicken Cordon Bleu",
    category: "Continental",
    price: 1950,
    image: imagePath + "16-chicken-cordon-bleu.jpg",
  },
    {
    name: "Chicken Wings",
    category: "Starters",
    price: 950,
   image: imagePath + "17-chicken-wings.jpg",
  },
  {
    name: "Chicken Cheese Balls",
    category: "Starters",
    price: 850,
    image: imagePath + "18-chicken-cheese-balls.jpg",
  },
  {
    name: "Dynamite Chicken",
    category: "Starters",
    price: 1050,
    image: imagePath + "19-dynamite-chicken.jpg",
  },
  {
    name: "Fried Calamari",
    category: "Starters",
    price: 1250,
    image: imagePath + "20-fried-calamari.jpg",
  },
  {
    name: "Garlic Bread",
    category: "Starters",
    price: 550,
    image: imagePath + "21-garlic-bread.jpg",
  },
  {
    name: "Loaded Fries",
    category: "Starters",
    price: 750,
    image: imagePath + "22-loaded-fries.jpg",
  },
  {
    name: "Chicken Spring Rolls",
    category: "Starters",
    price: 650,
    image: imagePath + "23-chicken-spring-rolls.jpg",
  },
  {
    name: "Mozzarella Sticks",
    category: "Starters",
    price: 850,
    image: imagePath + "24-mozzarella-sticks.jpg",
  },
    {
    name: "Chicken Fajita Pizza",
    category: "Pizza & Burgers",
    price: 1650,
    image: imagePath + "25-chicken-fajita-pizza.jpg",
  },
  {
    name: "Creamy Chicken Pizza",
    category: "Pizza & Burgers",
    price: 1750,
    image: imagePath + "26-creamy-chicken-pizza.jpg",
  },
  {
    name: "Pepperoni Pizza",
    category: "Pizza & Burgers",
    price: 1950,
    image: imagePath + "27-pepperoni-pizza.jpg",
  },
  {
    name: "BBQ Chicken Pizza",
    category: "Pizza & Burgers",
    price: 1700,
    image: imagePath + "28-bbq-chicken-pizza.jpg",
  },
  {
    name: "Classic Beef Burger",
    category: "Pizza & Burgers",
    price: 1250,
    image: imagePath + "29-classic-beef-burger.jpg",
  },
  {
    name: "Chicken Smash Burger",
    category: "Pizza & Burgers",
    price: 1150,
    image: imagePath + "30-chicken-smash-burger.jpg",
  },
  {
    name: "Grilled Chicken Burger",
    category: "Pizza & Burgers",
    price: 1200,
   image: imagePath + "31-grilled-chicken-burger.jpg",
  },
  {
    name: "Mushroom Swiss Burger",
    category: "Pizza & Burgers",
    price: 1450,
    image: imagePath + "32-mushroom-swiss-burger.jpg",

  },
    {
    name: "Molten Lava Cake",
    category: "Desserts",
    price: 750,
    image: imagePath + "33-molten-lava-cake.jpg",
  },
  {
    name: "Brownie with Ice Cream",
    category: "Desserts",
    price: 700,
    image: imagePath + "34-brownie-with-ice-cream.jpg",
  },
  {
    name: "Lotus Cheesecake",
    category: "Desserts",
    price: 850,
    image: imagePath + "35-lotus-cheesecake.jpg",
  },
  {
    name: "Chocolate Mousse",
    category: "Desserts",
    price: 650,
    image: imagePath + "36-chocolate-mousse.jpg",
  },
  {
    name: "Mango Cheesecake",
    category: "Desserts",
    price: 800,
    image: imagePath + "37-mango-cheesecake.jpg",
  },
  {
    name: "Crème Brûlée",
    category: "Desserts",
    price: 750,
    image: imagePath + "38-creme-brulee.jpg",
  },
  {
    name: "Tiramisu",
    category: "Desserts",
    price: 800,
    image: imagePath + "39-tiramisu.jpg",
  },
  {
    name: "Salted Caramel Tart",
    category: "Desserts",
    price: 700,
   image: imagePath + "40-salted-caramel-tart.jpg",

  },
    {
    name: "Fresh Lime",
    category: "Drinks",
    price: 450,
    image: imagePath + "41-fresh-lime.jpg",
  },
  {
    name: "Mint Margarita",
    category: "Drinks",
    price: 550,
    image: imagePath + "42-mint-margarita.jpg",
  },
  {
    name: "Strawberry Mojito",
    category: "Drinks",
    price: 650,
    image: imagePath + "43-strawberry-mojito.jpg",
  },
  {
    name: "Mango Smoothie",
    category: "Drinks",
    price: 600,
    image: imagePath + "44-mango-smoothie.jpg",
  },
  {
    name: "Peach Iced Tea",
    category: "Drinks",
    price: 500,
    image: imagePath + "45-peach-iced-tea.jpg",
  },
  {
    name: "Blueberry Lemon Fizz",
    category: "Drinks",
    price: 650,
    image: imagePath + "46-blueberry-lemon-fizz.jpg",
  },
  {
    name: "Pomegranate Sparkler",
    category: "Drinks",
    price: 650,
    image: imagePath + "47-pomegranate-sparkler.jpg",
  },
  {
    name: "Creamy Iced Coffee",
    category: "Drinks",
    price: 550,
    image: imagePath + "48-creamy-iced-coffee.jpg",
  },
]
