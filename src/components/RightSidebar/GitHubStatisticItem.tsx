
import { ComponentType } from 'react';

interface GitHubStatisticProps
{
    Icon?: ComponentType<{ className?: string }>;
    IconMetric?: JSX.Element;
    value: string;
    growth: string;
    padding: boolean;
    hover?: boolean;
}

const GitHubStatisticItem = ({ Icon, value, growth, IconMetric, padding, hover }: GitHubStatisticProps) =>
{
    return (
        <div className="flex flex-col justify-between">
            <div className={`inline-flex px-7 py-2.5 ${hover ? "hover:bg-bg-secondary transition-colors duration-100" : ""}`}>
                <div className="flex flex-row justify-center items-center gap-[15px]">
                    {Icon && <Icon className="text-icon-color w-[14px] h-[14px]" />}
                    {IconMetric && <>{IconMetric}</>}
                    <span className={`text-text-primary not-italic font-size-3 text-xs leading-3 ${padding ? "w-6" : ""}`}>{value}</span>
                    <span className="text-icon-color not-italic font-size-3 text-xs leading-3">{growth}</span>

                </div>
            </div>
        </div >
    );
}

export default GitHubStatisticItem;