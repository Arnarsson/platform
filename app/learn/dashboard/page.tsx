import { requireSignedIn } from "@/lib/auth/roles";

export default async function LearnDashboard() {
  await requireSignedIn();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Learner Dashboard</h1>
      <p>Welcome back! Continue your courses.</p>
    </div>
  );
}

