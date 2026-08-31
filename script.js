/* =========================================
   FARMLINK PROTOTYPE
   Smart Market Linkage & Price Discovery
========================================= */


/* ---------- FARMER DATA ---------- */

let farmer = {
    name: "",
    location: ""
};

let selectedCrop = "";


/* ---------- CROP LIST ---------- */

const crops = [

    { name: "Paddy", icon: "🌾" },
    { name: "Wheat", icon: "🌾" },
    { name: "Maize", icon: "🌽" },
    { name: "Cotton", icon: "🌿" },
    { name: "Groundnut", icon: "🥜" },
    { name: "Chilli", icon: "🌶️" },
    { name: "Tomato", icon: "🍅" },
    { name: "Potato", icon: "🥔" },
    { name: "Onion", icon: "🧅" },
    { name: "Banana", icon: "🍌" },
    { name: "Mango", icon: "🥭" },
    { name: "Apple", icon: "🍎" },
    { name: "Soybean", icon: "🌱" },
    { name: "Mustard", icon: "🌱" },
    { name: "Sunflower", icon: "🌻" },
    { name: "Sugarcane", icon: "🎋" },
    { name: "Turmeric", icon: "🟡" },
    { name: "Coconut", icon: "🥥" },
    { name: "Peas", icon: "🫛" },
    { name: "Ragi", icon: "🌾" },
    { name: "Barley", icon: "🌾" },
    { name: "Chana", icon: "🌱" },
    { name: "Moong", icon: "🌱" },
    { name: "Urad", icon: "🌱" },
    { name: "Jowar", icon: "🌾" },
    { name: "Coriander", icon: "🌿" },
    { name: "Cumin", icon: "🌿" },
    { name: "Garlic", icon: "🧄" },
    { name: "Ginger", icon: "🫚" },
    { name: "Carrot", icon: "🥕" }

];


/* ---------- DEMO MARKET DATABASE ---------- */

/*
    These are SAMPLE values only.

    Production version:
    AGMARKNET / e-NAM / verified buyer APIs
    can provide actual market information.
*/

const marketDatabase = {

    "Paddy": [
        {
            name: "Vijayawada Mandi",
            distance: 8,
            price: 2450,
            transport: 120,
            source: "AGMARKNET Demo",
            updated: "Today, 10:30 AM"
        },

        {
            name: "Guntur Agricultural Market",
            distance: 18,
            price: 2580,
            transport: 220,
            source: "AGMARKNET Demo",
            updated: "Today, 10:15 AM"
        },

        {
            name: "Nearby Verified Buyer",
            distance: 12,
            price: 2650,
            transport: 150,
            source: "Verified Buyer Demo",
            updated: "Today, 11:05 AM"
        },

        {
            name: "Tenali Market",
            distance: 25,
            price: 2700,
            transport: 300,
            source: "e-NAM Demo",
            updated: "Today, 09:45 AM"
        }
    ],


    "Wheat": [
        {
            name: "Local Wheat Market",
            distance: 7,
            price: 2350,
            transport: 100,
            source: "AGMARKNET Demo",
            updated: "Today, 10:20 AM"
        },

        {
            name: "Verified Wheat Buyer",
            distance: 14,
            price: 2480,
            transport: 170,
            source: "Verified Buyer Demo",
            updated: "Today, 10:50 AM"
        },

        {
            name: "Regional Mandi",
            distance: 22,
            price: 2550,
            transport: 260,
            source: "e-NAM Demo",
            updated: "Today, 09:30 AM"
        }
    ],


    "Tomato": [
        {
            name: "Local Vegetable Market",
            distance: 5,
            price: 1800,
            transport: 70,
            source: "AGMARKNET Demo",
            updated: "Today, 11:00 AM"
        },

        {
            name: "Tomato Buyer A",
            distance: 11,
            price: 2100,
            transport: 130,
            source: "Verified Buyer Demo",
            updated: "Today, 10:55 AM"
        },

        {
            name: "Wholesale Market",
            distance: 20,
            price: 2250,
            transport: 230,
            source: "e-NAM Demo",
            updated: "Today, 10:10 AM"
        }
    ],


    "Cotton": [
        {
            name: "Cotton Market A",
            distance: 10,
            price: 7200,
            transport: 180,
            source: "AGMARKNET Demo",
            updated: "Today, 09:50 AM"
        },

        {
            name: "Verified Cotton Buyer",
            distance: 16,
            price: 7450,
            transport: 220,
            source: "Verified Buyer Demo",
            updated: "Today, 10:40 AM"
        },

        {
            name: "Regional Cotton Market",
            distance: 27,
            price: 7600,
            transport: 350,
            source: "e-NAM Demo",
            updated: "Today, 09:25 AM"
        }
    ],


    "Maize": [
        {
            name: "Maize Mandi",
            distance: 6,
            price: 2200,
            transport: 80,
            source: "AGMARKNET Demo",
            updated: "Today, 10:30 AM"
        },

        {
            name: "Feed Industry Buyer",
            distance: 13,
            price: 2380,
            transport: 150,
            source: "Verified Buyer Demo",
            updated: "Today, 11:10 AM"
        },

        {
            name: "Regional Market",
            distance: 24,
            price: 2450,
            transport: 290,
            source: "e-NAM Demo",
            updated: "Today, 09:40 AM"
        }
    ]

};


/* ---------- GENERATE DEFAULT DATA ---------- */

function generateMarketData(crop) {

    if (marketDatabase[crop]) {
        return marketDatabase[crop];
    }

    /*
       Demo data for crops not manually entered.
    */

    return [

        {
            name: "Nearby Agricultural Market",
            distance: 6,
            price: 2200,
            transport: 90,
            source: "AGMARKNET Demo",
            updated: "Today, 10:30 AM"
        },

        {
            name: "Verified Local Buyer",
            distance: 13,
            price: 2350,
            transport: 140,
            source: "Verified Buyer Demo",
            updated: "Today, 10:50 AM"
        },

        {
            name: "Regional Mandi",
            distance: 21,
            price: 2450,
            transport: 240,
            source: "e-NAM Demo",
            updated: "Today, 09:45 AM"
        },

        {
            name: "Wholesale Market",
            distance: 28,
            price: 2500,
            transport: 320,
            source: "e-NAM Demo",
            updated: "Today, 09:20 AM"
        }

    ];
}


/* ---------- LOGIN ---------- */

function login() {

    const name =
        document.getElementById("farmerName").value.trim();

    const location =
        document.getElementById("farmerLocation").value.trim();


    if (name === "" || location === "") {

        alert("Please enter your name and location.");

        return;
    }


    farmer.name = name;
    farmer.location = location;


    document.getElementById("welcomeText").innerText =
        "Welcome, " + farmer.name;

    document.getElementById("locationDisplay").innerText =
        farmer.location;


    showPage("cropPage");

    displayCrops();
}


/* ---------- SHOW PAGE ---------- */

function showPage(pageId) {

    document.querySelectorAll(".page").forEach(page => {

        page.classList.remove("active");

    });

    document.getElementById(pageId)
        .classList.add("active");
}


/* ---------- LOGOUT ---------- */

function logout() {

    farmer.name = "";
    farmer.location = "";

    document.getElementById("farmerName").value = "";
    document.getElementById("farmerLocation").value = "";

    showPage("loginPage");
}


/* ---------- DISPLAY CROPS ---------- */

function displayCrops(filter = "") {

    const grid =
        document.getElementById("cropGrid");

    grid.innerHTML = "";


    crops
        .filter(crop =>
            crop.name.toLowerCase()
                .includes(filter.toLowerCase())
        )
        .forEach(crop => {

            const card =
                document.createElement("div");

            card.className = "crop-card";

            card.innerHTML = `

                <div class="crop-icon">
                    ${crop.icon}
                </div>

                <div class="crop-name">
                    ${crop.name}
                </div>

            `;


            card.onclick = () =>
                showResults(crop.name);


            grid.appendChild(card);

        });

}


/* ---------- CROP SEARCH ---------- */

function filterCrops() {

    const value =
        document.getElementById("cropSearch").value;

    displayCrops(value);

}


/* ---------- SHOW RESULTS ---------- */

function showResults(crop) {

    selectedCrop = crop;


    document.getElementById("selectedCrop")
        .innerText = crop;


    document.getElementById("resultLocation")
        .innerText =
        "📍 " + farmer.location;


    const markets =
        generateMarketData(crop);


    /*
        Calculate net return
    */

    markets.forEach(market => {

        market.net =
            market.price - market.transport;

    });


    /*
        BEST PRICE
    */

    const bestPrice =
        [...markets].sort(
            (a, b) => b.price - a.price
        )[0];


    /*
        BEST NEARBY
        Highest net return among close options.
    */

    const bestNearby =
        [...markets]
            .filter(m => m.distance <= 15)
            .sort(
                (a, b) => b.net - a.net
            )[0];


    /*
        BEST NET RETURN
    */

    const bestNet =
        [...markets].sort(
            (a, b) => b.net - a.net
        )[0];


    document.getElementById("bestPriceName")
        .innerText = bestPrice.name;


    document.getElementById("bestPriceValue")
        .innerText =
        "₹" + bestPrice.price + " / quintal";


    document.getElementById("nearbyName")
        .innerText = bestNearby.name;


    document.getElementById("nearbyValue")
        .innerText =
        "₹" + bestNearby.net + " net / quintal";


    document.getElementById("netName")
        .innerText = bestNet.name;


    document.getElementById("netValue")
        .innerText =
        "₹" + bestNet.net + " / quintal";


    displayMarkets(markets);


    showPage("resultsPage");

}


/* ---------- DISPLAY MARKETS ---------- */

function displayMarkets(markets) {

    const list =
        document.getElementById("marketList");

    list.innerHTML = "";


    markets.forEach((market, index) => {

        let badge = "";

        if (index === 0) {

            badge =
                `<span class="badge">TOP OPTION</span>`;

        }


        const card =
            document.createElement("div");

        card.className = "market-card";


        card.innerHTML = `

            <div class="market-top">

                <div class="market-name">
                    ${market.name}
                </div>

                ${badge}

            </div>


            <div class="market-details">

                <div class="detail">

                    <small>📍 Distance</small>

                    <strong>
                        ${market.distance} km
                    </strong>

                </div>


                <div class="detail">

                    <small>🌾 Crop Price</small>

                    <strong>
                        ₹${market.price}/q
                    </strong>

                </div>


                <div class="detail">

                    <small>🚚 Transport</small>

                    <strong>
                        ₹${market.transport}
                    </strong>

                </div>


                <div class="detail">

                    <small>💰 Net Return</small>

                    <strong class="net">
                        ₹${market.net}/q
                    </strong>

                </div>

            </div>


            <div class="market-footer">

                <div>

                    <div>
                        🏛️ ${market.source}
                    </div>

                    <small>
                        🕐 Updated ${market.updated}
                    </small>

                </div>


                <button
                    class="sell-btn"
                    onclick="selectMarket('${market.name}')"
                >
                    Select →
                </button>

            </div>

        `;


        list.appendChild(card);

    });

}


/* ---------- SELECT MARKET ---------- */

function selectMarket(name) {

    const markets = generateMarketData(selectedCrop);

    const market = markets.find(
        m => m.name === name
    );

    if (!market) {
        return;
    }

    market.net =
        market.price - market.transport;


    document.getElementById("modalBuyerName")
        .innerText = market.name;

    document.getElementById("modalCrop")
        .innerText = selectedCrop;

    document.getElementById("modalDistance")
        .innerText = market.distance + " km";

    document.getElementById("modalPrice")
        .innerText =
        "₹" + market.price + " / quintal";

    document.getElementById("modalTransport")
        .innerText =
        "₹" + market.transport;

    document.getElementById("modalNet")
        .innerText =
        "₹" + market.net + " / quintal";

    document.getElementById("modalUpdated")
        .innerText =
        "Updated " + market.updated;


    document.getElementById("buyerModal")
        .classList.add("show");

}


/* ---------- BACK TO CROPS ---------- */

function showCropPage() {

    showPage("cropPage");

}


/* ---------- INITIALIZE ---------- */

displayCrops();
function showConnectionSuccess() {

    const buyerName =
        document.getElementById("modalBuyerName").innerText;

    const modal = document.getElementById("buyerModal");

    modal.innerHTML = `
        <div class="modal-content">

            <button class="close-modal"
                onclick="document.getElementById('buyerModal').classList.remove('show')">
                ×
            </button>

            <div class="modal-icon">
                ✅
            </div>

            <h2>Connection Successful!</h2>

            <p class="modal-subtitle">
                Your selling opportunity has been selected.
            </p>

            <div class="buyer-details">

                <h3>🤝 Buyer Selected</h3>

                <div class="modal-row">
                    <span>Buyer / Market</span>
                    <strong>${buyerName}</strong>
                </div>

                <div class="modal-row">
                    <span>Status</span>
                    <strong style="color:#2e7d32;">
                        Connection Request Sent
                    </strong>
                </div>

                <div class="modal-row">
                    <span>Next Step</span>
                    <strong>
                        Buyer will contact the farmer
                    </strong>
                </div>

            </div>

            <button
                class="connect-btn"
                onclick="document.getElementById('buyerModal').classList.remove('show')">
                ✓ Done
            </button>

        </div>
    `;

    modal.classList.add("show");
}
