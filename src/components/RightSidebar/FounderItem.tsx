

import { FaLinkedin } from 'react-icons/fa';


interface FounderProps
{
    linkedin: boolean;
    mail: boolean;
    name: string;
    onClickLinkedIn: () => void;
    onClickMail: () => void;

}

const FounderItem = ({ linkedin, mail, name, onClickLinkedIn: onClickLinkedIn, onClickMail: onClickMail }: FounderProps) =>
{
    return (
        <div className="flex flex-col justify-between">
            <div className="inline-flex px-7 py-2.5 hover:bg-bg-secondary transition-colors duration-100">
                <div className="flex flex-row justify-center items-center gap-[15px]">
                    <span className="text-icon-color not-italic font-size-3 text-xs leading-3">{name}</span>
                    {linkedin && <button onClick={onClickLinkedIn}>
                        <FaLinkedin className="text-icon-color w-[14px] h-[14px]" />
                    </button>}
                    {mail && <button onClick={onClickMail}>
                        <FaLinkedin className="text-icon-color w-[14px] h-[14px]" />
                    </button>}

                </div>
            </div>
        </div>
    );
}

export default FounderItem;