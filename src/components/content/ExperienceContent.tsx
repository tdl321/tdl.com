export const ExperienceContent = () => (
  <div className="font-sans text-black">
    <h2 className="text-xl font-bold mb-4 underline">experience</h2>
    <ul className="space-y-4">
      <li className="pb-4 border-b border-gray-300">
        <div className="flex justify-between items-start">
          <a href="https://build.ai" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
            build.ai
          </a>
          <span className="text-sm font-bold">(2025)</span>
        </div>
        <p className="text-sm mt-1">
          Backed by Abstract Ventures, Pear VC, hf0, zfellows, Alex Botez and other great partners.
          Helped solve robotics as founding eng
        </p>
      </li>

      <li className="pb-4 border-b border-gray-300">
        <div className="flex justify-between items-start">
          <a href="https://findecs.org" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
            findecs.org
          </a>
          <span className="text-sm font-bold">(2023-2024)</span>
        </div>
        <p className="text-sm mt-1">
          Sold an edtech startup with 178k users in 3 months. Turned $180 → 5m+ views using
          Node + Puppeteer Instagram web scraping.
        </p>
      </li>

      <li className="pb-4">
        <div className="flex justify-between items-start">
          <a href="https://interaction.co" target="_blank" rel="noopener noreferrer" className="text-lg font-bold retro-link">
            interaction.co
          </a>
          <span className="text-sm font-bold">(2025)</span>
        </div>
        <p className="text-sm mt-1">
          Engineered VC backed AI email client (poke) integrating iMessage → Google Workspace functions.
          Learned to make good UI :)
        </p>
      </li>
    </ul>
  </div>
);
