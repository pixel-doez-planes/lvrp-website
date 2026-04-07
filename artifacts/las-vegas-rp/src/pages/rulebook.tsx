export default function Rulebook() {
  const rules = [
    { id: 1, title: "GTA Driving" },
    { id: 2, title: "FRP" },
    { id: 3, title: "NITRP" },
    { id: 4, title: "A fourth item" },
    { id: 5, title: "And a fifth one" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] py-12 px-6">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-xs font-semibold mb-2">Official</p>
          <h1 className="text-4xl font-bold text-white tracking-wide mb-3">VegasRP</h1>
          <h2 className="text-lg text-gray-400 font-light tracking-widest uppercase">In-Game Rulebook</h2>
          <div className="mt-5 flex items-center justify-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-700/60" />
            <div className="w-2 h-2 rotate-45 bg-purple-500" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700/60" />
          </div>
        </div>

        <div className="space-y-2">
          {rules.map((rule) => (
            <div
              key={rule.id}
              className="flex items-center gap-5 px-5 py-4 rounded-lg border border-purple-900/30 bg-[#0d0d22] hover:bg-[#13132e] hover:border-purple-700/50 transition-all duration-200 group"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-md bg-purple-900/40 border border-purple-700/40 text-purple-400 font-bold text-sm shrink-0 group-hover:bg-purple-800/50 transition-colors">
                {rule.id}
              </div>
              <span className="text-gray-200 font-medium tracking-wide">{rule.title}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-700/40" />
          <div className="w-2 h-2 rotate-45 bg-purple-500/50" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700/40" />
        </div>

      </div>
    </div>
  );
}
