import bcrypt from 'bcrypt';

import prisma from "@/app/libs/prismadb";
import { NextResponse } from 'next/server';

// Next.js beta 特性：Route Handlers 
// 参考：https://beta.nextjs.org/docs/routing/route-handlers
export async function POST( // 大写！！！
  request: Request
) {
  const body = await request.json();
  const {
    email,
    name,
    password
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma?.user.create({
    data: {
      email,
      name,
      hashedPassword
    }
  })

  return NextResponse.json(user);
}