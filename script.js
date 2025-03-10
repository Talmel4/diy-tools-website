const products = {
    "0-10": [
        {
            name: "סט מברגים קטן",
            description: "קניתי את הסט הזה לתיקונים קטנים בבית, והוא מעולה! קומפקטי ושימושי.",
            image: "images/screwdriver.jpg", // Replace with your image
            link: "YOUR_ALIEXPRESS_AFFILIATE_LINK_1"
        },
        // Add 4 more products...
    ],
    "10-20": [
        {
            name: "סכין יפנית",
            description: "סכין חדה ונוחה, מושלמת לחיתוך מדויק. השתמשתי בה לפרויקטים רבים.",
            image: "images/knife.jpg", // Replace with your image
            link: "YOUR_ALIEXPRESS_AFFILIATE_LINK_6"
        },
        // Add 4 more products...
    ],
    "20-30": [
        {
            name: "מלחם חשמלי",
            description: "מלחם מצוין למתחילים, עזר לי לתקן הרבה דברים אלקטרוניים.",
            image: "images/soldering.jpg", // Replace with your image
            link: "YOUR_ALIEXPRESS_AFFILIATE_LINK_11"
        },
        // Add 4 more products...
    ],
    "40-100": [
        {
            name: "מקדחה חשמלית",
            description: "מקדחה חזקה ונוחה, חובה לכל חובב עשה זאת בעצמך. השתמשתי בה לבניית מדפים.",
            image: "images/drill.jpg", // Replace with your image
            link: "YOUR_ALIEXPRESS_AFFILIATE_LINK_16"
        },
        // Add 4 more products...
    ]
};

for (const category in products) {
    const categoryDiv = document.getElementById(category).querySelector(".products");
    products[category].forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <a href="${product.link}" target="_blank">לרכישה</a>
        `;
        categoryDiv.appendChild(productDiv);
    });
}
