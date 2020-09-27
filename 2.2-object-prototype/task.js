// Задача №1
    
String.prototype.isPalindrome = function() {
    
    let normalStr = this.toLowerCase().match(/[а-я]/gi).reverse();
   
    return normalStr.join('') === normalStr.reverse().join('');
}

// Задача №2

function getAverageMark(marks) {

    let marksSum = 0;
    
    for (let i = 0; i < marks.length; i++) {
            marksSum += marks[i];  
        }  
        
    let averageMark = marksSum / marks.length;

    return Math.round(averageMark);
}

/*function checkBirthday(birthday) {
    // код для задачи №3 писать здесь
    // return verdict
}*/