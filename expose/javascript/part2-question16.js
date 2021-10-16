//Question 16
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars:5,
    blackCars:40,
    rareCars:2
};

for (var stat in statistics) {
    if (stat[0]=='r' || statistics[stat]%2==1){
        console.log(statistics[stat])

    }
}

//Question 18

let d = new Date();
let time = d.toLocaleTimeString();
console.log(time);

var intervalID = setInterval(myCallback, 1000, console.log(time) );

function myCallback(time)
{

}