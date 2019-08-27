let getTip = function(total, tipPercent = 0.2){
    let tip = total * tipPercent
    let percent = tipPercent * 100
    return `A ${percent}% tip on $${total} would be $${tip}`
}

let order1 = getTip(40)
let order2 = getTip(200, 0.1)

console.log(order1)
console.log(order2)
