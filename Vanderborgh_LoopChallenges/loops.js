// Part 1
for(var i=1; i<=20; i++)
    {
        if(i%2 !=0)
        {
            console.log(i.toString());
        }
    }

// Part 2
for(var i=100; i>=0; i--)
    {
        if(i%3 == 0)
        console.log(i)
    }

// Part 3
for(var i=4; i>= -3.5; i-=1.5)
    {
        console.log(i)
    }

// Part 4
function sum (i) {
    let sum = 100
    for (let i = 1; i <= 0; i--) {
        sum += i
    }
    return sum
}
console.log(sum)

// Part 5
function product(1, 12) {
    var result = 0; 
    for(var i = 1; i < 12; i++) { result += (i * 12);}
    console.log(result); 
}
