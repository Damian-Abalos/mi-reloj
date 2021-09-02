setInterval(setClock, 1000)

const agujaSegundos = document.querySelector('[data-aguja-segundos')
const agujaMinutos = document.querySelector('[data-aguja-minutos')
const agujaHoras = document.querySelector('[data-aguja-horas')




function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getMinutes())/60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /12
    setRotation(agujaSegundos, secondsRatio)
    setRotation(agujaMinutos, minutesRatio)
    setRotation(agujaHoras, hoursRatio)
}

function setRotation(element, rotationRatio){
    element.style.setProperty('--rotacion', rotationRatio * 360)
}

setClock()