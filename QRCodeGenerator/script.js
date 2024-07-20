function generateQRCode() {
    const qrText = document.getElementById('text').value;
    if (!qrText) {
        alert('Please enter text or URL');
        return;
    }

    const qrCodeContainer = document.getElementById('qrcode');
    qrCodeContainer.innerHTML = '';
    
    new QRCode(qrCodeContainer, {
        text: qrText,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}
