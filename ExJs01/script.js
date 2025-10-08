var pegaHora = new Date() 
var hora = pegaHora.getHours();
if (hora >= 6 ) {
    var textoTela = window.document.getElementById('textMuda')
        textoTela.innerHTML = `Agora são Exatamente <strong>${hora}<strong> Horas!`
    var imgTela = window.document.getElementById('imgMuda')
        imgTela.style.backgroundImage = 'url(imagens/manha.jpg)'
    var body = window.document.getElementById('corpoBody') 
        body.style.backgroundColor = '#fce19c'    
} if (hora > 12) {
    var textoTela = window.document.getElementById('textMuda')
        textoTela.innerHTML = `Agora são Exatamente <strong>${hora}<strong> Horas!`
    var imgTela = window.document.getElementById('imgMuda')
        imgTela.style.backgroundImage = 'url(imagens/tarde.jpg)'
    var body = window.document.getElementById('corpoBody') 
        body.style.backgroundColor = 'rgb(206, 99, 41)'         
} if (hora >=18) {
    var textoTela = window.document.getElementById('textMuda')
        textoTela.innerHTML = `Agora são Exatamente <strong>${hora}<strong> Horas!`
    var imgTela = window.document.getElementById('imgMuda')
        imgTela.style.backgroundImage = 'url(imagens/noite.jpg)'
    var body = window.document.getElementById('corpoBody') 
        body.style.backgroundColor = 'rgb(109, 109, 250)'   
}