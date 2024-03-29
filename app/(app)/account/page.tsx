import SignOutBtn from "@/components/auth/SignOutBtn";
import UserSettings from "./UserSettings";
import { checkAuth, getUserAuth } from "@/lib/auth/utils";

export default async function Account() {
  await checkAuth();
  const { session } = await getUserAuth();

  return (
    <main>
      <h1 className="text-2xl font-semibold my-4">Account</h1>
      <div className="space-y-4">
        <UserSettings session={session} />
        <main className="">
          <pre className="bg-secondary p-4 rounded-lg my-2">
            {JSON.stringify(session, null, 2)}
          </pre>
          <SignOutBtn />
        </main>
      </div>
    </main>
  );
}
