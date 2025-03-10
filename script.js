const products = {
    "0-10": [
        {
            name: "סט מברגים קטן",
            description: "סט מברגים קטן ושימושי לתיקונים קטנים. קומפקטי ונוח לנשיאה.",
            image: "images/screwdriver.jpg",
            link: "https://www.aliexpress.com/item/1005006093539824.html"
        },
        {
            name: "פלייר מיניאטורי",
            description: "פלייר מיניאטורי לשימוש מדויק. מתאים לעבודות אלקטרוניקה ודומות.",
            image: "images/mini-pliers.jpg",
            link: "https://www.aliexpress.com/item/1005001509015112.html"
        },
        {
            name: "סרט מדידה מחזיק מפתחות",
            description: "סרט מדידה קטן עם מחזיק מפתחות. תמיד זמין למדידות מהירות.",
            image: "images/measuring-tape.jpg",
            link: "https://www.aliexpress.com/item/32845893322.html"
        },
        {
            name: "פלס קטן",
            description: "פלס קטן ונוח לבדיקת ישרות. מתאים לתליית תמונות ועוד.",
            image: "images/level-tool.jpg",
            link: "https://www.aliexpress.com/item/1005005856754025.html"
        },
        {
            name: "סט מקדחים קטנים",
            description: "סט מקדחים קטנים למגוון עבודות. מתאים למקדחות ידניות וחשמליות קטנות.",
            image: "images/drill-bits.jpg",
            link: "https://www.aliexpress.com/item/1005005959929562.html"
        }
    ],
    "10-20": [
        {
            name: "סכין יפנית",
            description: "סכין יפנית חדה ונוחה לשימוש. מתאימה לחיתוך מדויק.",
            image: "images/utility-knife.jpg",
            link: "https://www.aliexpress.com/item/1005004724838662.html"
        },
        {
            name: "פטיש קטן",
            description: "פטיש קטן וקל משקל. מתאים לתיקונים קטנים בבית.",
            image: "images/small-hammer.jpg",
            link: "https://www.aliexpress.com/item/1005005697362031.html"
        },
        {
            name: "סט ניירות שיוף",
            description: "סט ניירות שיוף במגוון גסויות. מתאים לשיוף עץ, מתכת ועוד.",
            image: "images/sandpaper.jpg",
            link: "https://www.aliexpress.com/item/1005002766699318.html"
        },
        {
            name: "סט מפתחות קטנים",
            description: "סט מפתחות אלן קטנים. מתאים לתיקונים של רהיטים ומכשירים.",
            image: "images/wrench-set.jpg",
            link: "https://www.aliexpress.com/item/1005004245607316.html"
        },
        {
            name: "מסור קטן",
            description: "מסור ידני קטן ונוח לשימוש. מתאים לחיתוך עץ ופלסטיק.",
            image: "images/small-saw.jpg",
            link: "https://www.aliexpress.com/item/1005003666506380.html"
        }
    ],
    "20-30": [
        {
            name: "מלחם חשמלי",
            description: "מלחם חשמלי בסיסי למתחילים. מתאים לתיקוני אלקטרוניקה.",
            image: "images/soldering-iron.jpg",
            link: "https://www.aliexpress.com/item/1005005537599023.html"
        },
        {
            name: "חשפן חוטים",
            description: "חשפן חוטים אוטומטי. מקל על עבודות חשמל.",
            image: "images/wire-stripper.jpg",
            link: "https://www.aliexpress.com/item/1005002953046777.html"
        },
        {
            name: "אקדח דבק חם",
            description: "אקדח דבק חם קטן ונוח לשימוש. מתאים לעבודות יצירה ותיקונים.",
            image: "images/hot-glue-gun.jpg",
            link: "https://www.aliexpress.com/item/1005005602058428.html"
        },
        {
            name: "מולטימטר",
            description: "מולטימטר דיגיטלי לבדיקת מתח, זרם והתנגדות.",
            image: "images/multimeter.jpg",
            link: "https://www.aliexpress.com/item/1005004940566416.html"
        },
        {
            name: "סט מקדחים",
            description: "סט מקדחים מגוון לשימוש במקדחות חשמליות.",
            image: "images/drill-bit-set.jpg",
            link: "https://www.aliexpress.com/item/1005005671545628.html"
        }
    ],
    "40-100": [
        {
            name: "מקדחה חשמלית",
            description: "מקדחה חשמלית נטענת. מתאימה לקידוח בעץ, מתכת וקירות.",
            image: "images/electric-drill.jpg",
            link: "https://www.aliexpress.com/item/1005005666992523.html"
        },
        {
            name: "מסור עגול",
            description: "מסור עגול חשמלי קטן. מתאים לחיתוך לוחות עץ.",
            image: "images/circular-saw.jpg",
            link: "https://www.aliexpress.com/item/1005004719247441.html"
        },
        {
            name: "מכונת שיוף",
            description: "מכונת שיוף חשמלית. מתאימה לשיוף עץ ומשטחים אחרים.",
            image: "images/sanding-machine.jpg",
            link: "https://www.aliexpress.com/item/1005005877861962.html"
        },
        {
            name: "אקדח חום",
            description: "אקדח חום חשמלי. מתאים להסרת צבע, כיפוף פלסטיק ועוד.",
            image: "images/heat-gun.jpg",
            link: "https://www.aliexpress.com/item/1005005667104040.html"
        },
        {
            name: "ארגז כלים",
            description: "ארגז כלים לארגון הכלים שלך. מתאים לאחסון וניוד.",
            image: "images/toolbox.jpg",
            link: "https://www.aliexpress.com/item/1005005741002368.html"
        }
    ]
};

for (const category in products) {
    const categoryDiv = document.getElementById(category).querySelector(".products");
    products[category].forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
