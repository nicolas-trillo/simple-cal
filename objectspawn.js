const contenedor = document.querySelector('.contenedor-icons');

function spawn(hora,separador,name){
    hora = `<div>${hora}</div>`;
    separador = `<div>${separador}</div>`;
    name = `<div>${name}</div>`;
    return [hora,separador,name];
}

let documentFragment = document.createDocumentFragment();

    for (let i = 1; i <= 10 ; i++){
        var timenottime = 10
        var namenoname = 'String'
        const sep = '|'
        let mob = spawn(timenottime,sep,namenoname);
    
        let a = document.createElement("A")
        a.classList.add('icon-cont',`cont${i}`)
        contenedor.appendChild(a)

        let icon = document.createElement('DIV')
        icon.classList.add('icon', `icon${i}`)

        let divlinks = document.createElement('DIV')
        divlinks.classList.add("svg-cont","svg-meet")

        let divtime =  document.createElement('DIV')
        divtime.classList.add('icon-inner','re-time-cont')
        divtime.innerHTML = mob[0]

        let divsep =  document.createElement('DIV')
        divsep.classList.add('icon-inner','re-sepa-cont')
        divsep.innerHTML = mob[1]

        let divcont =  document.createElement('DIV')
        divcont.classList.add('icon-inner','re-data-cont')
        divcont.innerHTML = mob[2]

        const contenedorDos = document.querySelector(`.cont${i}`)
        

        contenedorDos.appendChild(icon)

        const contenedorTres = document.querySelector(`.icon${i}`)
        contenedorTres.appendChild(divlinks)
        contenedorTres.appendChild(divtime)
        contenedorTres.appendChild(divsep)
        contenedorTres.appendChild(divcont)
    }

contenedor.append(documentFragment)