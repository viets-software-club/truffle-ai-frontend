import { ComponentType, ReactNode } from "react";

interface CardProps
{
    Icon: ComponentType<{ className?: string }>;
    name: string;
    button: ReactNode;
    textFields: string[];
}

const Card = ({ Icon, name, button, textFields }: CardProps) =>
{
    return (
        <div className="bg-bg-secondary border border-border-color rounded-lg my-4 mx-7">
            <div className="flex flex-row items-center pt-4 pl-4 pr-4">
                <Icon className="mr-2 text-highlight-color" />
                <h2 className="">{name}</h2>
            </div>
            {textFields.map((text, index) => (
                <p key={index} className="border-b border-border-color p-4 text-text-secondary font-light text-12">{text}</p>
            ))}
            <div className="p-4">
                {button}
            </div>
        </div>
    );
};

export default Card;
