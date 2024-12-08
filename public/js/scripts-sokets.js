const soketClient = io();

const msjConnect = document.getElementById("msjConnect");
const msjDisConect = document.getElementById("msjDisConect");
const textMessage = document.querySelector("#textMessage");
const enviarText = document.querySelector("#enviarText");

msjDisConect.style.display = "none";
msjConnect.style.display = "none";

soketClient.on("connect", () => {
  console.log("connectado DES-FRONT");
  msjConnect.style.display = "inline-block";
  msjDisConect.style.display = "none";
});

soketClient.on("disconnect", () => {
  console.log("Se perdio la conexion con el BACK-END");
  msjConnect.style.display = "none";
  msjDisConect.style.display = "inline-Block";
});


soketClient.on('enviar-messaje',(payload)=>{
  console.log(payload)
})



enviarText.addEventListener("click", () => {
  const msj = textMessage.value;
  const payload = {
    msj,
    userId:'shjkdkjs$%$^%&',
    date: new Date(),
  };
  soketClient.emit("enviar-messaje", payload,(id,payload)=>{
    console.log('Desde el server',id,payload)
  });
});
