let a = parseFloat(prompt("Ingrese el primer numero"));
let b = parseFloat(prompt("Ingrese el segundo numero"));
let c = parseFloat(prompt("Ingrese el tercer numero"));
class Ordenar {
    constructor() {
        this.num1 = a;
        this.num2 = b;
        this.num3 = c;
    };
    Condicional() {
        console.log("Ordenados por condicionales: ");
        if (this.num1 > this.num2 && this.num1 > this.num3) {
            if (this.num2 > this.num3) {
                console.log(this.num3, this.num2, this.num1);
            } else {
                console.log(this.num2, this.num3, this.num1);
            }
        } else if (this.num2 > this.num1 && this.num2 > this.num3) {
            if (this.num1 > this.num3) {
                console.log(this.num3, this.num1, this.num2);
            } else {
                console.log(this.num1, this.num3, this.num2);
            }
        } else if (this.num3 > this.num1 && this.num3 > this.num2) {
            if (this.num1 > this.num2) {
                console.log(this.num2, this.num1, this.num3);
            } else {
                console.log(this.num1, this.num2, this.num3);
            }
        }
    }
    Intercambio() {
        let aux;
        if (this.num1 > this.num2) {
            aux = this.num1;
            this.num1 = this.num2;
            this.num2 = aux;
        }
        if (this.num1 > this.num3) {
            aux = this.num1;
            this.num1 = this.num3;
            this.num3 = aux;
        }
        if (this.num2 > this.num3) {
            aux = this.num2;
            this.num2 = this.num3;
            this.num3 = aux;
        }
        console.log("Ordenados por intercambio: ");
        console.log(this.num1, this.num2, this.num3);
    }

    Array() {
    let array = [a, b, c];
        let aux;
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                if (array[i] < array[j]) {
                    aux = array[i];
                    array[i] = array[j];
                    array[j] = aux;
                }
            }
        }
        console.log("Ordenados por array: ");
        console.log(array[0], array[1], array[2]);
    }
}
let Orden = new Ordenar();
Orden.Condicional(a, b, c);
Orden.Array(a, b, c);
Orden.Intercambio(a, b, c);
