// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
// los alumnos usando la función .reduce().

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

let totalScore = exams.reduce((total, exam) => {
    return total + exam.score
}, 0)

console.log("Total score: ", totalScore)

// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
// alumnos que esten aprobados usando la función .reduce().


let totalScore2 = exams.reduce((total, exam) => {
    if(exam.score >= 5) {
      total = total += exam.score
    }
    return total
}, 0)

console.log("Total score aprobados: ", totalScore2)


// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

let mediaScore = totalScore / exams.length

console.log("Total score media: ", mediaScore)