export { default } from "next-auth/middleware"

// 以下链接只有登录才可跳转
export const config = { 
  matcher: [
    "/trips",
    "/reservations",
    "/properties",
    "/favorites"
  ]
};