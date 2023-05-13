
import GitHubStatisticItem from '@/components/RightSidebar/GitHubStatisticItem'
import { ComponentType } from 'react';

interface InformationRowItemData
{
    Icon?: ComponentType<{ className?: string }>;
    IconMetric?: JSX.Element;
    value: string;
    growth: string;
}

interface InformationRowProps
{
    statisticsData: InformationRowItemData[];
    name: string;
    tags: string[];
}

const InformationRow = ({ statisticsData, name, tags }: InformationRowProps) =>
{
    return (
        <div className="py-2 px-2 font-normal text-14 flex flex-row items-center hover:bg-bg-secondary transition-colors duration-100">
            <h1 className="text-14">{name}</h1>
            {tags.map((text) => (
                <p key={text} className="rounded-lg text-12 bg-bg-secondary px-2 py-0.5 mx-1 text-text-secondary font-light">{text}</p>
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
    );
};

export default InformationRow;
