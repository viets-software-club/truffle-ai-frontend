import GitHubStatisticItem from '@/components/RightSidebar/GitHubStatisticItem'
import { ComponentType, ReactNode } from 'react'

type InformationRowItemData = {
  Icon?: ComponentType<{ className?: string }>
  IconMetric?: ReactNode
  value: string
  growth: string
}

type InformationRowProps = {
  statisticsData: InformationRowItemData[]
  name: string
  tags: string[]
}

const InformationRow = ({ statisticsData, name, tags }: InformationRowProps) => (
  <div className="flex flex-row items-center p-2 text-14 font-normal transition-colors duration-100 hover:bg-bg-secondary">
    <h1 className="text-14">{name}</h1>
    {tags.map((text) => (
      <p
        key={text}
        className="mx-1 rounded-lg bg-bg-secondary px-2 py-0.5 text-12 font-light text-text-secondary"
      >
        {text}
      </p>
    ))}
    {statisticsData.map((data) => (
      <GitHubStatisticItem
        key={data.value}
        Icon={data.Icon}
        IconMetric={data.IconMetric}
        value={data.value}
        growth={data.growth}
        padding={false}
        hover={false}
      />
    ))}
  </div>
)

export default InformationRow
