import Card from "@/components/ui/card";

export default function Pricing() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Pricing</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <h3 className="font-semibold">Starter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Free forever</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Pro</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">Best for learners</p>
        </Card>
        <Card>
          <h3 className="font-semibold">Team</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">For classrooms</p>
        </Card>
      </div>
    </div>
  );
}

