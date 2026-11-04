export const brands = ["Apple", "Samsung", "Google", "Xiaomi", "OnePlus", "Nothing"];

export const phones = [
  { id: 1, name: "iPhone 17 Pro", brand: "Apple", price: 1099, os: "iOS 26", chip: "A19 Pro", ram: 12, storage: 256, display: '6.3" OLED 120Hz', camera: "48MP triple", battery: 4200, color: "from-slate-700 to-slate-900" },
  { id: 2, name: "iPhone 17", brand: "Apple", price: 799, os: "iOS 26", chip: "A19", ram: 8, storage: 256, display: '6.1" OLED 120Hz', camera: "48MP dual", battery: 3900, color: "from-sky-400 to-blue-600" },
  { id: 3, name: "Galaxy S26 Ultra", brand: "Samsung", price: 1299, os: "Android 16", chip: "Snapdragon 8 Elite", ram: 12, storage: 256, display: '6.9" AMOLED 120Hz', camera: "200MP quad", battery: 5000, color: "from-indigo-500 to-purple-700" },
  { id: 4, name: "Galaxy S26", brand: "Samsung", price: 799, os: "Android 16", chip: "Exynos 2600", ram: 12, storage: 128, display: '6.2" AMOLED 120Hz', camera: "50MP triple", battery: 4300, color: "from-emerald-400 to-teal-600" },
  { id: 5, name: "Pixel 11 Pro", brand: "Google", price: 999, os: "Android 16", chip: "Tensor G6", ram: 16, storage: 256, display: '6.3" LTPO OLED', camera: "50MP triple", battery: 4700, color: "from-rose-400 to-orange-500" },
  { id: 6, name: "Pixel 11a", brand: "Google", price: 499, os: "Android 16", chip: "Tensor G6", ram: 8, storage: 128, display: '6.1" OLED 90Hz', camera: "64MP dual", battery: 4400, color: "from-lime-400 to-green-600" },
  { id: 7, name: "Xiaomi 16 Pro", brand: "Xiaomi", price: 899, os: "HyperOS 3", chip: "Snapdragon 8 Elite", ram: 16, storage: 512, display: '6.7" AMOLED 120Hz', camera: "50MP Leica triple", battery: 6000, color: "from-orange-400 to-red-600" },
  { id: 8, name: "OnePlus 15", brand: "OnePlus", price: 799, os: "OxygenOS 16", chip: "Snapdragon 8 Elite", ram: 12, storage: 256, display: '6.8" AMOLED 165Hz', camera: "50MP triple", battery: 7300, color: "from-red-500 to-rose-700" },
  { id: 9, name: "Nothing Phone (4)", brand: "Nothing", price: 599, os: "Nothing OS 4", chip: "Snapdragon 8s", ram: 12, storage: 256, display: '6.7" AMOLED 120Hz', camera: "50MP dual", battery: 5200, color: "from-zinc-300 to-zinc-500" },
];

export const specRows = [
  ["Price", (p) => `$${p.price}`],
  ["OS", (p) => p.os],
  ["Chip", (p) => p.chip],
  ["RAM", (p) => `${p.ram} GB`],
  ["Storage", (p) => `${p.storage} GB`],
  ["Display", (p) => p.display],
  ["Camera", (p) => p.camera],
  ["Battery", (p) => `${p.battery} mAh`],
];
