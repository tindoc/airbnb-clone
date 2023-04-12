'use client';

import { Toaster } from "react-hot-toast";

// why 需要一个 provider 而不是直接使用？因为 layout.tsx 不是 use client，直接使用会提示 warning（主要是因为 Toaster 使用了 useEffect 函数）
const ToasterProvider = () => {
  return ( 
    <Toaster />
   );
}
 
export default ToasterProvider;