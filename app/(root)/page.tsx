import BookList from "@/components/book-list";
import BookOverview from "@/components/book-overview";
import { sampleBooks } from "@/constants";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";

const Home = async () => {
  // const result = await db.select().from(users);

  return (
    <>
      <BookOverview {...sampleBooks[0]} />
      <BookList title="latest Books" books={sampleBooks} className="mt-28" />
    </>
  );
};

export default Home;
