//referring to the sales.html
let elBody = document.getElementById('myBody')

//array of hours and an empty array of locations
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm,', '7pm', '8pm']
let locations = []



let firstPike = {
    storeLoc = '1st and Pike',
    minCostumer = 23,
    maxCostumer = 65,
    avgSales = 6.3,
    salesPerHour = function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxCostumer - this.minCostumer) + this.minCostumer)
        return randomNumber * this.salesPerHour
    }
}

let seaTac = {
    storeLoc = 'SeaTac Airport',
    minCostumer = 3,
    maxCostumer = 24,
    avgSales = 1.2,
    salesPerHour = function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxCostumer - this.minCostumer) + this.minCostumer)
        return randomNumber * this.salesPerHour
    }
}

let seattleCenter = {
    storeLoc = 'Seattle Center',
    minCostumer = 11,
    maxCostumer = 38,
    avgSales = 3.7,
    salesPerHour = function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxCostumer - this.minCostumer) + this.minCostumer)
        return randomNumber * this.salesPerHour
    }
}

let capHill = {
    storeLoc = 'Capitol Hill',
    minCostumer = 20,
    maxCostumer = 38,
    avgSales = 2.3,
    salesPerHour = function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxCostumer - this.minCostumer) + this.minCostumer)
        return randomNumber * this.salesPerHour
    }
}

let alki = {
    storeLoc = 'Alki',
    minCostumer = 2,
    maxCostumer = 16,
    avgSales = 4.6,
    salesPerHour = function () {
        let randomNumber = Math.ceil(Math.random() * (this.maxCostumer - this.minCostumer) + this.minCostumer)
        return randomNumber * this.salesPerHour
    }
}

locations.push(firstPike, seaTac, seattleCenter, capHill, alki)