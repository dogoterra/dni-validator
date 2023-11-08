const dniInput = document.getElementById('dniInput')
const dniButton = document.getElementById('dniButton')
dniInput.addEventListener('keypress', (e) => {
    if (e.key==='Enter') dniButton.click()
})

esDNI = (dni) => {
    if (!/^[0-9]{8}[A-Z]$/.test(dni)) {
        return false;
    } else {
        const letras = "TRWAGMYFPDXBNJZSQVHLCKE";

        // Extraer número y letra del DNI
        const numero = dni.substr(0, dni.length - 1);
        const letraDNI = dni.substr(dni.length - 1);

        // Calcular letra esperada
        const letraCalculada = letras[numero % 23]

        return letraDNI === letraCalculada
    }
}

validarDNI = () => {
    const dni = dniInput.value.trim().toUpperCase()

    if (esDNI(dni))
        document.getElementById('resultado').textContent = `DNI ${dni} es válido`
    else
        document.getElementById('resultado').textContent = `DNI ${dni} no es válido`
}