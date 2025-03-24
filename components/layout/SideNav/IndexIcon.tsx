interface IndexIconProps {
  color: string;
  size?: number;
}

export default function IndexIcon({ color = 'black', size = 8 }: IndexIconProps) {
  return (
    <div
      className="shrink-0"
      style={{ width: size, height: size, borderRadius: size, backgroundColor: color }}
    />
  );
}
