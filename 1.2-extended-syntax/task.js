function getResult(a,b,c){
    
    "use strict";

    let b2 = Math.pow(b, 2);
    let d = b2 - (4 * a * c);
    let d2 = Math.sqrt(d);
    let x = [];

    if (d < 0) {
        x;
    } else if (d = 0) {
        x = [(- b + d2) / (2 * a)];
    } else {
        x = [(- b + d2) / (2 * a), (- b - d2) / (2 * a)];
    }
    
    return x;
}

function getAverageMark(marks){
    
    let marksSum = 0;
    let marksQuantity = marks.length;
    let averageMark = "";
            
    if (marksQuantity == 0) {
        averageMark = 0;
    } else if (marksQuantity > 5) {
        console.log("Учитываются только первые пять оценок!");
        marks.slice(0, 5);
    } else {
        for (let i = 0; i < marksQuantity; i++) {
            marksSum += marks[i];  
        }      
        averageMark = marksSum / marksQuantity;
    }
    
    return averageMark;
} 

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}