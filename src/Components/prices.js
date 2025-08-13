"use client";

import React, { useMemo, useState } from "react";

// ✅ Drop this file anywhere in a Next.js (App Router) project, e.g. app/solar-panels/page.tsx
// TailwindCSS required. No external UI libs needed.
// Data compiled from reputable Pakistani retailers/aggregators on 13 Aug 2025.
// Update the rows in `PANEL_DATA` whenever prices change.

export type PanelRow = {
  brand: string;
  model: string;
  watt: number; // e.g., 550
  type: string; // Mono, Mono PERC, N-Type, Bifacial, etc.
  grade: "A" | "B" | "A+";
  pkrPerWatt: number; // price per watt in PKR
  panelPrice: number; // computed convenience field
  origin?: string; // CN / VN / MY etc. (optional)
  source: string; // human-readable source label (optional to display)
  updated: string; // YYYY-MM-DD
};

const asPrice = (val: number) =>
  new Intl.NumberFormat("en-PK", { style: "currency", currency: "PKR", maximumFractionDigits: 0 }).format(val);

// 🔎 Seed dataset — A‑Grade panels commonly available in Pakistan (13 Aug 2025)
// Sources (for your reference):
// - Alpha Solar master list: https://alphasolar.com.pk/solar-panel-price-in-pakistan/
// - ICONS daily rates (Grade‑A table): https://www.icons.com.pk/solar-panel-prices
// - PowerHouse Express listings: https://powerhouseexpress.com.pk/collections/solar-panels
// - W11Stop Jinko 560W: https://w11stop.com/jinko-550w-solar-panel

const PANEL_DATA: PanelRow[] = [
  {
    brand: "Jinko",
    model: "Tiger Neo 550W (Single Glass)",
    watt: 550,
    type: "Mono PERC",
    grade: "A",
    pkrPerWatt: 29,
    panelPrice: 29 * 550,
    origin: "CN",
    source: "ICONS (12–Aug–2025)",
    updated: "2025-08-12",
  },
  {
    brand: "JA Solar",
    model: "540W (Single Glass)",
    watt: 540,
    type: "Mono PERC",
    grade: "A",
    pkrPerWatt: 29,
    panelPrice: 29 * 540,
    origin: "CN",
    source: "ICONS (12–Aug–2025)",
    updated: "2025-08-12",
  },
  {
    brand: "JA Solar",
    model: "540W (Bifacial / Double Glass)",
    watt: 540,
    type: "Bifacial N-Type",
    grade: "A",
    pkrPerWatt: 31,
    panelPrice: 31 * 540,
    origin: "CN",
    source: "ICONS (12–Aug–2025)",
    updated: "2025-08-12",
  },
  {
    brand: "LONGi",
    model: "Hi-MO X6 / 585W–590W (Monofacial)",
    watt: 590,
    type: "Mono PERC",
    grade: "A",
    pkrPerWatt: 31, // page snippet shows ~18,290 for 590W => ~31 PKR/W
    panelPrice: 18290,
    origin: "CN",
    source: "Alpha Solar (Jul–Aug 2025)",
    updated: "2025-08-01",
  },
  {
    brand: "LONGi",
    model: "Hi‑MO 7 580W (Double Glass, N‑Type)",
    watt: 580,
    type: "Bifacial N-Type",
    grade: "A",
    pkrPerWatt: 28,
    panelPrice: 15200,
    origin: "CN",
    source: "ICONS (12–Aug–2025)",
    updated: "2025-08-12",
  },
  {
    brand: "Jinko",
    model: "N‑Type 580W (A‑grade)",
    watt: 580,
    type: "N‑Type Mono",
    grade: "A",
    pkrPerWatt: 32,
    panelPrice: 32 * 580,
    origin: "CN",
    source: "ICONS (12–Aug–2025)",
    updated: "2025-08-12",
  },
  {
    brand: "Jinko",
    model: "560W Mono PERC",
    watt: 560,
    type: "Mono PERC",
    grade: "A",
    pkrPerWatt: Math.round(16120 / 560), // ≈ 29
    panelPrice: 16120,
    origin: "CN",
    source: "W11Stop (13–Aug–2025)",
    updated: "2025-08-13",
  },
  {
    brand: "LONGi",
    model: "550W Mono PERC (Hi‑MO 6)",
    watt: 550,
    type: "Mono PERC",
    grade: "A",
    pkrPerWatt: 38, // use conservative upper bound for retail listings
    panelPrice: 38 * 550,
    origin: "CN",
    source: "PowerHouse Express (11–Aug–2025)",
    updated: "2025-08-11",
  },
];

const WATT_BUCKETS = [
  { label: "All wattages", from: 0, to: Infinity },
  { label: "≤ 540W", from: 0, to: 540 },
  { label: "541–580W", from: 541, to: 580 },
  { label: "581–600W", from: 581, to: 600 },
  { label: "> 600W", from: 601, to: Infinity },
];

type SortKey = "brand" | "watt" | "pkrPerWatt" | "panelPrice" | "updated";

type SortState = { key: SortKey; dir: "asc" | "desc" };

function useFilteredRows(rows: PanelRow[], q: string, brand: string, bucketIdx: number) {
  return useMemo(() => {
    const bucket = WATT_BUCKETS[bucketIdx] ?? WATT_BUCKETS[0];
    return rows.filter((r) => {
      const matchesQ = q
        ? [r.brand, r.model, r.type, r.grade].join(" ").toLowerCase().includes(q.toLowerCase())
        : true;
      const matchesBrand = brand === "All brands" || r.brand === brand;
      const matchesWatt = r.watt >= bucket.from && r.watt <= bucket.to;
      return matchesQ && matchesBrand && matchesWatt;
    });
  }, [rows, q, brand, bucketIdx]);
}

export default function Page() {
  const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All brands");
  const [bucket, setBucket] = useState(0);
  const [sort, setSort] = useState<SortState>({ key: "panelPrice", dir: "asc" });

  const brands = useMemo(
    () => ["All brands", ...Array.from(new Set(PANEL_DATA.map((r) => r.brand)))],
    []
  );

  const rows = useFilteredRows(PANEL_DATA, query, brand, bucket);

  const sorted = useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => {
      const dir = sort.dir === "asc" ? 1 : -1;
      const ka = a[sort.key];
      const kb = b[sort.key];
      if (typeof ka === "number" && typeof kb === "number") return (ka - kb) * dir;
      return String(ka).localeCompare(String(kb)) * dir;
    });
    return copy;
  }, [rows, sort]);

  const lastUpdated = useMemo(() => {
    return PANEL_DATA.reduce((acc, r) => (r.updated > acc ? r.updated : acc), "");
  }, []);

  const onSort = (key: SortKey) =>
    setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));

  const header = (label: string, key: SortKey) => (
    <button
      onClick={() => onSort(key)}
      className="inline-flex items-center gap-1 hover:underline"
      title={`Sort by ${label}`}
    >
      <span>{label}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className={`h-4 w-4 ${sort.key === key ? "opacity-100" : "opacity-30"}`}
      >
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
      </svg>
    </button>
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">A‑Grade Solar Panel Prices in Pakistan</h1>
          <p className="text-gray-600 mt-1">Fully documented modules from top brands (Jinko, LONGi, JA Solar, Canadian, etc.). Updated <span className="font-semibold">{lastUpdated}</span>. Prices are retail estimates; bulk/installer pricing may vary.</p>
        </div>

        {/* Controls */}
        <div className="grid gap-3 sm:grid-cols-3 mb-4">
          <label className="flex items-center gap-2 bg-white rounded-2xl shadow-sm border p-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search brand/model/type…"
              className="w-full outline-none text-sm bg-transparent"
            />
          </label>

          <label className="bg-white rounded-2xl shadow-sm border p-2">
            <select
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full bg-transparent text-sm outline-none"
            >
              {brands.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </label>

          <label className="bg-white rounded-2xl shadow-sm border p-2">
            <select
              value={bucket}
              onChange={(e) => setBucket(parseInt(e.target.value))}
              className="w-full bg-transparent text-sm outline-none"
            >
              {WATT_BUCKETS.map((b, i) => (
                <option key={b.label} value={i}>
                  {b.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl shadow-sm border bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-700">
              <tr className="text-left">
                <th className="px-4 py-3">{header("Brand", "brand")}</th>
                <th className="px-4 py-3">Model</th>
                <th className="px-4 py-3">{header("Watt", "watt")}</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Grade</th>
                <th className="px-4 py-3">{header("PKR/W", "pkrPerWatt")}</th>
                <th className="px-4 py-3">{header("Panel Price", "panelPrice")}</th>
                <th className="px-4 py-3">Source</th>
                <th className="px-4 py-3">{header("Updated", "updated")}</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((r, idx) => (
                <tr key={`${r.brand}-${r.model}-${idx}`} className="border-t">
                  <td className="px-4 py-3 font-medium text-gray-900">{r.brand}</td>
                  <td className="px-4 py-3 text-gray-800">{r.model}</td>
                  <td className="px-4 py-3">{r.watt}W</td>
                  <td className="px-4 py-3">{r.type}</td>
                  <td className="px-4 py-3">{r.grade}</td>
                  <td className="px-4 py-3">{r.pkrPerWatt}</td>
                  <td className="px-4 py-3 font-semibold">{asPrice(r.panelPrice)}</td>
                  <td className="px-4 py-3 text-gray-600">{r.source}</td>
                  <td className="px-4 py-3 text-gray-600">{r.updated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 text-xs text-gray-500 space-y-1">
          <p>
            Notes: Market prices vary by city and stock. A‑grade documented panels generally include serial‑number tracking and warranty. Installation, mounting, and BOS (inverters, structure, DC cable) are not included in the panel price.
          </p>
          <p>
            Tip: For commercial orders, negotiate per‑watt rates (e.g., PKR 27–33/W for 540–580W A‑grade as of Aug 2025). Retail shops may quote higher.
          </p>
        </div>
      </section>
    </main>
  );
}
