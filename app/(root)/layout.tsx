import { auth } from "@/auth";
import Header from "@/components/header";
import { redirect } from "next/navigation";

interface RootProps {
  children: React.ReactNode;
}

const Root = async ({ children }: RootProps) => {
  const session = await auth();
  if (!session) redirect("/sign-in");
  return (
    <main className="root-container">
      <div className="mx-auto max-w-7xl">
        <Header session={session} />
        <div className="mt-20 pb-20">{children}</div>
      </div>
    </main>
  );
};

export default Root;
