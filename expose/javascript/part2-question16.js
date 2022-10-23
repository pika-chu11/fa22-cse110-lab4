// Expose-part2-Question 16

let statistics = {
    redCars: 21,
    blueCars: 45,
    grennCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (const stat in statistics) {
    if (stat[0] == 'r' || statistics[stat] % 2 != 0){
        console.log(statistics[stat]);
    }
}