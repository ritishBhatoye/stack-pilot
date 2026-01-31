"use client";

import { useState } from "react";
import { Button, Card } from "@repo/ui";
import { generateAppAction } from "@/app/actions/generate";

export default function GeneratePage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const config = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      features: (formData.get("features") as string).split(",").map((f) => f.trim()),
      techStack: {
        frontend: (formData.get("frontend") as string).split(",").map((f) => f.trim()),
        backend: (formData.get("backend") as string).split(",").map((f) => f.trim()),
        mobile: (formData.get("mobile") as string).split(",").map((f) => f.trim()),
      },
    };

    try {
      const response = await generateAppAction(config);
      setResult(JSON.stringify(response, null, 2));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate app");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert("Copied to clipboard!");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Generate Your App</h1>

        <Card className="mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                App Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="My Awesome App"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="A modern app that does amazing things"
              />
            </div>

            <div>
              <label htmlFor="features" className="block text-sm font-medium text-gray-700 mb-2">
                Features (comma-separated)
              </label>
              <input
                type="text"
                id="features"
                name="features"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Authentication, Payments, Notifications"
              />
            </div>

            <div>
              <label htmlFor="frontend" className="block text-sm font-medium text-gray-700 mb-2">
                Frontend Tech (comma-separated)
              </label>
              <input
                type="text"
                id="frontend"
                name="frontend"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Next.js, React, Tailwind CSS"
              />
            </div>

            <div>
              <label htmlFor="backend" className="block text-sm font-medium text-gray-700 mb-2">
                Backend Tech (comma-separated)
              </label>
              <input
                type="text"
                id="backend"
                name="backend"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Next.js API Routes, Prisma"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-2">
                Mobile Tech (comma-separated)
              </label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Expo, React Native, NativeWind"
              />
            </div>

            <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full">
              {loading ? "Generating..." : "Generate App"}
            </Button>
          </form>
        </Card>

        {error && (
          <Card className="mb-8 border-red-500">
            <div className="text-red-600">
              <strong>Error:</strong> {error}
            </div>
          </Card>
        )}

        {result && (
          <Card>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Generated Output</h2>
              <Button onClick={copyToClipboard} variant="secondary" size="sm">
                Copy to Clipboard
              </Button>
            </div>
            <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
              {result}
            </pre>
          </Card>
        )}
      </div>
    </main>
  );
}
