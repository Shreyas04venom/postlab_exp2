const productsData = {
    products: [
        { id: 1, name: "Laptop", price: 55000, category: "Electronics" },
        { id: 2, name: "Headphones", price: 2500, category: "Accessories" },
        { id: 3, name: "Keyboard", price: 1200, category: "Accessories" },
        { id: 4, name: "Smartphone", price: 30000, category: "Electronics" },
        { id: 5, name: "Mouse", price: 800, category: "Accessories" }
    ]
};

function displayProducts(products) {
    console.log("\nProduct List:- ");
    products.forEach(product => {
        console.log(`ID: ${product.id}`);
        console.log(`Name: ${product.name}`);
        console.log(`Price: ₹${product.price}`);
        console.log(`Category: ${product.category}`);
    });
}

function filterByMinPrice(products, minPrice) {
    return products.filter(product => product.price >= minPrice);
}

displayProducts(productsData.products);

const userMinPrice = 2000;

const filteredProducts = filterByMinPrice(productsData.products, userMinPrice);

console.log(`\nProducts with Price >= ₹${userMinPrice}`);
displayProducts(filteredProducts);





function fetchProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: "Laptop" },
                { id: 2, name: "Phone" }
            ]);
        }, 1000);
    });
}

function fetchReviews() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { productId: 1, review: "Excellent!" },
                { productId: 2, review: "Good value." }
            ]);
        }, 1500);
    });
}

async function loadEcommerceData() {
    try {
        console.log("Fetching data...\n");

        const [products, reviews] = await Promise.all([
            fetchProducts(),
            fetchReviews()
        ]);

        console.log("Products:", products);
        console.log("Reviews:", reviews);

    } catch (error) {
        console.error("Error occurred:", error);
    }
}

// Execute
loadEcommerceData();
