let imgbox = document.getElementById("imgbox");
let qrimage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQr() {
  if (qrText.value.length > 0) {
    const qrData = encodeURIComponent(qrText.value);
    qrimage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrData}`;
    imgbox.classList.add("show-img");
  } else {
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
}
