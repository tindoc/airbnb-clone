import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
  reservationId?: string;
}

export async function DELETE(
  request: Request, 
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { reservationId } = params;

  if (!reservationId || typeof reservationId !== 'string') {
    throw new Error('Invalid ID');
  }

  const reservation = await prisma.reservation.deleteMany({
    where: {
      id: reservationId,
      OR: [ // 下面的条件为 或 关系，id 和 OR 的关系为 与，
            // 即 where id='reservationId' and (userId='currentUser.id' or listingId in (select * from Listing where userId='currentUser.Id'))
        { userId: currentUser.id }, // 这个条件是保证：用户只能删除自己创建的 reservation
        { listing: { userId: currentUser.id } } // 这个条件是保证：listing 主人可以删除任意人的 reservation
      ]
    }
  });

  return NextResponse.json(reservation);
}