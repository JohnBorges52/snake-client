const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",// IP address here,
    port: "50541"// PORT number here,
  });
  conn.setEncoding("utf8");
  
  conn.on('connect' , () => {
    console.log("Successfully connected to game server!");
    conn.write("Name: JRB");
    
    let array = [conn.write("Say: BAD!"),conn.write("I'll"),conn.write("EAT"),conn.write("YOU!")]
    
    
      setInterval( () => {
        conn.write("Say: SNK ARMY!");
      }, 300)
  
    
    
  
    


    // conn.write("Move: right"); 
    // conn.write("Move: down");
    // conn.write("Move: left");
    

  });




  conn.on("data", (data) => {
    console.log("SERVER:", data);
    
  });





  return conn;
};

console.log("Connecting ...");
module.exports = {
  
  connect,
}


