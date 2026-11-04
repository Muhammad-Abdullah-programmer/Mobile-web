export default function PhoneCard({ phone }) {
  const { name, brand, price, chip, ram, storage, camera, battery, color } = phone;
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${color}`}>
        <div className="h-28 w-14 rounded-xl border-4 border-white/80 bg-black/30" />
      </div>
      <div className="space-y-2 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{brand}</p>
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm text-slate-500">{chip} · {ram}GB / {storage}GB</p>
        <p className="text-sm text-slate-500">{camera} · {battery} mAh</p>
        <p className="pt-1 text-xl font-bold">${price}</p>
      </div>
    </article>
  );
}
