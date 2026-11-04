import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import { phones, brands } from "../data";

const sorts = {
  "price-asc": ["Price: low to high", (a, b) => a.price - b.price],
  "price-desc": ["Price: high to low", (a, b) => b.price - a.price],
  battery: ["Battery", (a, b) => b.battery - a.battery],
};

export default function Phones() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("price-asc");
  const brand = params.get("brand") || "All";

  const list = phones
    .filter((p) => (brand === "All" || p.brand === brand) && p.name.toLowerCase().includes(query.toLowerCase()))
    .sort(sorts[sort][1]);

  const field = "rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-400";

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Phones</h1>

      <div className="flex flex-col gap-3 sm:flex-row">
        <input className={`${field} flex-1`} placeholder="Search phones…" value={query} onChange={(e) => setQuery(e.target.value)} />
        <select className={field} value={sort} onChange={(e) => setSort(e.target.value)}>
          {Object.entries(sorts).map(([k, [label]]) => <option key={k} value={k}>{label}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", ...brands].map((b) => (
          <button
            key={b}
            onClick={() => setParams(b === "All" ? {} : { brand: b })}
            className={`rounded-full px-4 py-1.5 text-sm font-medium ${brand === b ? "bg-indigo-600 text-white" : "bg-white text-slate-600 hover:bg-indigo-50"}`}
          >
            {b}
          </button>
        ))}
      </div>

      {list.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <PhoneCard key={p.id} phone={p} />)}
        </div>
      ) : (
        <p className="py-16 text-center text-slate-500">No phones match your search.</p>
      )}
    </div>
  );
}
