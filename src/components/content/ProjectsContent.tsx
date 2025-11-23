export const ProjectsContent = () => (
  <div className="font-sans text-black">
    <h2 className="text-xl font-bold mb-4 underline">projects</h2>
    <ul className="space-y-4">
      <li className="pb-4 border-b border-gray-300">
        <a href="https://maxly.chat" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
          maxly.chat
        </a>
        <p className="text-sm mt-1">
          16k likes and 2M+ views on X, received DMs from OpenAI, Thinking Machines, and xAI.
          Canvas-style LLM chat interface allowing for branching queries, 4k+ on waitlist
        </p>
      </li>
      <li className="pb-4 border-b border-gray-300">
        <div className="flex gap-2">
          <a href="https://essayswap.org" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
            essayswap.org
          </a>
          <span>/</span>
          <a href="https://resume.reviews" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
            resume.reviews
          </a>
        </div>
        <p className="text-sm mt-1">
          Peer-to-peer essay/resume review platform created as 17 y/o. Next.js, Stripe, Firebase.
          1000+ essays/resumes, 800+ users. Real-time chat system.
        </p>
      </li>
      <li className="pb-4 border-b border-gray-300">
        <a href="https://hackertype.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
          hackertype
        </a>
        <p className="text-sm mt-1">
          Coding typing test created as 15 y/o. 4k+ users, 30k+ submissions. React, Firebase, auth, live leaderboard.
        </p>
      </li>
      <li className="pb-4">
        <a href="https://sleepscore.app" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
          sleepscore
        </a>
        <p className="text-sm mt-1">
          SwiftUI mobile app with HealthKit integration created as 16 y/o. Realtime leaderboard for sleep habits.
        </p>
      </li>
    </ul>
  </div>
);
