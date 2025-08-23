const about = document.createElement('div')
about.classList.add('about')

const header = document.createElement('h2')

header.textContent = "About Us"

const aboutUs = document.createElement('div')
aboutUs.classList.add('aboutUs')

function Para(text){
    const para = document.createElement('p')
    para.textContent = text
    return para
}

const p1 = Para("Welcome to our restaurant, where the heart of Pakistan's culinary traditions meets a passion for authentic, home-cooked flavors. Our journey began with a simple idea: to bring the true taste of our heritage to your table. Every dish on our menu is a tribute to the vibrant, rich, and soulful cuisine that has been passed down through generations.")

const p2 = Para("From the sizzle of our Chicken Karahi to the aromatic layers of our Chicken Biryani, each recipe is crafted with meticulous care. We use the freshest local ingredients and a blend of hand-ground spices to create a dining experience that is both authentic and unforgettable. Our Seekh Kebabs are a testament to our commitment to smoky, grilled perfection, while our comforting Beef Meatballs bring a taste of home to your plate.")

const p3 = Para("We believe that great food is about more than just taste—it's about community, family, and tradition. Our desserts, from the exquisite Sohan Halwa to the classic Gulab Jamun, are a sweet finish to a meal filled with love and warmth.")

const p4 = Para("Join us and savor the flavors of a legacy. It's more than just a meal; it's a celebration of Pakistani cuisine.")

const paragraphs = [p1, p2, p3, p4]

for(let para of paragraphs){
    aboutUs.appendChild(para)
}

about.appendChild(aboutUs)

export {about}