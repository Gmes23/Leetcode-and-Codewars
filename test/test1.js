Object.defineProperty(Array.prototype, 'x', { get() { return this[0]; } })
Object.defineProperty(Array.prototype, 'y', { get() { return this[1]; } })

const point = ['Xpoint,' , 'Ypoint']

console.log(point)

console.log(point.x, point.y)