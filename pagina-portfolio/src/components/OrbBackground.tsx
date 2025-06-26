export default function OrbBackground({ hue }: { hue: number }) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Placeholder for orb animation */}
      <div className="absolute inset-0 rounded-full opacity-30" style={{ background: `hsl(${hue}, 100%, 50%)` }} />
    </div>
  )
}
