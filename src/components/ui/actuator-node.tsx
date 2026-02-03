import { LucideIcon } from "lucide-react";

interface ActuatorNodeProps {
  icon: LucideIcon;
  label: string;
  id: string;
  health: string;
  colorClass: string;
  size?: string;
}

export function ActuatorNode({
  icon: Icon,
  label,
  id,
  health,
  colorClass,
  size = "w-20 h-20",
}: ActuatorNodeProps) {
  return (
    <div className="relative flex flex-col items-center group cursor-pointer">
      <div
        className={`${size} bg-white border-2 ${colorClass} rounded-lg flex items-center justify-center shadow-lg transition-transform hover:scale-105`}
      >
        <Icon size={32} className={colorClass.replace("border-", "text-")} />
        <div
          className={`absolute -top-2 -right-2 ${colorClass.replace("border-", "bg-")} w-4 h-4 rounded-full border-2 border-white`}
        ></div>
      </div>
      <p className="mt-3 text-[10px] font-bold uppercase text-gray-600">
        {label} ({id})
      </p>
      <p
        className={`${colorClass.replace("border-", "text-")} font-mono text-xs font-bold`}
      >
        {health}%
      </p>
    </div>
  );
}
