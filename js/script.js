let arraySelectedItems = []

const url = 'https://fakestoreapi.com/products'
const containerCards = document.getElementById('containerCards')
const containerSelectedItems = document.getElementById('container-selecter-items')
const containerPaySelectedItems = document.getElementById('pay-selected-items')

const getAPI = async (URL) => {
    const response = await fetch(URL)
    const data = await response.json()
    return data
}

const createClothes = (clothe) => {
    const card = document.createElement('div')
    card.classList.add('card')

    const imgClothe = document.createElement('img')
    imgClothe.src = clothe.image
    imgClothe.alt = clothe.title

    const divClothe = document.createElement('div')
    divClothe.classList.add('description-card')

    const descriptionClothe = document.createElement('h5')
    descriptionClothe.textContent = clothe.title

    const priceClothe = document.createElement('h4')
    priceClothe.textContent = `$${clothe.price}`

    const buttonAddCar = document.createElement('button');  
    buttonAddCar.textContent = 'Añadir al Carrito';
    buttonAddCar.dataset.id = clothe.id;  // Guarda ID del producto en el atributo de datos
    buttonAddCar.addEventListener('click', addToShopeeCar.bind(null, clothe));


    card.appendChild(imgClothe)

    card.appendChild(divClothe)
    divClothe.appendChild(descriptionClothe)
    divClothe.appendChild(priceClothe)
    divClothe.appendChild(buttonAddCar)

    containerCards.appendChild(card)
}

const addToShopeeCar = (clothe) => {
    arraySelectedItems.push(clothe);
    console.log(arraySelectedItems);
    
    generateSelectedItems(clothe);
}

// const generateSelectedItems = (selected) => {
//     const incrementSelectedItems = document.createElement('div')
//     incrementSelectedItems.classList.add('increment-items')

//     const buttonRest = document.createElement('button')
//     buttonRest.textContent = '-'

//     const imgItem = document.createElement('img')
//     imgItem.src = selected.image
//     imgItem.alt = selected.title

//     const buttonIncrement = document.createElement('button')
//     buttonIncrement.textContent = '+'

//     const descriptionSelectedItems = document.createElement('div')
//     descriptionSelectedItems.classList.add('description-item')

//     const titleItem = document.createElement('h3')
//     titleItem.textContent = selected.title

//     const priceItem = document.createElement('h4')
//     priceItem.textContent = `$${selected.price}`

//     descriptionSelectedItems.appendChild(titleItem)
//     descriptionSelectedItems.appendChild(priceItem)

//     incrementSelectedItems.appendChild(buttonRest)
//     incrementSelectedItems.appendChild(imgItem)
//     incrementSelectedItems.appendChild(buttonIncrement)

//     containerSelectedItems.appendChild(incrementSelectedItems)
//     containerSelectedItems.appendChild(descriptionSelectedItems)
// }

const getClothes = async () => {
    const data = await getAPI(url)
    data.forEach(Element => createClothes(Element));
}

window.addEventListener('DOMContentLoaded', getClothes)

/*
funcion que permita agregar productos al carrito con un boton
funcion que pinte los productos del carrito
funcion que elimine cosas del carrito
funcion que calcule el valor del contenido del carrito
funcion que guarde el contenido del carrito (localStorage)
*/