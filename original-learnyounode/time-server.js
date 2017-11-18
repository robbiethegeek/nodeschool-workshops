const net = require('net');

const leftPad = (item) => {
  return (item < 10)? `0${item}` : item;
};
const server = net.createServer((socket) => {
  const date = new Date();
  let dateStamp = `${date.getFullYear()}-`;
  dateStamp += `${leftPad(date.getMonth() + 1)}-`;
  dateStamp += `${leftPad(date.getDate())} `;
  dateStamp +=  `${leftPad(date.getHours())}:${leftPad(date.getMinutes())}`;
  socket.end(dateStamp + '\n')
});

server.listen(Number(process.argv[2]));