
import CompanyItem from './CompanyItem';

interface CompanyData
{
    name: string;
    value: string;
    growth: string;
}

interface CompanyContainerProps
{
    companyData: CompanyData[];
}

const CompanyContainer = ({ companyData: socialMediaData }: CompanyContainerProps) =>
{
    return (
        <div className="py-2.5 font-normal text-14 leading-4 border-border-color border-t border-b border-solid">
            <h1 className="px-7 py-2.5 text-12 uppercase text-text-secondary">Company</h1>
            {socialMediaData.map((data) =>
            {
                return (
                    <CompanyItem
                        key={data.name}
                        name={data.name}
                        value={data.value}
                        growth={data.growth}
                    />
                );
            })}
        </div>
    );
};

export default CompanyContainer;
