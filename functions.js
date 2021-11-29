function noSchool(){
    $(".contenedor-icons").append(`<a class='cont-no'> HOY NO HAY CLASES </a>`)
}

function extrac(nombre){
    let lc = classLinks.get(nombre)
    return lc
}
