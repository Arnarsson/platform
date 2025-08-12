import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export type Role = "admin" | "teacher" | "student";

export async function requireSignedIn() {
  const { userId } = auth();
  if (!userId) {
    console.log("[Guard] requireSignedIn: not signed in");
    return redirectToSignIn();
  }
}

export async function getUserRole(): Promise<Role | null> {
  try {
    const user = await currentUser();
    const role = (user?.publicMetadata?.role as Role | undefined) ?? null;
    console.log("[Guard] getUserRole", { role });
    return role;
  } catch (e) {
    console.warn("[Guard] getUserRole error", e);
    return null;
  }
}

export async function requireRole(role: Role) {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  const userRole = await getUserRole();
  if (userRole !== role) {
    console.log("[Guard] requireRole: forbidden", { required: role, got: userRole });
    return redirect("/profile");
  }
}

export async function requireAnyRole(roles: Role[]) {
  const { userId } = auth();
  if (!userId) return redirectToSignIn();
  const userRole = await getUserRole();
  if (!userRole || !roles.includes(userRole)) {
    console.log("[Guard] requireAnyRole: forbidden", { required: roles, got: userRole });
    return redirect("/profile");
  }
}
