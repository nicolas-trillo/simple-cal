function tiempo(){
    var ahora = new Date();
    var horas = ahora.getHours();
    var min = ahora.getMinutes();
    var seg = ahora.getSeconds();
    horas = cero(horas)
    min = cero(min)
    seg = cero(seg)
    ap = (horas < 12) ? '<span>AM</span>' : '<span>PM</span>' 
    document.getElementById('reloj').innerHTML = horas + ':'+ min +':'+ seg + ap


    var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'] 
    var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']  
    var numDia = ahora.getDay();
    var slDias = dias[ahora.getDay()];
    var slMeses = meses[ahora.getMonth()];
    var year = ahora.getFullYear();
    var fecha = `${slDias} ${numDia} de ${slMeses} de ${year}`
    document.getElementById('fecha').innerHTML = fecha;

    // var time = setTimeout(function(){ startTime() }, 500);
    var time = setTimeout(()=>tiempo(),500)
}
function cero(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}