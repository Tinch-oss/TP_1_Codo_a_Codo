const nombre=document.getElementByID("nomjs")
const apellido=document.getElementByID("apejs")
const email=document.getElementByID("emajs")
const form=document.getElementByID("formjs")
const parrafo=document.getElementByID("warningjs")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings=""
    let regexEmail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let entrar=false
    parrafo.innterHTML = ""

    if(nombre.value.lenght <6)
    {
        alert("Nombre muy corto")
        warnings += `El nombre no es valido <br>`
        entrar=true
    }
    console.log()
    if(!regexEmail.test(email.value))
    {
        warnings += `El email no es valido <br>`
        entrar=true
    }
    if(PaymentResponse.value.lenght < 8)
    {
        warnings += `El email no es valido <br>`
        entrar=true
    }
    if(entrar=true)
    {
        parrafo.innerHTML = warnings
    }
})