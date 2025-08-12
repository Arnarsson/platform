import { requireAnyRole, getUserRole } from "@/lib/auth/roles";

export default async function TeachDashboard() {
  await requireAnyRole(["teacher", "admin"]);
  const role = await getUserRole();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Teacher Dashboard</h1>
      <p>Your role: {String(role)}</p>
    </div>
  );
}
