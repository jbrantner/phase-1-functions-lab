// Code your solution in this file!

function distanceFromHqInBlocks(client) {
    let blocks = 42 - client;
    if (blocks < 0) {
        blocks = Math.abs(blocks);
    }
    return blocks;
}


function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) * 264;
}

function distanceTravelledInFeet(start, destination) {
    let distance = (start - destination) * 264;
    if (distance < 0) {
        distance = distance * -1;
    }
    return distance;

}

function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    if(distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }
    if(distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    }
    if(distanceTravelledInFeet(start, destination) > 2500) {
        return "cannot travel that far"
    }
}

