🛍️ Nike-Inspired E-Commerce Website (Frontend Project)
Ye project ek Nike-inspired e-commerce website ka frontend hai jo HTML, CSS aur basic JavaScript se banaya gaya hai.
Isme Home Page, Product Listing, aur Product Detail Page (Luka 5) jaisi functionalities di gayi hain.

📌 Project Features (Kya-kya hai isme)


Sticky Header with Navbar


Video Background Hero Section


Product Cards (Click karke Product Detail Page open hota hai)


Horizontal & Grid based Product Layout


Product Detail Page with:


Image Gallery (small image → big image)


Size Selection


Add to Cart & Buy Now buttons




Hover Effects (Images, Buttons, Text)


Fully Responsive Layout (basic level)



🧱 Technologies Used


HTML5 – Structure ke liye


CSS3 – Styling, Layout, Hover Effects


JavaScript (Basic) – Page navigation & image switching


Font Awesome – Cart icon ke liye


Custom Font (Handlee) – Text styling ke liye



📁 Folder Structure (Samajhne ke liye)
project-folder/
│
├── index.html              → Home Page
├── luka5detail.html        → Product Detail Page
├── style.css               → Pure website styling
├── script.js               → JavaScript logic
│
├── img/
│   ├── hero-section/
│   ├── luka.png/
│   ├── airjorden/
│   ├── spotlight/
│   ├── shopBySports/
│
├── fonts/
│   └── Handlee-Regular.ttf


🧭 Header Section (Navbar)


Header sticky hai, matlab scroll karne par bhi upar hi rehta hai


Navbar items:


New & Featured


Men


Women


Kids


Jordan


Cart Icon




#header {
    position: sticky;
    top: 0;
    z-index: 1000;
}

👉 z-index isliye diya hai taaki header video ke upar dikhe.

🎥 Hero Section (Video Background)


Full-width video background


Text & button video ke upar overlay kiye gaye hain


position: absolute use karke text place kiya gaya hai


#hero {
    position: relative;
}
.bg-text {
    position: absolute;
}


🧾 Product Listing Section


.prod-row flexbox use karta hai


Products cards format me hain


Card par click karne se product detail page open hota hai


<div class="prod-box" onclick="lukadetail()">

function lukadetail() {
    window.location.href = "luka5detail.html";
}


👟 Product Detail Page (Luka 5)
🔹 Image Gallery


Left side: small images


Right side: ek big main image


Small image click karne par big image change hoti hai


smallimg[i].onclick = function () {
    Mainimg.src = smallimg[i].src;
}


🔹 Size Selection


UK size buttons


Kuch sizes disabled hain (out of stock jaisa feel)


<button class="size-btn disabled">UK 5</button>

Hover effect se size buttons thode premium feel dete hain.

🔹 Add to Cart & Buy Now


Simple buttons (abhi backend nahi hai)


Future me JS ya backend se connect ho sakta hai



✨ Hover Effects (Special Feel)


Product images par shadow & scale


Buttons hover par size & weight change


Navbar links hover par underline animation


.prod-box img:hover {
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}


🧾 Footer Section


Copyright text


Policy links (Terms, Privacy, etc.)



▶️ Project Kaise Run Kare


Project folder download / clone karo


index.html ko browser me open karo


Product card par click karo → detail page open hoga


Images, hover effects aur layout test karo


⚠️ Internet sirf Font Awesome ke liye chahiye

🚀 Future Improvements (Aage kya add kar sakte ho)


Backend (Node.js / Firebase)


Real Cart Functionality


Login / Signup System


Dynamic Products (JSON / API)


Mobile Responsive aur better bana sakte ho



🎯 Ye Project Kis Ke Liye Best Hai?


Beginners learning HTML & CSS


JavaScript basics practice


Portfolio ke liye


College / Internship projects



❤️ Final Note
Ye project real-world e-commerce UI ka achha example hai.
Agar tum chaho to next step me mai:


🧠 Pure JS se cart system


🔥 Product data dynamic


🌐 Backend connect


📱 Full responsive design


bhi bana ke samjha sakta hoon 😄
Bas bolo, next kya banana hai? 💪
