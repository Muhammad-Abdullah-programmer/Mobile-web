import { useState } from "react";
import { phones, specRows } from "../data";

function Picker({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 font-semibold outline-none focus:ring-2 focus:ring-indigo-400"
    >
      {phones.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
    </select>
  );
}

export default function Compare() {
  const [ids, setIds] = useState([1, 3]);
  const [a, b] = ids.map((id) => phones.find((p) => p.id === id));
  const setId = (i) => (v) => setIds((s) => s.map((x, j) => (j === i ? v : x)));

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Compare Phones</h1>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="grid grid-cols-[6rem_1fr_1fr] gap-3 border-b border-slate-100 p-4 sm:grid-cols-[8rem_1fr_1fr]">
          <span />
          <Picker value={a.id} onChange={setId(0)} />
          <Picker value={b.id} onChange={setId(1)} />
        </div>
        {specRows.map(([label, get]) => (
          <div key={label} className="grid grid-cols-[6rem_1fr_1fr] gap-3 px-4 py-3 text-sm odd:bg-slate-50 sm:grid-cols-[8rem_1fr_1fr]">
            <span className="font-medium text-slate-500">{label}</span>
            <span>{get(a)}</span>
            <span>{get(b)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
