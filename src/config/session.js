// src/config/session.js
import session from "express-session";

/**
 * 최소 동작 세션 미들웨어 (Railway 부팅용)
 * - 나중에 MySQLStore 붙일 수 있음
 */
export const sessionMiddleware = session({
  name: "blueon.sid",
  secret: process.env.SESSION_SECRET || "blueon-dev-secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // HTTPS에서만 true 권장
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7일
  },
});
