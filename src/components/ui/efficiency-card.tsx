interface EfficiencyCardProps {
  label: string;
  value: number;
  color: string;
  sparkline: string;
}

export function EfficiencyCard({
  label,
  value,
  color,
  sparkline,
}: EfficiencyCardProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-end mb-1">
        <p className="text-xs font-bold text-gray-500 uppercase">{label}</p>
        <p className="text-xl font-bold text-gray-900">{value}%</p>
      </div>
      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
      </div>
      <div className="mt-2 h-8 w-full">
        <svg
          className={`w-full h-full ${color.replace("bg-", "text-")} opacity-30`}
          viewBox="0 0 100 20"
        >
          <path
            d={sparkline}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          ></path>
        </svg>
      </div>
    </div>
  );
}
