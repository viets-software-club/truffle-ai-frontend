import { ComponentType, ReactNode } from 'react'

type GitHubStatisticProps = {
  Icon?: ComponentType<{ className?: string }>
  IconMetric?: ReactNode
  value: string
  growth: string
  padding: boolean
  hover?: boolean
}

const GitHubStatisticItem = ({
  Icon,
  value,
  growth,
  IconMetric,
  padding,
  hover
}: GitHubStatisticProps) => (
  <div className="flex flex-col justify-between">
    <div
      className={`inline-flex px-7 py-2.5 ${
        hover ? 'transition-colors duration-100 hover:bg-bg-secondary' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-[15px]">
        {Icon && <Icon className="h-[14px] w-[14px] text-icon-color" />}
        {IconMetric}
        <span className={`text-xs not-italic leading-3 text-text-primary ${padding ? 'w-6' : ''}`}>
          {value}
        </span>
        <span className="text-xs not-italic leading-3 text-icon-color">{growth}</span>
      </div>
    </div>
  </div>
)

GitHubStatisticItem.defaultProps = {
  Icon: undefined,
  IconMetric: undefined,
  hover: true
}

export default GitHubStatisticItem
