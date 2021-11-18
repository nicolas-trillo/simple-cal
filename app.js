function tiempo(){
    var ahora = new Date();
    var horas = ahora.getHours();
    var min = ahora.getMinutes();
    var seg = ahora.getSeconds();
    horas = cero(horas)
    min = cero(min)
    seg = cero(seg)
    ap = (horas < 12) ? '<span>AM</span>' : '<span>PM</span>' 
    document.getElementById('reloj').innerHTML = horas + ':'+ min 

    var dias = ['Dom', 'Lun','Mar','Mie','Jue','Vie','Sab'] 
    var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']  
    var numDia = ahora.getDate();
    var slDias = dias[ahora.getDay()];
    var slMeses = meses[ahora.getMonth()];
    var year = ahora.getFullYear();
    var fecha = `${slDias} ${numDia} ${slMeses}`
    document.getElementById('fecha').innerHTML = fecha;

    var time = setTimeout(()=>tiempo(),1000)

}
function cero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

var ahora = new Date();
var horas = ahora.getHours();
var min = ahora.getMinutes();
var seg = ahora.getSeconds();
horas = cero(horas)
min = cero(min)
seg = cero(seg)

var dias = ['Dom', 'Lun','Mar','Mie','Jue','Vie','Sab'] 
var meses = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']  
var numDia = ahora.getDate();
var slDias = dias[ahora.getDay()];
var slMeses = meses[ahora.getMonth()];
var year = ahora.getFullYear();

// APPEND

function appendItems() {
    
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
    
        const times = new Map()
        times.set('hora1', '08:00')
        times.set('hora2', '08:25')
        times.set('hora3', '09:20')
        times.set('hora4', '10:25')
        times.set('hora5', '11:20')
    
        const Lun = new Map()
        Lun.set('curso1', 'Modo y orden')
        Lun.set('curso2', 'Matemática')
        Lun.set('curso3', 'Comunicación')
        Lun.set('curso4.1', 'Ingles A')
        Lun.set('curso4.2', 'Ingles B')
        Lun.set('curso4.3', 'Ingles C')
        Lun.set('curso5', 'Arte')

        Lun.set('curso1meet', /*Insertar func*/)
        Lun.set('curso1class', /*Insertar func*/)
    
        const Mar = new Map()
        Mar.set('curso1', 'Modo y orden')
        Mar.set('curso2.1', 'Quimica AP')
        Mar.set('curso2.2', 'Matemática AP')
        Mar.set('curso2.3', 'Comunicación AP')
        Mar.set('curso3.1', 'Inglés A')
        Mar.set('curso3.2', 'Inglés B')
        Mar.set('curso3.3', 'Inglés C')
        Mar.set('curso4', 'Biologia')
        Mar.set('curso5', 'Física')
    
        const Mie = new Map()
        Mie.set('curso1', 'Modo y orden')
        Mie.set('curso2', 'Tutoría')
        Mie.set('curso3', 'Ciencias Sociales')
        Mie.set('curso4', 'E.P.T.')
        Mie.set('curso5.1', 'Inglés A')
        Mie.set('curso5.2', 'Inglés B')
        Mie.set('curso5.3', 'Inglés C')
    
        const Jue = new Map()
        Jue.set('curso1', 'Modo y orden')
        Jue.set('curso2', 'Ed. Fis.')
        Jue.set('curso3', 'Matemática')
        Jue.set('curso4', 'Biologia')
        Jue.set('curso5', 'Religion')
        
        const Vie = new Map()
        Vie.set('curso1', 'Modo y orden')
        Vie.set('curso2', 'Comunicación')
        Vie.set('curso3', 'Ciencias Sociales')
        Vie.set('curso4', 'Comunicación')
        Vie.set('curso5', 'Matemática')
     

    function createCards(numDiasPorSL) {
        for (let i = 0; i < numDiasPorSL; i++) {
            $(".contenedor-icons").append(`<div class="icon"> <a href="#" class="svg-cont svg-classr"></a> <div class="icon-inner re-time-cont"><p>10:09</p></div> <div class="icon-inner re-sepa-cont">|</div> <div class="icon-inner re-data-cont"><p>String</p></div> <div class="buffer"></div> <a href="#" class="svg-cont svg-meet"></a> </div>`);
          }
        
        return numDiasPorSL
    }

    const slDiasCount = slDias;
    switch (slDiasCount) {
        case "Lun": 
            createCards(Lun.size);
            break;
        case "Mar":
            createCards(Mar.size);
            break;
        case "Mie":
            createCards(Mie.size);
            break;
        case "Jue":
            createCards(Jue.size);
            break;
        case "Vie":
            createCards(Vie.size);
            break;
    }  
          
}



{/* 

map1.get('a')

const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

for (let i = 0; i < 9; i++) {
  str = str + i;
}

<div class="icon">
  <a href="#" class="svg-cont svg-classr"></a>
  <div class="icon-inner re-time-cont"><p>10:09</p></div>
  <div class="icon-inner re-sepa-cont">|</div>
  <div class="icon-inner re-data-cont"><p>Curso3</p></div>
  <div class="buffer"></div>
  <a href="#" class="svg-cont svg-meet"></a>
</div> 

*/}