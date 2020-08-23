const array = [1, 2, 3, 4, 5]
console.log(array.includes(2))
console.log(array.filter(e => e > 2))

const p = new Promise((resolve, reject) => {
    resolve(1)
})
p.then(val => {
    console.log(val)
})


class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    };
    getX() {
        return this.x;
    }
}

let cp = new Point(25, 8);

console.log($)