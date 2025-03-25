interface DashboardColorIconProps {
  color: string;
  size?: number;
}

export default function dashboardColorIcon({ color = 'black', size = 8 }: DashboardColorIconProps) {
  return (
    <div
      className="shrink-0"
      style={{ width: size, height: size, borderRadius: size, backgroundColor: color }}
    />
  );
}
