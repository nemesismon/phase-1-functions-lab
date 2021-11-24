// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks(pickUpBlock) {
    const distance = pickUpBlock - hqBlock;
    const number = Math.abs(distance);
    return number;
}

function distanceFromHqInFeet(pickUpBlock) {
    const distance = (pickUpBlock - hqBlock) *264;
    const number = Math.abs(distance);
    return number;
}

function distanceTravelledInFeet(pickUpBlock, dropOffBlock) {
    const distance = (pickUpBlock - dropOffBlock) * 264;
    const number = Math.abs(distance);
    return number;
}

function calculatesFarePrice(start, destination) {
    const distance = (start - destination) * 264;
    const number = Math.abs(distance);
    let fare;
    if (number < 400) {
        return fare = 0;
    }
    else if (number > 2500) {
        return 'cannot travel that far';
    }
    else if (number > 2000) {
        return fare = 25;
    }
    else if (number >= 400) {
        return fare = ((number - 400) * .02);
    }
}