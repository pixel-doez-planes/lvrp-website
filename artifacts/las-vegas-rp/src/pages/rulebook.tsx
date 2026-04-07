export default function Rulebook() {
  return (
    <div className="min-h-screen bg-[#0a0a1a] py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-white mb-10 tracking-wide">
          VegasRP - In-Game Rulebook
        </h1>
        <div className="rounded-xl overflow-hidden border border-purple-900/50 shadow-lg shadow-purple-900/20">
          <ul className="divide-y divide-purple-900/40">
            <li className="px-6 py-4 text-gray-200 bg-[#11112a] hover:bg-[#1a1a3a] transition-colors duration-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              GTA Driving
            </li>
            <li className="px-6 py-4 text-gray-200 bg-[#0e0e24] hover:bg-[#1a1a3a] transition-colors duration-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              A second item
            </li>
            <li className="px-6 py-4 text-gray-200 bg-[#11112a] hover:bg-[#1a1a3a] transition-colors duration-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              A third item
            </li>
            <li className="px-6 py-4 text-gray-200 bg-[#0e0e24] hover:bg-[#1a1a3a] transition-colors duration-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              A fourth item
            </li>
            <li className="px-6 py-4 text-gray-200 bg-[#11112a] hover:bg-[#1a1a3a] transition-colors duration-200 flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0" />
              And a fifth one
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
