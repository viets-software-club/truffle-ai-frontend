import Button from "../Button";
import { StarIcon } from '@primer/octicons-react'

interface ProjectInformationProps
{
    name: string;
    eli5: string;
    tags: string[];
}

const ProjectInformation = ({ name, eli5: eli5, tags: tags }: ProjectInformationProps) =>
{
    return (
        <div className="border-b border-border-color py-4 px-7">
            <div className="flex flex-row items-center justify-between mb-4">
                <div className="flex flex-row items-center">
                    <h1 className="mr-3">{name}</h1>
                    {tags.map((text, index) => (
                        <p key={index} className="rounded-lg text-12 bg-bg-secondary px-2 py-0.5 mx-1 text-text-secondary font-light">{text}</p>
                    ))}
                </div>
                <Button variant="highlighted" text="Bookmark" Icon={StarIcon} onClick={() => { }} textColor="text-text-primary" iconColor="text-text-primary" />
            </div>
            <p className="text-12 font-light">{eli5}</p>
        </div>
    );
};

export default ProjectInformation;
