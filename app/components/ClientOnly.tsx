'use client';

import {useEffect, useState} from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

// todo Next.js 应该是解决了，没有重现问题，所以不使用该 comp
const ClientOnly: React.FC<ClientOnlyProps> = ({
  children
}) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      {children}
    </>
  )
}

export default ClientOnly;