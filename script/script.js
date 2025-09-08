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
         <div class="bg-white p-2 rounded-xl space-y-3 h-full">
                        <img class="h-80 w-full rounded-xl" src="${tree.image}" alt="">
                        <h2 onclick="loadDetail(${tree.id})" class="font-bold text-xl cursor-pointer inline-block">${tree.name}</h2>
                        <p>${tree.description}</p>
                        <div class="flex justify-between">
                            <button class="bg-[#DCFCE7] text-green-700 font-medium rounded-3xl px-3 py-1">${tree.category}</button>
                            <h2 class="font-bold">$${tree.price}</h2>
                        </div>
                        <button class="btn btn-active btn-success w-full  rounded-3xl">Success</button>
                    </div>`
        treeContainer.append(card);
    })
}
allTrees()

const removeActive = () => {
    const categoryLi= document.querySelectorAll(".category-li")
    categoryLi.forEach(li => li.classList.remove("active"))
}

const loadPlants = (id) => {
    const url = (`https://openapi.programming-hero.com/api/category/${id}`)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeActive()
            const liList=document.getElementById(`li-list-${id}`)
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
         <div class="bg-white p-2 rounded-xl space-y-3 h-full">
                        <img class="h-80 w-full rounded-xl" src="${tree.image}" alt="">
                        <h2 onclick="loadDetail(${tree.id})" class="font-bold text-xl cursor-pointer inline-block">${tree.name}</h2>
                        <p>${tree.description}</p>
                        <div class="flex justify-between">
                            <button class="bg-[#DCFCE7] text-green-700 font-medium rounded-3xl px-3 py-1">${tree.category}</button>
                            <h2 class="font-bold">$${tree.price}</h2>
                        </div>
                        <button class="btn btn-active btn-success w-full  rounded-3xl">Success</button>
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
                    <img class="rounded-xl h-70 w-full" src="${plants.image}" alt="">
                    <p><span class="font-bold">Category: </span>${plants.category} </p>
                    <h2><span class="font-bold">Price:</span> $${plants.price}</h2>
                    <p><span class="font-bold">Description: </span>${plants.description}</p>
                </div>`
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
    // categoriesContainer.addEventListener("click", (e) => {
    //     const allLi = document.querySelectorAll("li")
    //     allLi.forEach(li => {
    //         li.classList.remove("active")
    //     })
    //     if (e.target.tagName === "li")
    //         e.target.classList.add("active")
    //     console.log(e.target);
    // })
}

loadCategories()