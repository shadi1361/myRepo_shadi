document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.querySelector('form button');
    const qrCodeBox = document.querySelector('.qr-Code'); // تصحیح نام کلاس (کلاس باید qr-Code باشد نه qr-code)
    const qrInput = document.querySelector('form input');
    const qrImage = document.querySelector('.qr-Code img'); // همانطور که در بالا اشاره شد، این هم باید qr-Code باشد

    generateBtn.addEventListener('click', () => {
        let qrValue = qrInput.value;
        if(!qrValue){
            return alert('Bitte geben Sie eine URL/einen Text ein')
        }
        generateBtn.innerText = 'QR-Code wird empfangen'
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
        qrImage.addEventListener('load' ,()=>{
        qrCodeBox.classList.remove('hidden');
        generateBtn.innerText = 'QR-Code Ihrer Adresse lautet:'
        })
    })
    qrInput.addEventListener('keyup' , ()=>{
        if(!qrInput.value){
            qrCodeBox.classList.add('hidden');
             generateBtn.innerText = 'QR-Code Generator'
        }
    })
});