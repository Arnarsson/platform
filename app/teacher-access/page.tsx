import { requireAnyRole } from "@/lib/auth/roles";

export default async function TeacherAccess() {
  await requireAnyRole(["teacher", "admin"]);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Teacher Access</h1>
      <p>Restricted content for teachers.</p>
    </div>
  );
}
