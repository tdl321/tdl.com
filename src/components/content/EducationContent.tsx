export const EducationContent = () => (
  <div className="font-sans text-black">
    <h2 className="text-xl font-bold mb-4 underline">education</h2>
    <div className="space-y-4">
      <div className="pb-4 border-b border-gray-300">
        <p className="text-lg font-bold">High School</p>
        <p className="text-sm mt-1">Currently 18 years old</p>
        <p className="text-sm mt-2">
          Started building projects at age 15 and haven't stopped since.
        </p>
      </div>

      <div className="pb-4">
        <p className="text-lg font-bold">Self-Taught Developer</p>
        <p className="text-sm mt-1">
          Learned through building real products with real users. From iOS apps to full-stack
          web applications, each project taught me something new.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm space-y-1">
          <li>Started with SwiftUI at 16</li>
          <li>Moved to React/Next.js at 17</li>
          <li>Founded and sold a startup with 178k users</li>
          <li>Now working on AI-powered products</li>
        </ul>
      </div>
    </div>
  </div>
);
