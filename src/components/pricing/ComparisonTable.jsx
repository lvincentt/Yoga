// src/components/yoga/pricing/ComparisonTable.jsx
import { comparisonFeatures, formatPrice, plans } from "./pricingData";

function Check() {
  return (
    <svg
      className="w-5 h-5 text-emerald-600 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
        d="M5 13l4 4L19 7"
      />
    </svg>
  );
}

function Cross() {
  return (
    <svg
      className="w-5 h-5 text-stone-300 mx-auto"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
}

export default function ComparisonTable() {
  const columns = [
    { key: "dropIn", plan: plans.find((p) => p.id === "drop-in") },
    { key: "pack5", plan: plans.find((p) => p.id === "class-pack-5") },
    { key: "membership", plan: plans.find((p) => p.id === "membership") },
    { key: "pack20", plan: plans.find((p) => p.id === "class-pack-20") },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-separate border-spacing-0">
        <thead>
          <tr>
            <th className="text-left p-5 bg-stone-50 rounded-tl-2xl text-sm font-medium text-stone-500 sticky left-0 z-10">
              Features
            </th>
            {columns.map(({ key, plan }, i) => (
              <th
                key={key}
                className={`p-5 text-center bg-stone-50 ${
                  i === columns.length - 1 ? "rounded-tr-2xl" : ""
                }`}
              >
                <p className="font-serif text-lg text-stone-900">{plan.name}</p>
                <p className="text-xs text-stone-500 mt-1">
                  {formatPrice(plan.price)}
                </p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparisonFeatures.map((feat, idx) => (
            <tr key={feat.name}>
              <td
                className={`p-4 pl-5 text-sm text-stone-700 bg-white sticky left-0 z-10 ${
                  idx % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                }`}
              >
                {feat.name}
              </td>
              {columns.map(({ key }) => (
                <td
                  key={key}
                  className={`p-4 text-center ${
                    idx % 2 === 0 ? "bg-white" : "bg-stone-50/50"
                  }`}
                >
                  {feat[key] ? <Check /> : <Cross />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
