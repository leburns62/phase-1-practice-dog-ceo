const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray = []

ulContainer.addEventListener('click', handleClick)
dropDown.addEventListener('change', handleChange)

function getImages() {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs)
        renderElement(imgsArray)
    })
}
function createImgElement(imgs) {
    return imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
    })
}

function renderImgs(imgsArray) {
    imgsArray.forEach(element => {
        renderElement(element)
    })
}

function renderElement(element) {
    ulContainer.innerHTML += element
}

function getBreeds() {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(breeds => {
        breedsArray = Object.keys(breeds.message)
        const breedsLis = createLiElement(breedsArray)
        renderLis(breedsLis)
        //createLiElement(breedsArray)
        //let imgsArray = createImgElement(imgs)
        //renderElement(imgsArray)
    })
}

function createLiElement(breedsArray) {
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li
    })
}

function renderLis (breedsLis) {
    breedsLis.forEach(element => {
        renderElement(element)
    })
}

function handleClick(event) {
    event.target.style.color = 'blue'
}

function handleChange(event) {
    const letter = event.target.value
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    const filteredBreedslis = createLiElement(filteredBreeds)
   ulContainer.innerHTML = ''
    renderLis(filteredBreedslis)
}

//getImages()
getBreeds()