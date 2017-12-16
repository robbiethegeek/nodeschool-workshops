const net = require('net');

const padLeft = ((i) => {
  return ((i < 10) ? '0':'') + i;
})
const server = net.createServer((socket) => {
  const date = new Date();
  let output = `${date.getFullYear()}-`;
  output += `${padLeft(date.getMonth()+1)}-`;
  output += `${padLeft(date.getDate())} `;
  output += `${padLeft(date.getHours())}:`;
  output += `${padLeft(date.getMinutes())}\n`
  socket.end(output);
});

server.listen(process.argv[2]);