
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

const times = new Map()
times.set(0, '08:00')
times.set(1, '08:25')
times.set(2, '09:20')
times.set(3, '10:25')
times.set(4, '11:20')

const times7 = new Map(times)
times7.set(5, '11:20')
times7.set(6, '11:20')

const times91 = new Map(times)
times91.set(3, '10:25')
times91.set(4, '10:25')
times91.set(5, '10:25')
times91.set(6, '11:20')
times91.set(7, '11:20')
times91.set(8, '11:20')

const times92 = new Map(times)
times92.set(1, '08:25')
times92.set(2, '08:25')
times92.set(3, '08:25')
times92.set(4, '09:20')
times92.set(5, '09:20')
times92.set(6, '09:20')
times92.set(7, '10:25')
times92.set(8, '11:20')



const Lun = new Map()
Lun.set(0, 'Modo y orden')
Lun.set(1, 'Matemática')
Lun.set(2, 'Comunicación')
Lun.set(3, 'Ingles A')
Lun.set(4, 'Ingles B')
Lun.set(5, 'Ingles C')
Lun.set(6, 'Arte TE')
Lun.set(7, 'Arte PL')
Lun.set(8, 'Arte MU')

const Mar = new Map()
Mar.set(0, 'Modo y orden')
Mar.set(1, 'Quimica AP')
Mar.set(2, 'Matemática AP')
Mar.set(3, 'Comunicación AP')
Mar.set(4, 'Inglés A')
Mar.set(5, 'Inglés B')
Mar.set(6, 'Inglés C')
Mar.set(7, 'Biologia')
Mar.set(8, 'Física')

const Mie = new Map()
Mie.set(0, 'Modo y orden')
Mie.set(1, 'Tutoría')
Mie.set(2, 'Ciencias Sociales')
Mie.set(3, 'E.P.T.')
Mie.set(4, 'Inglés A')
Mie.set(5, 'Inglés B')
Mie.set(6, 'Inglés C')

const Jue = new Map()
Jue.set(0, 'Modo y orden')
Jue.set(1, 'Ed. Fis.')
Jue.set(2, 'Matemática')
Jue.set(3, 'Biologia')
Jue.set(4, 'Religion')

const Vie = new Map()
Vie.set(0, 'Modo y orden')
Vie.set(1, 'Comunicación')
Vie.set(2, 'Ciencias Sociales')
Vie.set(3, 'Comunicación')
Vie.set(4, 'Matemática')

const classLinks = new Map()
classLinks.set('MYO', 'https://classroom.google.com/c/NDA4ODYwNjc3OTg3')
classLinks.set('mat', 'https://classroom.google.com/c/NDA4NjUxMDIzMDk2')
classLinks.set('com', 'https://classroom.google.com/c/NDA4NjcxNjM2NzY2')
classLinks.set('CSO', 'https://classroom.google.com/c/NDE5OTUzNzM5Njkw')
classLinks.set('rel', 'https://classroom.google.com/c/NDA4Njk3NTg1MzUx')
classLinks.set('bio', 'https://classroom.google.com/c/NDA4ODYxNzQwOTEz')
classLinks.set('EFI', 'https://classroom.google.com/c/NDA4ODc1ODk4Nzcz')
classLinks.set('inA', 'https://classroom.google.com/c/NDE5ODY0OTU5MjY2')
classLinks.set('inB', '')
classLinks.set('inC', 'https://classroom.google.com/c/NDA4Njk5MjQ1OTkw')
classLinks.set('EPT', 'https://classroom.google.com/c/NDExNTY0ODYzMzUy')
classLinks.set('TUT', 'https://classroom.google.com/c/NDA4ODYwNjc3OTg3')
classLinks.set('fis', 'https://classroom.google.com/c/NDE5ODM2NzczNzUy')
classLinks.set('CAP', 'https://classroom.google.com/c/NDA4NzQ3NTM5NDE5')
classLinks.set('MAP', 'https://classroom.google.com/c/NDE4MjEyNDk4ODE4')
classLinks.set('QAP', '')
classLinks.set('ATE', 'https://classroom.google.com/c/NDA4MjYyMjEzMjUx')
classLinks.set('APL', 'https://classroom.google.com/c/MzQ2NTc5MTYzMjkx')
classLinks.set('AMU', '')

const LinksLun = new Map()
LinksLun.set(0,extrac('MYO'))
LinksLun.set(1,extrac('mat'))
LinksLun.set(2,extrac('com'))
LinksLun.set(3,extrac('inA'))
LinksLun.set(4,extrac('inB'))
LinksLun.set(5,extrac('inC'))
LinksLun.set(6,extrac('ATE'))
LinksLun.set(7,extrac('APL'))
LinksLun.set(8,extrac('AMU'))

const LinksMar = new Map()
LinksMar.set(0,extrac('MYO'))
LinksMar.set(1,extrac('QAP'))
LinksMar.set(2,extrac('MAP'))
LinksMar.set(3,extrac('CAP'))
LinksMar.set(4,extrac('inA'))
LinksMar.set(5,extrac('inB'))
LinksMar.set(6,extrac('inC'))
LinksMar.set(7,extrac('bio'))
LinksMar.set(8,extrac('fis'))

const LinksMie = new Map()
LinksMie.set(0,extrac('MYO'))
LinksMie.set(1,extrac('TUT'))
LinksMie.set(2,extrac('CSO'))
LinksMie.set(3,extrac('EPT'))
LinksMie.set(4,extrac('inA'))
LinksMie.set(5,extrac('inB'))
LinksMie.set(6,extrac('inC'))

const LinksJue = new Map()
LinksJue.set(0,extrac('MYO'))
LinksJue.set(1,extrac('EFI'))
LinksJue.set(2,extrac('mat'))
LinksJue.set(3,extrac('bio'))
LinksJue.set(4,extrac('rel'))

const LinksVie = new Map()
LinksVie.set(0,extrac('MYO'))
LinksVie.set(1,extrac('CSO'))
LinksVie.set(2,extrac('mat'))
LinksVie.set(3,extrac('com'))
LinksVie.set(4,extrac('mat'))

const arrayDeDias = [Lun,Mar,Mie,Jue,Vie]
lName = [];

switch(slDias){
    case 'Lun':
        for (let i = 0; i < Lun.size; i++) {
            lName[i] = arrayDeDias[0].get(i)
        }
        break;
    case 'Mar':
        for (let i = 0; i < Mar.size; i++) {
            lName[i] = arrayDeDias[1].get(i)
        }
        break;
    case 'Mie':
        for (let i = 0; i < Mie.size; i++) {
            lName[i] = arrayDeDias[2].get(i)
        }
        break;
    case 'Jue':
        for (let i = 0; i < Jue.size; i++) {
            lName[i] = arrayDeDias[3].get(i)
        }
        break;
    case 'Vie':
        for (let i = 0; i < Vie.size; i++) {
            lName[i] = arrayDeDias[4].get(i)
        }
        break;
    case 'Sab':
        console.log('Hoy es sabado')
        break;
    case 'Dom':
        console.log('Hoy es domingo')
        break;
    default: 
        console.log('fallo')
        break;
}

function extrac(nombre){
    let lc = classLinks.get(nombre)
    return lc
}

function noSchool(){
    $(".contenedor-icons").append(`<a class='cont-no'> HOY NO HAY CLASES </a>`)
}

function appendItems() {     
    function createCards(numDiasPorSL) {
            for (let i = 0; i < numDiasPorSL; i++) {
                
                var link = ''
                var tim = ''

                lName[1]=='Matemática'?link=LinksLun.get(i):lName[1]=='Tutoría'?link=LinksMie.get(i):lName[1]=='Ed. Fis.'?link=LinksJue.get(i):lName[1]=='Comunicación'?link=LinksVie.get(i):lName[1]=='Quimica AP'?link=LinksMar.get(i):console.log('fallo')

                lName.length==5?tim=times.get(i):lName.length == 7?tim = times7.get(i): lName.length==9&&lName[1]=='Matemática'?tim = times91.get(i):lName.length==9 && lName[1]!='Matemática'?tim=times92.get(i):console.log('ostia algo fallo')

                $(".contenedor-icons").append(`<a href="${link}" class="icon-a-cont" target="_blank"> <div class="icon"> <div class="svg-cont svg-classr"></div> <div class="icon-inner re-time-cont"><p>${tim}</p></div> <div class="icon-inner re-sepa-cont">|</div> <div class="icon-inner re-data-cont"><p>${lName[i]}</p></div> </div> </a>`);
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
        default:
            noSchool()
            break;
    }
 
}