import { requireAnyRole } from "@/lib/auth/roles";
import Card from "@/components/ui/card";

export default async function TeachUpload() {
  await requireAnyRole(["teacher", "admin"]);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Upload Lesson</h1>
      <Card>
        <p>Upload form placeholder.</p>
      </Card>
    </div>
  );
}
