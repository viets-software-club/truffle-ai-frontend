import { FunctionComponent, ComponentType } from 'react';

interface MenuItemProps
{
    Icon: ComponentType<{ className?: string }>;
    text: string;
    onClick: () => void;
    showIcon?: boolean;
}

const MenuItem = ({ Icon, text, onClick, showIcon = true }: MenuItemProps) =>
{
    return (
        <div className="flex flex-col justify-between">
            <button onClick={onClick} className="inline-flex px-7 py-2.5 hover:bg-bg-secondary transition-colors duration-100">
                <div className="flex flex-row justify-center items-center gap-[5px]">
                    {showIcon && <Icon className="text-icon-color w-[14px] h-[14px]" />}
                    <span className="text-text-primary not-italic font-size-3 text-xs leading-3">{text}</span>
                </div>
            </button>
        </div>
    );
}

export default MenuItem;