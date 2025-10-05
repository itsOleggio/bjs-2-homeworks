// Task 1

function parseCount(value) {
    try {
        let result = Number.parseFloat(value);
        if (isNaN(result)) {
            throw new Error("Невалидное значение");
        }
        return result;
    } catch (err) {
        throw err;
    }
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (err) {
        return (err);
    }
}

// Task 2

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        return {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
        };
    }
}