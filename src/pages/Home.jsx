import { Link } from "react-router-dom";
import PhoneCard from "../components/PhoneCard";
import { phones, brands } from "../data";

const stats = [
  [phones.length, "Phones"],
  [brands.length, "Brands"],
  ["4", "Pages of info"],
];

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white sm:p-14">
        <h1 className="max-w-xl text-4xl font-extrabold sm:text-5xl">Find the right phone, without the noise.</h1>
        <p className="mt-4 max-w-lg text-indigo-100">Browse, compare and learn everything about mobile phones in one place.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/phones" className="rounded-full bg-white px-5 py-2.5 font-semibold text-indigo-700">Browse phones</Link>
          <Link to="/compare" className="rounded-full border border-white/50 px-5 py-2.5 font-semibold">Compare</Link>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-4 text-center">
        {stats.map(([n, label]) => (
          <div key={label} className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-3xl font-extrabold text-indigo-600">{n}</p>
            <p className="text-sm text-slate-500">{label}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Top brands</h2>
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <Link key={b} to={`/phones?brand=${b}`} className="rounded-full bg-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-50">{b}</Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Featured</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {phones.slice(0, 3).map((p) => <PhoneCard key={p.id} phone={p} />)}
        </div>
      </section>
    </div>
  );
}
