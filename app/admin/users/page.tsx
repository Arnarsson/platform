import { requireRole } from "@/lib/auth/roles";
import Card from "@/components/ui/card";

export default async function AdminUsers() {
  await requireRole("admin");
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Users</h1>
      <Card>
        <p>Placeholder for admin user table.</p>
      </Card>
    </div>
  );
}

