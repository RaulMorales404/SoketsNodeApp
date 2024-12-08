
const soketControllers = (soket) => {
        console.log("CLiente conetado",soket.id);
  
        soket.on("disconnect", () => {
          console.log("se desconecto cliente", soket.id);
        });
  
        soket.on("enviar-messaje", (payload,callback) => {
          const id = 778999952135;
  
          callback(id,payload);
          // this.io.emit('enviar-messaje',payload)
          soket.broadcast.emit('enviar-messaje',payload)
        });
      }





module.exports = {
    soketControllers
}