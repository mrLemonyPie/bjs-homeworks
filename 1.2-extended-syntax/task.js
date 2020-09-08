"use strict";

function getResult(a,b,c){

    let b2 = Math.pow(b, 2);
    let d = b2 - (4 * a * c);
    let d2 = Math.sqrt(d);
    let x = [];

    if (d == 0) {
        x = [(- b + d2) / (2 * a)];
    } else if (d > 0) {
        x = [(- b + d2) / (2 * a), (- b - d2) / (2 * a)];
    }
    
    return x;
}

function getAverageMark(marks){
            
    if (marks.length == 0) {
        return 0;
    } else if (marks.length > 5) {
        console.log("Учитываются только первые пять оценок!");
        marks.splice(5);
    } 
    
    let marksSum = 0;
    for (let i = 0; i < marks.length; i++) {
            marksSum += marks[i];  
        }  
    return marksSum / marks.length;
} 

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;
}