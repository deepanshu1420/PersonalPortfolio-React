import fanta from "../projects/FoodImages/fanta.png";
import Cadbury from "../projects/FoodImages/Cadbury.png";
import MottichoorLadoo from "../projects/FoodImages/MottichoorLadoo.png";
import RedBull from "../projects/FoodImages/RedBull.png";
import KitKat from "../projects/FoodImages/KitKat.png";
import VanillaCocaCola from "../projects/FoodImages/VanillaCocaCola.png";
import GooddayBiscuits from "../projects/FoodImages/GooddayBiscuits.png";
import DarkChocolate from "../projects/FoodImages/DarkChocolate.png";
import AmulKool from "../projects/FoodImages/AmulKool.png";
import AmulFrostik from "../projects/FoodImages/AmulFrostik.png";
import HideandSeek from "../projects/FoodImages/HideandSeek.png";
import NiveaLotion from "../projects/FoodImages/NiveaLotion.png";

const dataBag = [
    {
        id: 0,
        imgSrc : fanta,  // imported image
        title : "Fanta",
        price : 120,
        discount: 20,
        desc : "This is a globally recognized brand of fruit-flavored carbonated soft drinks created by Coca-Cola. Known for its vibrant colors and bold flavors, Fanta has been a favorite among consumers of all ages since its inception. It offers a refreshing and fun alternative to traditional cola beverages.",
        category : "drinks",
        newArrival : true
    },  
    {
        id: 1,
        imgSrc : Cadbury,  
        title : "Cadbury Silk",
        price : 100,
        desc : "Dairy Milk Silk is a premium chocolate bar known for its rich, creamy texture and smooth taste. Introduced as a luxurious extension of the classic Cadbury Dairy Milk range, Silk is celebrated for its indulgent quality, making it a popular choice for special occasions and everyday treats alike. The chocolate melts effortlessly in the mouth, offering a delightful experience that chocolate lovers cherish.",
        category : "sweets",
        newArrival : false
    },
    {
        id : 2,
        imgSrc : MottichoorLadoo, 
        title : "mottichoor ladoo",
        price : 150,
        discount: 25,
        desc : "These ladoo is a traditional Indian sweet made from tiny, pearl-like balls of gram flour, which are deep-fried and then soaked in sugar syrup. These delicate, orange-colored boondi clusters are then shaped into round, melt-in-the-mouth ladoos. Often garnished with slivers of pistachios or almonds and a touch of cardamom, motichoor ladoos are a festive favorite, enjoyed during celebrations and religious occasions for their rich, sweet flavor and delightful texture.",
        category : "halwai",
        newArrival : true
        
    },
    {
       id : 3,
       imgSrc : RedBull, 
       title : "Red bull",
       desc : "This is a popular energy drink known for its ability to boost energy and improve concentration. Created in Austria in 1987, it contains caffeine, taurine, B vitamins, and sugars, which together provide a quick and sustained energy boost. Marketed with the slogan , it is widely consumed by athletes, students, and professionals needing to enhance their physical performance and mental alertness. Red Bull is also known for its sponsorship of various extreme sports and events, reinforcing its brand image associated with energy and adventure.",
       price : 120,
       discount: 15,
       category : "drinks",
       newArrival : false
       
    },
    {
        id : 4,
        imgSrc : KitKat,
        title : "Kit Kat",
        desc : "These chocolate-covered wafer bar introduced in 1935 by Rowntree's of York and now produced globally by Nestlé. Known for its iconic slogan Have a break, have a Kit Kat, the bar comes in various flavors, particularly in Japan, where unique varieties like green tea and wasabi are popular. Kit Kat bars typically consist of layers of wafer covered in chocolate and are available in different sizes",
        price : 40,
        discount: 5,
        category : "sweets",
        newArrival : false
    },
    {
        id : 5,
        imgSrc : VanillaCocaCola,
        title : "Vanilla Coca Cola",
        desc : "Coca-Cola Vanilla is a variant of the classic Coca-Cola, introduced in 2002. It features the familiar cola taste with a hint of vanilla flavor, offering a smooth and creamy twist. After being discontinued in 2005 in the U.S., it made a comeback in 2007 due to popular demand and continues to be a favorite for those seeking a unique spin on the traditional cola beverage.",
        price : 150,
        category : "drinks",
        newArrival : true
    },
    {
        id : 6,
        imgSrc : GooddayBiscuits,
        title : "Goodday Biscuits",
        desc : "Gooday biscuits are a popular treat, known for their delightful crunch and rich flavor. Made from high-quality ingredients, these biscuits come in various delicious flavors such as butter, cashew, and chocolate, appealing to a wide range of tastes. Perfect for a quick snack or a tea-time companion, Gooday biscuits offer a satisfying bite that combines the right amount of sweetness with a comforting, homemade feel. Their consistency and taste make them a favorite choice for many biscuit lovers.",
        price : 55,
        discount: 22,
        category : "biscuits",
        newArrival : true
    },
    {
        id : 7,
        imgSrc : DarkChocolate,
        title : "Dark Chocolate",
        desc : "It is a luxurious and sophisticated treat, celebrated for its rich and intense flavor. Made primarily from cocoa solids, cocoa butter, and sugar, it boasts a higher cocoa content compared to milk chocolate, resulting in a more complex and slightly bitter taste. Renowned for its potential health benefits, dark chocolate is packed with antioxidants and minerals, making it a guilt-free indulgence. Its smooth texture and deep, robust flavor profile make it a favorite among chocolate connoisseurs and those seeking a more refined dessert experience. Whether enjoyed on its own or used in gourmet recipes, dark chocolate is a timeless delight.",
        price : 220,
        discount: 20,
        category : "sweets",
        newArrival : false
    },
    {
        id : 8,
        imgSrc : AmulKool,
        title : "Badam Shake : Vanila",
        desc : "Almond shakes, are a delicious and nutritious beverage made from ground almonds, milk, and often flavored with cardamom or saffron. This creamy drink is a perfect blend of rich, nutty flavors and smooth, refreshing milk, offering a delightful taste and a boost of energy. Often sweetened with sugar or honey, badam shakes are not only a treat for the taste buds but also packed with essential nutrients such as vitamins, minerals, and healthy fats. Ideal for a cooling refreshment in the summer or a nourishing drink any time of the year, badam shakes provide a wholesome and satisfying experience.",
        price : 115,
        category : "drinks",
        newArrival : true
    },{
        id : 9,
        imgSrc : AmulFrostik,
        title : "Amul frostik",
        desc : "Frostik is a beloved ice cream treat, known for its creamy texture and delightful flavors. These ice cream bars, covered in rich chocolate coating, offer a perfect blend of sweetness and indulgence. Available in a variety of flavors such as classic vanilla, crunchy nuts, and fruity options, Amul Frostik caters to diverse tastes and preferences. Made with high-quality ingredients by one of India's most trusted dairy brands, these ice creams provide a refreshing escape from the heat and a moment of pure enjoyment. Whether enjoyed as a quick snack or a dessert, Amul Frostik promises a delightful experience with every bite.",
        price : 65,
        discount: 10,
        category : "sweets",
        newArrival : false
    },
    {
        id : 10,
        imgSrc : HideandSeek,
        title : "Hide and Seek Biscuit",
        desc : "Very popular and beloved snack, known for their unique combination of crunchy biscuit and delicious chocolate chips. Each bite offers a perfect balance of sweetness and texture, with the chocolate chips peeking out from the biscuit, creating a delightful hide and seek experience. Ideal for satisfying sweet cravings, these biscuits are enjoyed by both children and adults alike. Whether paired with a cup of tea or eaten straight from the pack, Hide and Seek biscuits provide a tasty and enjoyable treat for any time of the day.",
        price : 30,
        category : "biscuits",
        newArrival : true
    },

    // last for dynamic content 
    {
        id : 11,
        imgSrc : NiveaLotion,
        title : "Nivea : body loation",
        desc : "This skin care products are renowned for their quality and effectiveness, offering a wide range of solutions for various skin types and needs. With over a century of expertise, Nivea provides products that moisturize, protect, and rejuvenate the skin. From their iconic Nivea Creme, which delivers intense hydration, to specialized products like sunscreens, anti-aging creams, and gentle cleansers, Nivea caters to both daily routines and specific skin concerns. Trusted by millions around the world, Nivea combines scientific research with a deep understanding of skin health to deliver products that leave the skin feeling soft, smooth, and nourished.",
        price : 520,
        discount: 27,
        category : "skin care",
        newArrival : true
    },
   
   
];

// drinks  , halwai , sweets , biscuits
export default dataBag;