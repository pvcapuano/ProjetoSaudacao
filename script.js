function carregar () {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = 9 //data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h e ${minutos} minutos`

    if(hora >= 0 && hora < 12) {
        // Bom dia
        img.innerHTML = '<img src="manha.jpg">'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        // Boa tarde
        img.innerHTML = '<img src="tarde.jpg">'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite
        img.innerHTML = '<img src="noite.jpg">'
        document.body.style.background = '#515154'
    }
}