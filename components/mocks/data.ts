/**
 * Sample data for the product mockups. Names, plates and figures are
 * illustrative; the structure mirrors the Fleet app's settlement engine
 * (gross = Uber + Bolt, net = gross - rent - fuel - Via Verde - WiFi).
 */

export type SettlementStatus = "paid" | "approved" | "awaiting" | "calculated";

export type SettlementRow = {
  name: string;
  initials: string;
  plate: string;
  uber: number;
  bolt: number;
  rent: number;
  rentModel: "fixed" | "share";
  fuel: number;
  viaVerde: number;
  wifi: number;
  status: SettlementStatus;
};

export const SETTLEMENTS: SettlementRow[] = [
  { name: "Ricardo Almeida", initials: "RA", plate: "AT-21-PF", uber: 812.4, bolt: 431.1, rent: 300, rentModel: "fixed", fuel: 86.2, viaVerde: 24.35, wifi: 5, status: "paid" },
  { name: "Ana Ferreira", initials: "AF", plate: "BX-47-RN", uber: 640, bolt: 512.8, rent: 300, rentModel: "fixed", fuel: 112.4, viaVerde: 18.9, wifi: 5, status: "approved" },
  { name: "Tiago Moreira", initials: "TM", plate: "BL-08-QS", uber: 905.25, bolt: 220, rent: 337.58, rentModel: "share", fuel: 64, viaVerde: 31.2, wifi: 5, status: "awaiting" },
  { name: "Inês Carvalho", initials: "IC", plate: "AV-63-JD", uber: 455.6, bolt: 498.9, rent: 250, rentModel: "fixed", fuel: 71.85, viaVerde: 12.4, wifi: 5, status: "calculated" },
  { name: "Bruno Sousa", initials: "BS", plate: "BR-12-TC", uber: 1020, bolt: 0, rent: 300, rentModel: "fixed", fuel: 94.1, viaVerde: 27.6, wifi: 5, status: "calculated" },
  { name: "Marta Lopes", initials: "ML", plate: "AZ-90-KE", uber: 388.2, bolt: 402.75, rent: 250, rentModel: "fixed", fuel: 58.3, viaVerde: 9.8, wifi: 5, status: "awaiting" },
];

export const gross = (r: SettlementRow) => r.uber + r.bolt;
export const deductions = (r: SettlementRow) => r.rent + r.fuel + r.viaVerde + r.wifi;
export const net = (r: SettlementRow) => gross(r) - deductions(r);

/** Week-level totals shown in the pipeline summary (24 drivers). */
export const WEEK = {
  drivers: 24,
  gross: 25806.4,
  deductions: 9284.15,
  get net() {
    return this.gross - this.deductions;
  },
  get average() {
    return this.net / this.drivers;
  },
};

/** "€1 243,50": pt-PT grouping with a space, as the Fleet app's fmt() renders money. */
export function eur(value: number, opts: { sign?: boolean; decimals?: number } = {}) {
  const decimals = opts.decimals ?? 2;
  const abs = Math.abs(value);
  const [int, dec] = abs.toFixed(decimals).split(".");
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const sign = value < 0 ? "-" : opts.sign ? "+" : "";
  return `${sign}€${grouped}${dec ? `,${dec}` : ""}`;
}
