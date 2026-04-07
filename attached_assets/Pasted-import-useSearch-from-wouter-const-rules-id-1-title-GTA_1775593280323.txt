import { useSearch } from "wouter";

const rules = [
  { id: 1, title: "GTA Driving", description: "Players must drive realistically at all times. No ramming, reckless driving, or using vehicles as weapons unless in a valid roleplay scenario. Traffic laws must be followed unless you are actively evading police with a valid reason." },
  { id: 2, title: "FRP", description: "Fail Roleplay (FRP) occurs when a player acts in a way that does not make sense for their character or the situation. You must always act in a realistic manner consistent with your roleplay scenario and the server setting." },
  { id: 3, title: "NITRP", description: "No Intent to Roleplay (NITRP) refers to joining the server with no intention of participating in genuine roleplay. Trolling, minging, or deliberately ruining others' experience will result in removal from the server." },
  { id: 4, title: "A fourth item", description: "Description for rule four. Fill this in with the actual rule content." },
  { id: 5, title: "And a fifth one", description: "Description for rule five. Fill this in with the actual rule content." },
];

export default function Rulebook() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const ruleParam = params.get("rule");
  const activeRule = ruleParam ? rules.find((r) => r.id === Number(ruleParam)) : null;

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

        {activeRule ? (
          <div>
            <a href="/rulebook" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm mb-6 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
              Back to Rulebook
            </a>
            <div className="rounded-xl border border-purple-700/50 bg-[#0d0d22] p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-purple-900/50 border border-purple-700/50 text-purple-400 font-bold text-lg shrink-0">{activeRule.id}</div>
                <h3 className="text-2xl font-bold text-white">{activeRule.title}</h3>
              </div>
              <div className="h-px bg-purple-900/40 mb-6" />
              <p className="text-gray-300 leading-relaxed text-base">{activeRule.description}</p>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            {rules.map((rule) => (
              <a key={rule.id} href={`/rulebook?rule=${rule.id}`} className="flex items-center gap-5 px-5 py-4 rounded-lg border border-purple-900/30 bg-[#0d0d22] hover:bg-[#13132e] hover:border-purple-700/50 transition-all duration-200 group">
                <div className="flex items-center justify-center w-9 h-9 rounded-md bg-purple-900/40 border border-purple-700/40 text-purple-400 font-bold text-sm shrink-0 group-hover:bg-purple-800/50 transition-colors">{rule.id}</div>
                <span className="text-gray-200 font-medium tracking-wide flex-1">{rule.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-purple-600 group-hover:text-purple-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
              </a>
            ))}
          </div>
        )}

        <div className="mt-8 flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-purple-700/40" />
          <div className="w-2 h-2 rotate-45 bg-purple-500/50" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-purple-700/40" />
        </div>
      </div>
    </div>
  );
}