"use client";

import { SafeListing, SafeUser } from "@/app/types";
import Heading from "@/app/components/Heading";
import Container from "@/app/components/Container";
import ListingCard from "@/app/components/listings/ListingCard";

interface Props {
  listings: SafeListing[],
  currentUser: SafeUser,
}

// 和主页 page.tsx 类似
const FavoritesClient: React.FC<Props> = ({
  listings,
  currentUser
}) => {
  return (
    <Container>
      <Heading 
        title="Favorites" 
        subtitle="List of places you have favorited!" 
      />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((l: any) => (
          <ListingCard
            currentUser={currentUser}
            key={l.id}
            data={l}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default FavoritesClient;