
import { FaSlack } from 'react-icons/fa';
import Button from '../Button';

const IntegrationsContainer = () =>
{
    const handleClick = () =>
    {
        let url = "test.com"
        window.open(url, "_blank");
    };

    return (
        <div className="py-2.5 font-normal text-14 leading-4 border-border-color border-t border-b border-solid">
            <h1 className="px-7 py-2.5 text-12 uppercase text-text-secondary">Integrations</h1>
            <div className="flex flex-col justify-between">
                <div className="inline-flex px-7 py-2.5 hover:bg-bg-secondary transition-colors duration-100">
                    <div className="flex flex-row justify-center items-center gap-[15px]">
                        <Button variant={"normal"} onClick={handleClick} text={"Add to CRM"} />
                        <button onClick={handleClick}>
                            <FaSlack className=" w-[14px] h-[14px]" />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default IntegrationsContainer;
