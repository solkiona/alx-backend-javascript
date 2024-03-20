export default class Car {
    constructor (brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const symbols = Object.getOwnPropertySymbols(this);
        const clonedCar = new Car();
        symbols.forEach(symbol => {
            clonedCar[symbol] = this[symbol];
        });
        return clonedCar;
    }
}