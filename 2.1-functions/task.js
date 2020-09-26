"use strict"

// Задача №1

function getSolutions(a,b,c) {

    let b_2 = Math.pow(b, 2);
    let x1 = "";
    let x2 = "";
    let sum = {
        D: b_2 - (4 * a * c),
        roots: []
    };
    
    if (sum.D < 0) {
        return sum;
    } else if (sum.D == 0) {
        let x1 = - b / (2 * a);
        sum.roots.push(x1);
        return sum;
    } else if (sum.D > 0) {
        let D_2 = Math.sqrt(sum.D);
        x1 = (- b + D_2) / (2 * a);
        x2 = (- b - D_2) / (2 * a);
        sum.roots.unshift(x1);
        sum.roots.push(x2);
        return sum;
    }
}

function showSolutionsMessage(a,b,c) {

    let result = getSolutions(a,b,c);

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log("Уравнение не имеет вещественных корней");
    } else if (result.D == 0) {
        console.log(`Уравнение имеет один корень x1 = ${result.roots}`);
    } else if (result.D > 0) {
        console.log(`Уравнение имеет два корня. x1 = ${result.roots[0]}, x2 = ${result.roots[1]}`);
    }

}

// Задача №2

function getAverageScore(data) {

    let sum = 0;
    let marksArray = 0;
    
    for (let averageMarks in data) {
        
        let markValue = data[averageMarks];
        let result = 0;
        
        for (let i = 0; i < markValue.length; i++) {
            result = result + markValue[i];
        }
    
        data[averageMarks] = result / markValue.length;
        sum = sum + data[averageMarks];
        
        marksArray++
        
        data.average = sum / marksArray;
    }

    return data

}
        
    console.log(getAverageScore(
        {
        Algebra: [3, 4, 5, 4],
        Biology: [5, 2],
        Drawing: [5, 4, 5],
        Chemistry: [4, 2, 3],
        Geography: [5, 4, 2, 3],
        Geometry: [2, 3],
        Literature: [4, 4, 3],
        Music: [5, 5, 4],
        Physics: [2, 3, 4, 3, 2],
        Russian: [4, 5, 3, 2]
    }
    ));        