
interface StatProps {
  id: number
  value: string
  label: string
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-gray-700 font-medium">{label}</div>
    </div>
  )
}

export function Stats({stats}: {stats: StatProps[]}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-12">
      {stats.map((stat) => (
        <StatItem key={stat.id} value={stat.value} label={stat.label} />
      ))}
    </div>
  )
}

