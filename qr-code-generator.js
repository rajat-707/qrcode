const qrCode = document.querySelector(".qr-code");
const qrImg = document.querySelector(".qr-code img");
const generateBtn = document.querySelector(".btn");
const qrInput = document.querySelector(".form input")
const downloadBtn = document.querySelector(".downloadBtn");

generateBtn.addEventListener("click", () => {
    event.preventDefault();

    let qrValue = qrInput.value;
    if(!qrValue) return;
    generateBtn.innerHTML = "<i class='bi bi-arrow-clockwise'></i> Generating QR Code..."
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x22sdfsdfsdf0&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        qrCode.classList.add("active");
        generateBtn.innerHTML = "Generate Again";
        downloadBtn.style.display = "block";
    })
})


downloadBtn.addEventListener("click", async () => {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "qr-code-digital-partner.png"; 
    link.click();
    URL.revokeObjectURL(url);
});