const url = 'https://fakestoreapi.com/products'
const containerCards = document.getElementById('containerCards')

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

    const descriptionClothe = document.createElement('h4')
    descriptionClothe.textContent = clothe.title

    const priceClothe = document.createElement('h5')
    priceClothe.textContent = clothe.price

    const buttonAddCar = document.createElement('button')
    buttonAddCar.textContent = 'Añadir al Carrito';

    card.appendChild(imgClothe)

    card.appendChild(divClothe)
    divClothe.appendChild(descriptionClothe)
    divClothe.appendChild(priceClothe)
    divClothe.appendChild(buttonAddCar)


    containerCards.appendChild(card)
}

const getClothes = async () => {
    const data = await getAPI(url)
    data.forEach(clothe => createClothes(clothe));
}

window.addEventListener('DOMContentLoaded', getClothes)
