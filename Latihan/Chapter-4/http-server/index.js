// Import HTTP Standar Library dari Node.js
// Hal inilah yang nantinya akan kita gunakan untuk membuat
// HTTP Server

const http = require('http')
// const { PORT = 8000 } = process.env; // Ambil port dari environment variable

// Request handler
// Fungsi yang berjalan ketika ada request yang masuk.
const onRequest = (req, res) => {
  // Memberi status 200
  res.writeHead(200);
  res.end("Hello from the other side");
}

const server = http.createServer(onRequest);

// Jalankan server
server.listen(2000, '127.0.0.1', () => {
  console.log("Server sudah berjalan, silahkan buka http://127.0.0.1:2000");
})