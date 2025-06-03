const currentYear = document.querySelector("#currentYear");
currentYear.innerHTML = new Date().getFullYear();
const pattern = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
if (
    Date.parse(document.lastModified) >
    (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
    document.cookie = `lastModified=${document.lastModified}`;
    const lastModified = document.querySelector("#lastModified");
    lastModified.innerHTML = `Last modified: ${document.lastModified}`;
}
const products = [
    {
        name: "laptop",
        price: 10.0,
        description: "A laptop is a portable computer that integrates all the components of a desktop computer into a single unit.",
    },
    {
        name: "smartphone",
        price: 20.0,
        description: "A smartphone is a handheld personal computer with a mobile operating system.",
    },
    {
        name: "tablet",
        price: 30.0,
        description: "A tablet is a portable touchscreen computer that is larger than a smartphone.",
    },
    {
        name: "smartwatch",
        price: 40.0,
        description: "A smartwatch is a wearable computer in the form of a wristwatch.",
    },
    {
        name: "headphones",
        price: 50.0,
        description: "Headphones are a pair of small loudspeakers that are designed to be worn on or over the ears.",
    },
];
localStorage.setItem("products", JSON.stringify(products));
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const selectedProduct = formData.get("product");
    const product = products.find((p) => p.name === selectedProduct);
    if (product) {
        const review = {
            product: product.name,
            rating: formData.get("rating"),
            installDate: formData.get("install-date"),
            features: formData.getAll("features"),
            comments: formData.get("comments"),
            userName: formData.get("user-name"),
        };
        console.log("Review submitted:", review);
    }
});