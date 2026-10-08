function ejercicio1() {

  let fraseUsuario = String(prompt("Dime una frase de al menos 5 palabras: "))
  let fraseUsuarioSeparada = fraseUsuario.split(" ")
  let fraseUsuarioSinEspacios = fraseUsuario.replaceAll(" ","")

  // Importante usar replaceAll y no replace, ya que eso solo eliminar el primer espacio

  while (fraseUsuarioSeparada.length < 5) {
    alert("La frase contiene menos de 5 palabras.")
    // Aquí no pongo el "let" de nuevo porque estoy modificando las que ya tengo (las que creé arriba)
    // por lo cual no es necesario, ya que estaría creando varibales nuevas
    fraseUsuario = String(prompt("Dime una frase de al menos 5 palabras: "))
    fraseUsuarioSeparada = fraseUsuario.split(" ")
  }

  alert("La frase contiene 5 o más palabras.")

  console.log("La frase sin espacios son " + fraseUsuarioSinEspacios.length + " letras")
  console.log(fraseUsuario.replaceAll("a","*"))
  console.log(fraseUsuario.replaceAll("e","*"))
  console.log(fraseUsuario.replaceAll("i","*"))
  console.log(fraseUsuario.replaceAll("o","*"))
  console.log(fraseUsuario.replaceAll("u","*"))
  // No especifica si también debo de hacerlo con mayúsculas, pero si también fueran mayúsculas tendría que ser igual con todas
  // console.log(fraseUsuario.replaceAll("A","*"))
  let posicion = 0
  let frasePares = ""

  // Esto ni idea

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
  let alumnos = []

  for (let i = 0; i < 4; i++) {
    let nombreAlumno = String(prompt("Introduce el nombre del alumno: "))
    let notaAlumno = Number(prompt("Introduce la nota del alumno: "))
    let alumno = { nombre: nombreAlumno, nota: notaAlumno }
    alumnos.push(alumno)
  }

  console.log(alumnos)
}