import './style.css'

let btnClick = document.querySelectorAll('button')
let contenedor = document.querySelector('#contenedor')

let gatosSeguidos1 = '😺😺😺😺😺😺'
let gatosSeguidos2 = '😸😸😸😸😸😸'
let gatosSeguidos3 = '😹😹😹😹😹😹'

btnClick.forEach( (btnGato) => {
    btnGato.addEventListener('click', () =>{
        switch (btnGato.id) {
            case 'btn-1':
                contenedor.textContent += '😺'
                if (contenedor.textContent.includes(gatosSeguidos1)) mantenerCajas()
                break;
            case 'btn-2':
                contenedor.textContent += '😸'
                if (contenedor.textContent.includes(gatosSeguidos2)) mantenerCajas()
                break;
            case 'btn-3':
                contenedor.textContent += '😹'
                if (contenedor.textContent.includes(gatosSeguidos3)) mantenerCajas()
                break;
            default:
                break;
        }
    })
})

let mantenerCajas = () => {
    contenedor.textContent = contenedor.textContent.substring(0, contenedor.textContent.lastIndexOf('◼️') + 1)
    contenedor.textContent += '◼️'
}
