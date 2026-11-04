const tips = [
  ["🔋", "Battery", "Aim for 5000 mAh+ if you're a heavy user. Check charging speed too."],
  ["📷", "Camera", "Megapixels aren't everything. Sensor size and software matter more."],
  ["⚡", "Performance", "Flagship chips last longer; mid-range chips are fine for daily use."],
  ["🖥️", "Display", "OLED with 90–120Hz feels smooth and looks vivid."],
  ["💾", "Storage", "128GB is the minimum today. Choose 256GB if you shoot lots of video."],
  ["🔄", "Updates", "Look for 5+ years of OS and security updates."],
];

const glossary = [
  ["RAM", "Short-term memory. More RAM means smoother multitasking."],
  ["OLED / AMOLED", "Each pixel lights itself, giving deep blacks and rich colour."],
  ["Refresh rate (Hz)", "How many times the screen updates per second. Higher feels smoother."],
  ["mAh", "Battery capacity. Higher generally means longer life."],
  ["5G", "Latest mobile network generation with faster speeds and lower latency."],
  ["NFC", "Short-range wireless used for contactless payments and pairing."],
];

export default function Guide() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="mb-4 text-3xl font-bold">Buying Guide</h1>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map(([icon, title, text]) => (
            <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
              <p className="text-3xl">{icon}</p>
              <h3 className="mt-2 font-bold">{title}</h3>
              <p className="mt-1 text-sm text-slate-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Glossary</h2>
        <div className="divide-y divide-slate-100 overflow-hidden rounded-2xl bg-white shadow-sm">
          {glossary.map(([term, def]) => (
            <details key={term} className="group p-4">
              <summary className="cursor-pointer font-semibold marker:text-indigo-500">{term}</summary>
              <p className="mt-2 text-sm text-slate-500">{def}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
