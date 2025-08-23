const menu = document.createElement('div')
menu.classList.add('menu')

function DishCard (heading, price, description){
    const dish = document.createElement('div')
    dish.classList.add('card')

    const header = document.createElement('h3')
    header.textContent = heading

    const para = document.createElement('p')
    para.textContent = description

    const priceTag = document.createElement('span')
    priceTag.classList.add('priceTag')
    priceTag.textContent = `$ ${price}`

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('btn')
    orderBtn.classList.add('order')
    orderBtn.textContent = 'Order'
    
    const btnPriceHolder = document.createElement('div')
    btnPriceHolder.classList.add('priceOrder')
    btnPriceHolder.appendChild(orderBtn)
    btnPriceHolder.appendChild(priceTag)
    dish.appendChild(header)
    dish.appendChild(para)
    dish.appendChild(btnPriceHolder)

    return dish
}

function Category(){
    const category = document.createElement('div')
    category.classList.add('dishCategory')
    return category
}
const spicesHead = document.createElement('h2')
spicesHead.textContent = 'Spices'
const sweetsHead = document.createElement('h2')
sweetsHead.textContent = 'Sweets'
const beveragesHead = document.createElement('h2')
beveragesHead.textContent = 'Beverages'
const chickenKarahi = DishCard('Chicken Karahi', 20, "Tender chicken pieces simmered in a rich, rustic tomato base with fiery green chilies and ginger. Each bite bursts with authentic, bold Pakistani spices. Served sizzling hot, it's a deeply aromatic and addictive experience that’s perfect for scooping up with fresh, warm naan.")


const muttonKarahi = DishCard('Mutton Karahi',40, "Slow-cooked to perfection, our Mutton Karahi features succulent, fall-off-the-bone meat in a thick, savory gravy. The deep, rich flavors of the mutton are elevated by a blend of hand-ground spices, creating a luxuriously tender and unforgettable dish.")


const chickenBiryani = DishCard('Chicken Biryani',10, "A celebration of flavor in every grain. Fragrant basmati rice is layered with tender, marinated chicken, then slow-cooked with whole spices and fresh herbs until every single mouthful is infused with a heady, tantalizing aroma. It's a regal and deeply satisfying experience.")


const seekhKebab = DishCard('Seekh Keba Platter',25, "Smoky, juicy, and perfectly grilled. Our Seekh Kebabs are crafted from finely minced beef, seasoned with a secret blend of herbs and spices, then cooked over an open flame to achieve a beautifully crisp exterior and a tender, melt-in-your-mouth interior. Served with a cool mint raita to balance the heat.")

const beefMeatballs = DishCard('Beef Meatballs', 30, "A dish that feels like a warm hug. Perfectly seasoned beef meatballs are simmered in a thick, rich tomato sauce until they are unbelievably tender. Each meatball is a savory delight, best enjoyed with a side of warm roti to soak up every last drop of the rich, savory gravy."
)

const sohanHalwa = DishCard('Sohan Halwa',40,  "A true Multani masterpiece. This traditional sweet is a golden, dense confection with a satisfyingly chewy texture and a deep, nutty caramel flavor. Topped with a generous scattering of crunchy pistachios and almonds, it’s an exquisite treat for any occasion.")

const sheerKhorma = DishCard('Sheer Khorma',10, "A creamy, decadent festive delight. Fragile vermicelli is slow-simmered in rich, sweetened milk and infused with dates, pistachios, and almonds. Every spoonful is a luxurious, comforting journey of delicate flavors and textures.")

const ghulabJamun = DishCard('Ghulab Jamun',5, "These golden-brown orbs of pure joy are soft, spongy, and impossibly delicious. Fried to perfection, they are then soaked in a fragrant, sweet syrup scented with rose and cardamom, making them an irresistible, melt-in-your-mouth experience.")

const tea = DishCard('Tea (Chai)', 5,"A rich and invigorating classic. Our authentic Pakistani tea is slow-brewed to perfection with milk, sugar, and a hint of cardamom. This warm, comforting beverage is the perfect finale to a spicy meal, offering a soothing and satisfying close to your dining experience.")

const lemonDrink = DishCard('Iced Lemon & Mint Drink', 5,"A crisp and revitalizing beverage. This cooling drink combines fresh-squeezed lemon juice with muddled mint leaves and a touch of sweetness. Served over ice, it’s a beautifully refreshing and zesty escape, perfect for cleansing your palate.")

const softDrinks = DishCard('Soft Drinks', 5,"Quench your thirst with our selection of classic, ice-cold Soft Drinks. Choose from a variety of your favorite fizzy beverages to complement your meal and provide a refreshing, bubbly lift.")

const spices = [chickenKarahi, muttonKarahi, chickenBiryani, seekhKebab, beefMeatballs]
const sweets = [sohanHalwa, sheerKhorma, ghulabJamun]
const beverages = [ tea, lemonDrink, softDrinks]

const spicesCategory = Category('Spices')
const sweetsCategory = Category('Sweets')
const beveragesCategory = Category('Beverages')

for(let dish of spices){
    spicesCategory.appendChild(dish)
}

for(let dish of sweets){
    sweetsCategory.appendChild(dish)
}

for(let dish of beverages){
    beveragesCategory.appendChild(dish)
}

const categroies = [spicesHead,spicesCategory, sweetsHead, sweetsCategory, beveragesHead, beveragesCategory]

for(let category of categroies){
    menu.appendChild(category)
}
export {menu}