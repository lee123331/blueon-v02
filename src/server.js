// src/server.js
import http from "http";
import dotenv from "dotenv";
import { Server } from "socket.io";

import app from "./app.js";
import { initChatSocket } from "./sockets/chat.socket.js";

dotenv.config();

const server = http.createServer(app);

/* ===========================
   socket.io
=========================== */
const io = new Server(server, {
  cors: {
    origin: true,
    credentials: true,
  },
});

initChatSocket(io);

/* ===========================
   start
=========================== */
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`✅ BlueOn V02 server running on ${PORT}`);
  console.log(`✅ Socket client: http://localhost:${PORT}/socket.io/socket.io.js`);
});
