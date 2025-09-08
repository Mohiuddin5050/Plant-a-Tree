const cart = [];
const addToCart = (name) => {
    cart.push(name);
    showCart();
}
const removeCart=(index)=>{
    cart.splice(index, 1)
    showCart()

}

const showCart = () => {
    const cartItems = document.getElementById("cart-items")
    const cartPrice = document.getElementById("cart-price")
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center bg-[#F0FDF4] px-2  pb-2 rounded-lg mt-2">
                         <div>
                            <h2 class="font-semibold text-lg text-[#1f2937]">${item.name}</h2>
                            <p class="text-gray-500">৳${item.price}</p>
                        </div>
                        <p onclick="removeCart(${index})" class="cursor-pointer">❌</p>
                       </div>`

        cartItems.append(div)

    })
    cartPrice.innerText=`Total: ৳${total}`
}
// <!-- <i class="fa-solid fa-xmark"></i> -->
const allTrees = () => {
    fetch("https://openapi.programming-hero.com/api/plants")
        .then(res => res.json())
        .then(data => showAllTrees(data.plants))
}

const showAllTrees = (trees) => {
    const treeContainer = document.getElementById("tree-container")
    trees.forEach(tree => {
        const card = document.createElement("div")
        card.innerHTML = `
         <div class="bg-white p-3 rounded-xl space-y-3 flex flex-col h-full">
                        <img class="h-40 w-full rounded-xl" src="${tree.image}" alt="">
                        <h2 class="font-bold text-xl "><span onclick="loadDetail(${tree.id})" class="cursor-pointer ">${tree.name}</span></h2>
                        <p class="flex-grow">${tree.description}</p>
                        <div class="flex justify-between">
                            <button class="bg-[#DCFCE7] text-green-700 font-medium rounded-3xl px-3 py-1">${tree.category}</button>
                            <h2 class="font-bold">৳${tree.price}</h2>
                        </div>
                        <button onclick='addToCart({id:${tree.id}, name:"${tree.name}", price:${tree.price}})' class="btn btn-active btn-success w-full  rounded-3xl mt-auto text-white">Add to Cart</button>
                    </div>`
        treeContainer.append(card);
    })
}
allTrees()

const removeActive = () => {
    const categoryLi = document.querySelectorAll(".category-li")
    categoryLi.forEach(li => li.classList.remove("active"))
}

const loadPlants = (id) => {
    const url = (`https://openapi.programming-hero.com/api/category/${id}`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive()
            const liList = document.getElementById(`li-list-${id}`)
            liList.classList.add("active")
            showPlants(data.plants)
        })
}
const showPlants = (plants) => {
    const plantsCard = document.getElementById("tree-container");
    plantsCard.innerHTML = ""
    plants.forEach(tree => {
        const card = document.createElement("div")
        card.innerHTML = `
         <div class="bg-white p-3 rounded-xl space-y-3 flex flex-col h-full">
                        <img class="h-40 w-full rounded-xl" src="${tree.image}" alt="">
                       <h2 class="font-bold text-xl "><span onclick="loadDetail(${tree.id})" class="cursor-pointer ">${tree.name}</span></h2>
                        <p class="flex-grow">${tree.description}</p>
                        <div class="flex justify-between">
                            <button class="bg-[#DCFCE7] text-green-700 font-medium rounded-3xl px-3 py-1">${tree.category}</button>
                            <h2 class="font-bold">৳${tree.price}</h2>
                        </div>
                        <button onclick='addToCart({id:${tree.id}, name:"${tree.name}", price:${tree.price}})' class="btn btn-active btn-success w-full rounded-3xl mt-auto text-white">Add to Cart</button>
                    </div>`
        plantsCard.append(card);
    })
}

const loadDetail = (id) => {
    fetch(`https://openapi.programming-hero.com/api/plant/${id}`)
        .then(res => res.json())
        .then(data => showDetail(data.plants))
}
const showDetail = (plants) => {
    const detailsContainer = document.getElementById("details-container")
    detailsContainer.innerHTML = `
    <h2 class="font-bold text-2xl">${plants.name}</h2>
                    <img class="rounded-xl h-64 w-full" src="${plants.image}" alt="">
                    <p><span class="font-bold">Category: </span>${plants.category} </p>
                    <h2><span class="font-bold">Price:</span> ৳${plants.price}</h2>
                    <p><span class="font-bold">Description: </span>${plants.description}</p>`

    document.getElementById("my_modal_5").showModal();
}

const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/categories")
        .then(res => res.json())
        .then(json => displayCategories(json.categories))
}
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById("categories-container")
    categoriesContainer.innerHTML = "";
    categories.forEach(category => {
        const div = document.createElement("ul")
        div.innerHTML = `
         <li id="li-list-${category.id}" onclick="loadPlants(${category.id})" class="cursor-pointer hover:bg-green-800 hover:text-white py-1 rounded-md px-2 category-li">${category.category_name}</li>`

        categoriesContainer.append(div);
    })
}

loadCategories()