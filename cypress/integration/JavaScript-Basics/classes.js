class Car {
    constructor(car_name, model, year) {
        this.car_name = car_name;
        this.model = model;
        this.year = year;
    }

    carAge() {
        let date = new Date();

        return date.getFullYear() - this.year;
    }
}

var my_car = new Car("Ford", "Fiesta", "1990")

console.log("The car is " + my_car.carAge() + " years old.")