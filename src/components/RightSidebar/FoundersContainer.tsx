
import FounderItem from './FounderItem';

interface FoundersData
{
    name: string;
    linkedin: boolean;
    mail: boolean;
    urlLinkedIn: string;
    urlMail: string;
}

interface FoundersContainerProps
{
    foundersData: FoundersData[];
}

const FoundersContainer = ({ foundersData: socialMediaData }: FoundersContainerProps) =>
{
    const handleClick = (url: string) =>
    {
        window.open(url, "_blank");
    };

    return (
        <div className="py-2.5 font-normal text-14 leading-4 border-border-color border-t border-b border-solid">
            <h1 className="px-7 py-2.5 text-12 uppercase text-text-secondary">Founders</h1>
            {socialMediaData.map((data) =>
            {
                return (
                    <FounderItem
                        key={data.name}
                        linkedin={data.linkedin}
                        mail={data.mail}
                        name={data.name}
                        onClickLinkedIn={() => handleClick(data.urlLinkedIn)}
                        onClickMail={() => handleClick(data.urlMail)}
                    />

                );
            })}
        </div>
    );
};

export default FoundersContainer;
