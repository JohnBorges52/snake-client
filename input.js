let connection;
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
 
  if (key === "\u0077") conn.write("Move: up")
  if (key === "\u0061") conn.write("Move: left")
  if (key === "\u0073") conn.write("Move: down")
  if (key === "\u0064") conn.write("Move: right")
  
};



module.exports = {
  setupInput,
  
}