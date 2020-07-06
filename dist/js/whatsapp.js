let button = document.querySelector('#whatsapp');
let form = document.querySelector('#form-whatsapp')
let send = document.querySelector('#send-whatsapp')

button.addEventListener('click', function () {
    form.classList.toggle('whatsapp-toggle')
})
send.addEventListener('click', function () {
    let name = document.querySelector('#name').value
    let text = document.querySelector('#text').value
    let url = `https://api.whatsapp.com/send?phone=584249169698&text=*Nombre:*%0A${name}%0A*Mensaje:*%0A${text}`
    window.open(url, "_blank");
})