import { requireSignedIn } from "@/lib/auth/roles";
import Card from "@/components/ui/card";

export default async function Courses() {
  await requireSignedIn();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Courses</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h3 className="font-semibold">Intro to Prompting</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">8 lessons • Beginner</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Responsible AI</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">5 lessons • Intermediate</p>
        </Card>
      </div>
    </div>
  );
}

