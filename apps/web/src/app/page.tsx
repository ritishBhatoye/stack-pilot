import Link from "next/link";
import { Button } from "@repo/ui";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Stack Pilot
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Generate production-ready Expo + Next.js applications with AI.
            Ship faster, build better.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/generate">
              <Button size="lg" variant="primary">
                Generate App
              </Button>
            </Link>
            <Link href="https://github.com" target="_blank">
              <Button size="lg" variant="outline">
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">⚡ Fast Setup</h3>
            <p className="text-gray-600">
              Get a fully configured monorepo in minutes, not hours.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">🎯 Production Ready</h3>
            <p className="text-gray-600">
              Built with best practices from top-tier teams.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-3">🤖 AI Powered</h3>
            <p className="text-gray-600">
              Leverage AI to generate complete application structures.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
