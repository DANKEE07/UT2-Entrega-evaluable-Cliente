// Daniel López Muñoz
// 2ºCFGS: Desarrollo de Aplicaciones Web (DAW)
// Desarrollo Web en Entorno Cliente

function ejercicio1() {

  let fraseUsuario = String(prompt("Dime una frase de al menos 5 palabras: "))
  let fraseUsuarioSeparada = fraseUsuario.trim().split(" ")

  // Importante usar replaceAll y no replace, ya que eso solo eliminar el primer espacio

  while (fraseUsuarioSeparada.length < 5) {
    alert("La frase contiene menos de 5 palabras.")
    // Aquí no pongo el "let" de nuevo porque estoy modificando las que ya tengo (las que creé arriba)
    // por lo cual no es necesario, ya que estaría creando varibales nuevas
    fraseUsuario = String(prompt("Dime una frase de al menos 5 palabras: "))
    fraseUsuarioSeparada = fraseUsuario.trim().split(" ")
  }

  let fraseUsuarioSinEspacios = fraseUsuario.replaceAll(" ","")
  alert("La frase contiene 5 o más palabras.")

  console.log("La frase sin espacios son " + fraseUsuarioSinEspacios.length + " letras")
  let fraseVocales = fraseUsuario .replaceAll("a", "*")
    .replaceAll("e", "*")
    .replaceAll("i", "*")
    .replaceAll("o", "*")
    .replaceAll("u", "*")
    .replaceAll("A", "*")
    .replaceAll("E", "*")
    .replaceAll("I", "*")
    .replaceAll("O", "*")
    .replaceAll("U", "*")
  console.log(fraseVocales)

  let posicion = 0
  let frasePares = ""

  for (let i = 0; i < fraseUsuario.length; i++) {
    if (fraseUsuario[i] !== " ") {
      posicion++

      if (posicion % 2 === 0) {
        frasePares += "_"
      } else {
        frasePares += fraseUsuario[i]
      }
    } else {
      frasePares += " "
    }
  }

  console.log(frasePares)
}

function ejercicio2() {

  let palabras = []

  // este for es literalmente para no tener que poner 7 veces el "let frase1 ... , let frase2 ..."
  for (let i = 0; i < 7; i++) {
    let palabraAIntroducir = prompt("Introduce una palabra: ")
    if (palabraAIntroducir.length > 4) {
    palabras.push(palabraAIntroducir)
    }
  }
  let palabrasOrdenadas = palabras.sort()
  alert(palabrasOrdenadas)

  let palabraQueEsteEnListado = String(prompt("Introduce una palabra que esté en el listado: "))
  let palabraEnListadoEnMinusculas = palabraQueEsteEnListado.toLowerCase()
  let encontrada = false

  for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].toLowerCase() === palabraEnListadoEnMinusculas) {
      encontrada = true
      // Esto me ha costado entenderlo, es para que cuando encuentre la palabra no siga, por ejemplo
      // Si busca una palabra y empieza a recorrer la lista pero no pongo el "encontrada = true" la va a recorrer entera y se vería así:

      // La palabra está en el listado
      // La palabra no está en el listado
      // La palabra no está en el listado

      // Al poner lo de "true", corta cuando la palabra está en el listado
    }
  }

  if (encontrada) {
    console.log("La palabra está en el listado")
  } else {
    console.log("La palabra no está en el listado, pero vamos a añadirla")
    palabras.push(palabraQueEsteEnListado)
    palabras.sort()
    alert(palabras)
  }

}

function ejercicio3() {
  let mapaAlumnos = new Map()

  for (let i = 0; i < 4; i++) {
    let nombreAlumno = String(prompt("Introduce el nombre del alumno: "))
    let notaAlumno = Number(prompt("Introduce la nota del alumno: "))
    if (notaAlumno <= 10 && notaAlumno >= 0) {
    let alumno = { nombre: nombreAlumno, nota: notaAlumno }
    mapaAlumnos.set(nombreAlumno, alumno)
  }else {
      alert("La nota no puede ser mayor que 10 o menor que 0")
    }
}

  let preguntaAUsuario = String(prompt("Dime el nombre del Estudiante del cual quieres ver la nota: "))
    if (mapaAlumnos.has(preguntaAUsuario)) {
      alert("La nota del alumno " + preguntaAUsuario + " es " + mapaAlumnos.get(preguntaAUsuario).nota)
    } else {
      alert("El alumno no está en la lista, pero podemos añadirlo.")

      let notaAlumnoNuevo = Number(prompt("Introduce la nota del alumno: "))
      if (notaAlumnoNuevo <= 10 && notaAlumnoNuevo >= 0) {
        let alumnoNuevo = {nombre: preguntaAUsuario, nota: notaAlumnoNuevo}
        mapaAlumnos.set(preguntaAUsuario, alumnoNuevo)

        alert("El alumno ha sido añadido a la lista.")
        alert("El alumno " + mapaAlumnos.get(preguntaAUsuario).nombre + " " + "ha sido añadido con la nota " + mapaAlumnos.get(preguntaAUsuario).nota)
      } else {
        alert("La nota no puede ser mayor que 10 o menor que 0")
      }
    }
  let sumaNotas = 0;
  for (let alumno of mapaAlumnos.values()) {
    sumaNotas += alumno.nota;
    }
    let mediaNotas = sumaNotas / mapaAlumnos.size;
  console.info("La nota media de la clase es: " + mediaNotas)
}

function ejercicio4() {

  let multiplosDeDos = new Set([0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30])
  let multiplosDeTres = new Set([0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30])
  alert("Mira el log para ver el resultado")

  console.log("---- UNION DE AMBOS CONJUNTOS ----")
  console.log(multiplosDeDos.union(multiplosDeTres))

  console.log("//// INTERSECCIÓN DE AMBOS CONJUNTOS ////")
  console.log(multiplosDeDos.intersection(multiplosDeTres))

  console.log("**** DIFERENCIA DEL PRIMERO MENOS EL SEGUNDO ****")
  console.log(multiplosDeDos.difference(multiplosDeTres))

  // No sabía que más poner así que he copiado dibujos ASCII de Internet
  console.log("≽(◉˕ ◉ ≼マ DIFERENCIA DEL SEGUNDO MENOS EL PRIMERO ≽(◉˕ ◉ ≼マ")
  console.log(multiplosDeTres.difference(multiplosDeDos))

  console.log("ʕ•ᴥ•ʔ RESULTADO DE LA EXCLUSIÓN DE LOS ELEMENTOS QUE PERTENECEN A AMBOS CONJUNTOS ʕ•ᴥ•ʔ")
  console.log(multiplosDeDos.symmetricDifference(multiplosDeTres))

}

function ejercicio5() {

  let listaVacia = new Set()
  let numerosUsuario = prompt("Dime una lista de números separados por comas: ")
  numerosUsuario = numerosUsuario.split(",")

  for (let numero of numerosUsuario) {
    let veces = numerosUsuario.filter(n => n === numero).length
    if (veces === 1) {
      listaVacia.add(Number(numero))
    }
  }

  let sumaNumeros = 0
  for (let numero of listaVacia) {
    sumaNumeros += numero
  }
  console.log("Los números que aparecen una sola vez son: " + [...listaVacia])
  // Como listaVacia es un Set, cuando intento concatenarlo directamente con un texto,
  // JavaScript no sabe mostrar su contenido, y buscando en Internet y con la IA
  // me ha comentado que "[...]" lo que hace es sacar los elementos del Set y meterlos en un array
  // Los tres puntos ... son el operador spread
  console.log("La media de los números es: " + sumaNumeros / listaVacia.size)
}

function ejercicio6() {

  let frase = prompt("Introduce una frase: ")
  frase = (frase.toLowerCase())
  frase = frase.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

  // Esto para quitar los acentos de las letras

  frase = frase.replace(" ","")

  let fraseAlReves = frase.split("").reverse().join("")
  if (fraseAlReves === frase) {

    console.log("La frase es un palíndromo")
  } else {
    console.log("La frase no es un palíndromo")
  }

}

function ejercicio7() {

  // FUNCIONES

  let tareas = new Map();

  function agregarTarea() {
    let tarea = prompt("Introduce la tarea que quieres añadir: ")
    tareas.set(tarea, false)
    console.log("Tarea añadida: " + tarea)
  }

  function completarTarea() {
    let tarea = prompt("Introduce la tarea que quieres completar: ")
    if (tareas.has(tarea)) {
      tareas.set(tarea, true)
      console.log("Tarea completada: " + tarea)
    } else {
      console.log("La tarea no existe")
    }
  }

  function eliminarTarea() {
    let tarea = prompt("Introduce la tarea que quieres eliminar: ")
    if (tareas.has(tarea)) {
      tareas.delete(tarea)
      console.log("Tarea eliminada: " + tarea)
    } else {
      console.log("La tarea no existe")
    }
  }

  function mostrarLista() {
    console.log("Lista de Tareas: ")
    tareas.forEach(function(completada, tarea){
      if (completada) {
        console.log("Tarea completada: " + tarea)
      } else {
        console.log("Tarea pendiente: " + tarea)
      }
    })
  }

  function mostrarPedientes() {
    console.log("Tareas pendientes: ")
    tareas.forEach(function(completada, tarea){
      if (!completada) {
        console.log("Tarea pendiente: " + tarea)
      }
    })
  }

  let opcion
  do {
    let opcion = prompt("¿Qué ejercicio quieres ejecutar? (1-7): " +
      "1. Agregar Tarea, 2. Completar Tarea, 3. Eliminar Tarea, 4. Mostrar Lista, 5. Mostrar Pedientes" +
      "6. Cerrar")

  } while (opcion !== "6")
}