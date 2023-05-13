

interface CompanyProps
{
    name: string;
    value: string;
    growth: string;
}

const CompanyItem = ({ name, value, growth, }: CompanyProps) =>
{
    return (
        <div className="flex flex-col justify-between">
            <div className="inline-flex px-7 py-2.5 hover:bg-bg-secondary transition-colors duration-100">
                <div className="flex flex-row justify-center items-center gap-[15px]">
                    <span className="text-icon-color not-italic font-size-3 text-xs leading-3">{name}</span>
                    <span className="text-text-primary not-italic font-size-3 text-xs leading-3 w-6">{value}</span>
                    <span className="text-icon-color not-italic font-size-3 text-xs leading-3">{growth}</span>
                </div>
            </div>

        </div>
    );
}

export default CompanyItem;