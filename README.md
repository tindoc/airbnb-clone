## Ref
- https://www.bilibili.com/video/BV1ZV4y1S7zB/
- https://github.com/AntonioErdeljac/next13-airbnb-clone

## 目录
- app
  - actions
  - `api` server 端接口，参考 [Next.js 13 beta Router Handler](https://beta.nextjs.org/docs/routing/route-handlers)

    不要使用 export default
  - components 组件（client）
  - hooks 自定义 Hooks（client）
  - libs 全局变量（server）
  - providers 组件包装类（client）
  - types 类型定义（client）
    
    用于将 server 的类转成 client 的类，client 只能用 string, number 基础类型，不能使用 Date 类型
  - `[文件夹]/page.tsx` client 页面，如果涉及到页面有关的 page，则会在这里添加 `xxxClient.tsx` 的页面文件
- pages 页面 

  @todo 貌似这个页面是偏向于接口的那种，因为 `app/listings/[listingId]/page.tsx` 也是页面
- public 静态资源

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
- react-date-range 和 `@types/react-date-range -D` 日期处理

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