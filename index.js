function distanceFromHqInBlocks(distance){
    if (distance > 42){
        return distance - 42;
    }
    else if (distance < 42){
        return 42-distance;
    }
}
function distanceFromHqInFeet(feet){
    if (feet > 42){
        return ((feet - 42)*264);
    }
    else if (feet < 42){
        return ((42-feet)*264);
    }
}
function distanceTravelledInFeet(num1, num2){
    if (num1 > num2){
        return ((num1 - num2)*264);
    }
    else if (num1 < num2){
        return ((num2-num1)*264);
    }
}
function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start,destination);
       
    if (distance < 400){
        return 0;
    }
    else if(distance > 400 && distance <=2000){
        return (distance-400)*0.02;
    }
    else if (distance>2000 && distance<2500){
        return 25;
    }
    else {
        return 'cannot travel that far';
      }
}