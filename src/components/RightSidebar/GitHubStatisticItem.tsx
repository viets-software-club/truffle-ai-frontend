import { ComponentType, ReactNode } from 'react'

type GitHubStatisticProps = {
  Icon?: ComponentType<{ className?: string }>
  IconMetric?: ReactNode
  value: string
  growth: string
  paddingOn: boolean
  hover?: boolean
}

const GitHubStatisticItem = ({
  Icon,
  value,
  growth,
  IconMetric,
  paddingOn,
  hover
}: GitHubStatisticProps) => (
  <div className="flex flex-col justify-between">
    <div
      className={`inline-flex px-7 py-2.5 ${
        hover ? 'transition-colors duration-100 hover:bg-gray-850' : ''
      }`}
    >
      <div className="flex flex-row items-center justify-center gap-[15px]">
        {Icon && <Icon className="h-[14px] w-[14px] text-gray-500" />}
        {IconMetric}
        <span className={`text-xs not-italic leading-3 text-gray-100 ${paddingOn ? 'w-6' : ''}`}>
          {value}
        </span>
        <span className="text-xs not-italic leading-3 text-gray-500">{growth}</span>
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
