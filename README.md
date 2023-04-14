## Ref
- https://www.bilibili.com/video/BV1ZV4y1S7zB/
- https://github.com/AntonioErdeljac/next13-airbnb-clone

## 目录
- actions
- api Next.js 13 beta Router Handler
- components 组件
- hooks 自定义 Hooks
- libs 全局变量
- providers 组件包装类（用于 client）
- type 类型定义
- pages 页面

## vscode extensions
- Tailwind CSS IntelliSense
- Simple React Snippets

  在使用上比 *ES7+ React/Redux/React-Native snippets* 方便，直接输入即可，无需通过 VSCode Runner 来调用
- ESLint
- `Code Spell Checker` 检查 CSS
- `Prettier - Code formatter`
- Prisma
  
  使用：
  - `npx prisma init` 会生成 *prisma/* 目录
  - `npx prisma db push`

## npm package
- axios 网络请求
- `prisma -D` 用来初始化 MongoDB 的 collections

- next-cloudinary 云存储


- `zustand` React 状态管理
- query-string 路由 param 参数设置

- react-icons 图标库
- react-hot-toast 提示框
- date-fns 日期处理

- react-hook-form 表单处理
- `react-select` Input type=select

- auth 有关
  - next-auth
  - @next-auth/prisma-adapter
  - @prisma/client
  - bcrypt 和 `@types/bcrypt -D`

- 地理位置有关
  - world-countries 国家库
  - leaflet/react-leaflet 和 `-D @types/leaflet` 地图包

    [https://react-leaflet.js.org/](https://react-leaflet.js.org/)

    [高德](https://uiwjs.github.io/react-amap/) & [百度](https://uiwjs.github.io/react-baidu-map/)