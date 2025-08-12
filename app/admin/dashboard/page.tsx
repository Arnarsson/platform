import { requireRole } from "@/lib/auth/roles";

export default async function AdminDashboard() {
  await requireRole("admin");
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p>Overview of system metrics and quick actions.</p>
    </div>
  );
}

