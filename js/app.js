const brand = document.querySelector("#brand");
const years = document.querySelector("#year");
const minPrice = document.querySelector("#min");
const maxPrice = document.querySelector("#max");
const doors = document.querySelector("#doors");
const transmission = document.querySelector("#transmission");
const color = document.querySelector("#color");

const results = document.querySelector("#results");
const resultsBox = document.querySelector("#resultsBox");

const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

const searchData = {
    brand: "",
    year: "",
    min: "",
    max: "",
    doors: "",
    transmission: "",
    color: "",
}

document.addEventListener("DOMContentLoaded", () => {
    showCars(cars);
    addSelectYears();
})

brand.addEventListener("change", (e) => {
    searchData.brand = e.target.value;
    filterCar();
})

years.addEventListener("change", (e) => {
    searchData.year = e.target.value;
    filterCar();
})

minPrice.addEventListener("change", (e) => {
    searchData.min = e.target.value;
    filterCar();
})

maxPrice.addEventListener("change", (e) => {
    searchData.max = e.target.value;
    filterCar();
})

doors.addEventListener("change", (e) => {
    searchData.doors = e.target.value;
    filterCar();
})

transmission.addEventListener("change", (e) => {
    searchData.transmission = e.target.value;
    filterCar();
})

color.addEventListener("change", (e) => {
    searchData.color = e.target.value;
    filterCar();
})

function showCars (cars) {
    resultsBox.classList.remove("hidden");
    results.innerHTML = cars.map ((car) => `
        <div class="bg-gray-200 rounded shadow-md">
            <img class="w-full h-40 overflow-hidden object-cover rounded-tl rounded-tr" src="${car.image}" alt="image for a ${car.brand} ${car.model}">
            <div class="p-3 rounded-bl rounded-br">
                <h2 class="text-2xl text-center mb-1 uppercase font-bold text-yellow-600">${car.brand} <span>${car.model}</span></h2>
                <div class="grid grid-cols-2 text-center my-2 font-medium gap-1">
                    <p><spam class="text-yellow-600 mr-1">Year:</spam>${car.year}</p>
                    <p><spam class="text-yellow-600 mr-1">Price:</spam>$${car.price}</p>
                    <p><spam class="text-yellow-600 mr-1">Doors:</spam>${car.doors}</p>
                    <p><spam class="text-yellow-600 mr-1">Color:</spam>${car.color}</p>
                </div>
                <p class="text-center uppercase font-medium">Transmission: <span> ${car.transmission}</span></p>
            </div>
        </div>
    `).join("");
}

function addSelectYears () { 
    for (let i=maxYear; i>=minYear; i--) {
        const option = document.createElement("option")
        option.value = i;
        option.textContent = i;
        years.appendChild(option);
    }
}

function filterCar() {
    const result = cars.filter(filterBrand).filter(filterYear).filter(filterMnPrice).filter(filterMaxPrice).filter(filterDoors).filter(filterTransmission).filter(filterColor);
    showCars(result);
    if(result.length === 0) {
        nothingHere();
    }
}

function filterBrand( car ) {
    const {brand} = searchData;
    if(brand) {
        return car.brand === brand;
    }
    return car;
}

function filterYear( car ) {
    const {year} = searchData;
    if(year) {
        return car.year === parseInt(year);
    }
    return car;
} 

function filterMnPrice ( car ) {
    const {min} = searchData;
    if(min) {
        return car.price >= min;
    }
    return car;
}

function filterMaxPrice ( car ) {
    const {max} = searchData;
    if(max) {
        return car.price <= max;
    }
    return car;
}

function filterDoors ( car ) {
    const {doors} = searchData;
    if(doors) {
        return car.doors === parseInt(doors);
    }
    return car;
}

function filterTransmission( car ) {
    const {transmission} = searchData;
    if(transmission) {
        return car.transmission === transmission;
    }
    return car;
}

function filterColor ( car ) {
    const {color} = searchData;
    if(color) {
        return car.color === color;
    }
    return car;
}

function alert () {
    swal.fire({
        title: "Nothing is here",
        text: "No cars fulfill these conditions",
        icon: "info",
        iconColor: "rgb(202 138 4)",
        confirmButtonText: 'It´s Ok',
        color: "rgb(202 138 4)",
        confirmButtonColor: "rgb(202 138 4)",
    });
}

function nothingHere () {
    resultsBox.classList.add("hidden");
    alert();
}
