import { requireSignedIn } from "@/lib/auth/roles";
import { currentUser } from "@clerk/nextjs";

export default async function ProfilePage() {
  await requireSignedIn();
  const user = await currentUser();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Profile</h1>
      <pre className="text-sm whitespace-pre-wrap rounded border p-4 bg-gray-50 dark:bg-gray-900 dark:border-gray-800">
        {JSON.stringify({ id: user?.id, email: user?.emailAddresses?.[0]?.emailAddress, role: user?.publicMetadata?.role }, null, 2)}
      </pre>
    </div>
  );
}

