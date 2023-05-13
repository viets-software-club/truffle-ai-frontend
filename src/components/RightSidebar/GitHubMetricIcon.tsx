import { ComponentType } from 'react';

interface GitHubMetricIconProps
{
    Icon: ComponentType<{ className?: string }>;
    Icon2: ComponentType<{ className?: string }>;
}

const GitHubMetricIcon = ({ Icon, Icon2 }: GitHubMetricIconProps) =>
{
    return (
        <div className='relative w-4 h-4'>
            <Icon className="text-icon-color w-2 h-2 absolute top-0 left-0 z-10" />
            <div className="mb-[3px] ml-[3px] absolute rounded-full w-3 h-[1px] bg-icon-color transform -rotate-45 origin-bottom-left" style={{ bottom: '0', left: '0' }}></div>
            <Icon2 className="text-icon-color w-2 h-2 absolute bottom-0 right-0 z-10" />
        </div>
    );
}

export default GitHubMetricIcon;