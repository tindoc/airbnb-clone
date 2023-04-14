import { Listing, Reservation, User } from '@prisma/client';

// 主要为了解决：Only plain objects can be passed to Client Components from Server Components. Date objects are not supported.

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string,
  updatedAt: string,
  emailVerified: string | null;
}

export type SafeListing = Omit<
  Listing,
  "createdAt"
> & {
 createdAt: string;
}