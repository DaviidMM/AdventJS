function learn(time, courses) {
  var bestTime = 0
  var bestCourses = courses.reduce((acc, course, i) => {
    const possibleCourses = [...courses].splice(i + 1).filter(possibleCourse => (possibleCourse + course) <= time)
    if (possibleCourses.length){
      const possibleCourse = Math.max(...possibleCourses)
      if ((possibleCourse + course) > bestTime) {
        bestTime = possibleCourse + course
        acc = [i, courses.indexOf(possibleCourse)]
      }
    }
    return acc;
  }, []);
  return bestCourses.length ? bestCourses : null
}

function learnFor(time, courses) {
  var bestTime = 0;
  var arr = null;
  for(let i = 0 ; i < courses.length ; i++) {
    for (let j = i + 1; j < courses.length; j++) {
      if (i === j) continue;
      const sum = courses[i] + courses[j];
    
      if(sum > bestTime && sum <= time) {
        bestTime = sum;
        arr = [i, j];
      }
    }
  }
  return arr
}


console.log(learnFor(10, [2, 3, 8, 1, 4])) // [0, 2] -> con 10 horas disponibles lo mejor es que completemos los cursos en el índice 0 y 2.
console.log(learnFor(15, [2, 10, 4, 1])) // [1, 2] -> Los cursos en [1, 2] son 14 horas, es la mejor opción.
console.log(learnFor(25, [10, 15, 20, 5])) // [0, 1] -> los cursos [0, 1] y [2, 3] completan exactamente con 25 horas pero siempre devolvemos el primero que encontremos
console.log(learnFor(8, [8, 2, 1])) // [1, 2] -> para hacer dos cursos, no podemos hacer el de 8 horas, así que devolvemos el de 1 y 2.
console.log(learnFor(8, [8, 2, 1, 4, 3])) // [3, 4] -> usamos el máximo tiempo disponible así que [3, 4] usa 7 horas y el [1, 2] sólo usaría 3 horas.
console.log(learnFor(4, [10, 14, 20])) // null -> no nos da tiempo a hacer dos cursos
console.log(learnFor(5, [5, 5, 5])) // null -> no nos da tiempo a hacer dos cursos