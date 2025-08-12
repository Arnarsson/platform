import { requireSignedIn, getUserRole } from "@/lib/auth/roles";
import Link from "next/link";
import Card from "@/components/ui/card";

export default async function QuickAccess() {
  await requireSignedIn();
  const role = await getUserRole();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin Quick Access</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        {role !== "admin"
          ? "You are not an admin. Set your Clerk public metadata to { role: 'admin' } and refresh."
          : "You are an admin. Navigate below."}
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <Link href="/admin/dashboard" className="hover:underline">Admin Dashboard</Link>
        </Card>
        <Card>
          <Link href="/admin/users" className="hover:underline">Users</Link>
        </Card>
        <Card>
          <Link href="/admin/content" className="hover:underline">Content</Link>
        </Card>
        <Card>
          <Link href="/admin/courses" className="hover:underline">Courses</Link>
        </Card>
      </div>
    </div>
  );
}

