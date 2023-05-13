
import GitHubStatisticItem from '@/components/RightSidebar/GitHubStatisticItem'
import { ComponentType } from 'react';

interface StatisticItemData
{
    Icon?: ComponentType<{ className?: string }>;
    IconMetric?: JSX.Element;
    value: string;
    growth: string;
}

interface GitHubStatisticsContainerProps
{
    statisticsData: StatisticItemData[];
}

const GitHubStatisticsContainer = ({ statisticsData }: GitHubStatisticsContainerProps) =>
{
    return (
        <div className="py-2.5 font-normal text-14 leading-4 border-border-color border-t border-b border-solid">
            <h1 className="px-7 py-2.5 text-12 uppercase text-text-secondary">Github Stats</h1>
            {statisticsData.map((data, index) => (
                <GitHubStatisticItem
                    key={index}
                    Icon={data.Icon}
                    IconMetric={data.IconMetric}
                    value={data.value}
                    growth={data.growth}
                    padding={true}
                />
            ))}
        </div>
    );
};

export default GitHubStatisticsContainer;
