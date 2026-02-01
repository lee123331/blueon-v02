// src/sockets/chat.socket.js
export function initChatSocket(io) {
  io.on("connection", (socket) => {
    console.log("✅ socket connected:", socket.id);

    socket.on("chat:join", ({ roomId }, ack) => {
      if (!roomId) return ack?.({ ok: false, message: "ROOM_ID_REQUIRED" });

      socket.join(String(roomId));
      ack?.({ ok: true, roomId: String(roomId) });
    });

    socket.on("disconnect", () => {
      // console.log("socket disconnected:", socket.id);
    });
  });
}
