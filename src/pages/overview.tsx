
import GitHubStatisticsContainer from '@/components/RightSidebar/GitHubStatsContainer'
import MenuItem from '@/components/MenuItem'
import SocialMediaContainer from '@/components/RightSidebar/SocialMediaContainer';
import GitHubMetricIcon from '@/components/RightSidebar/GitHubMetricIcon'

import { Inter } from 'next/font/google'
import { BookOpen, Compass, Bookmark, X, ChevronUp, ChevronDown, Calendar } from 'react-feather';
import { RepoForkedIcon, StarIcon, IssueOpenedIcon, PeopleIcon, PersonIcon } from '@primer/octicons-react'
import FoundersContainer from '@/components/RightSidebar/FoundersContainer';
import IntegrationsContainer from '@/components/RightSidebar/IntegrationsContainer';
import CompanyContainer from '@/components/RightSidebar/CompanyContainer';
import Button from '@/components/Button';
import { FaTwitter, FaHackerNews } from 'react-icons/fa';
import Card from '@/components/DetailPage/Card';
import ProjectInformation from '@/components/DetailPage/ProjectInformation';
import Chart from '@/components/DetailPage/Chart';
import InformationRow from '@/components/InformationRow';




const inter = Inter({ subsets: ['latin'] })

export default function Overview()
{
    const handleClick = () =>
    {
        console.log('Menu item clicked');
    };

    const starData = [
        { name: '01/01/2023', value: 4000, value2: 1000 },
        { name: '01/02/2023', value: 3000, value2: 2000 },
        { name: '01/03/2023', value: 2000, value2: 3000 },
        { name: '01/04/2023', value: 2780, value2: 4000 },
        { name: '01/05/2023', value: 1890, value2: 5000 },
        { name: '01/06/2023', value: 2390, value2: 6000 },
        { name: '01/07/2023', value: 3490, value2: 7000 },
    ];


    const forkData = [
        { name: '01/01/2023', value: 1000, value2: 4000 },
        { name: '01/02/2023', value: 2000, value2: 3000 },
        { name: '01/03/2023', value: 3000, value2: 2000 },
        { name: '01/04/2023', value: 4000, value2: 2780 },
        { name: '01/05/2023', value: 5000, value2: 1890 },
        { name: '01/06/2023', value: 6000, value2: 2390 },
        { name: '01/07/2023', value: 7000, value2: 3490 },
    ];

    const issueData = [
        { name: '01/01/2023', value: 4800, value2: 1000 },
        { name: '01/02/2023', value: 4200, value2: 2000 },
        { name: '01/03/2023', value: 3600, value2: 3000 },
        { name: '01/04/2023', value: 3000, value2: 4000 },
        { name: '01/05/2023', value: 2400, value2: 5000 },
        { name: '01/06/2023', value: 1800, value2: 6000 },
        { name: '01/07/2023', value: 1200, value2: 7000 },
    ];


    const statisticsData = [
        { Icon: StarIcon, value: "105k", growth: "+450" },
        { Icon: IssueOpenedIcon, value: "1.6k", growth: "+121" },
        { Icon: RepoForkedIcon, value: "23.7k", growth: "+1.1k" },
        { IconMetric: <GitHubMetricIcon Icon={IssueOpenedIcon} Icon2={PersonIcon} />, value: "3.2", growth: "-0.2" },
        { IconMetric: <GitHubMetricIcon Icon={RepoForkedIcon} Icon2={IssueOpenedIcon} />, value: "1.6", growth: "+0.1" },
        { Icon: PeopleIcon, value: "23", growth: "+2" },
    ];

    const name = 'vercel/next.js';
    const tags = ['tag1', 'tag2', 'tag3'];

    return (
        <main className={`${inter.className}`}>
            <div className="flex flex-col">
                {/* Sidebar left */}
                <div className={`min-h-screen fixed justify-between left-0 top-0 h-screen flex flex-col border-r border-border-color w-56 ${inter.className}`}>
                    <div>
                        <div className="px-7 py-2.5 flex justify-between w-full items-center text-text-primary">
                            <span className="mr-2">TruffleAI</span>
                            <div className="w-[30px] h-[30px] rounded-[5px] bg-gray-500"></div>
                        </div>

                        <div className="py-2.5 font-normal text-14 leading-4 text-text-primary border-border-color border-t border-solid">
                            <h1 className="px-7 py-2.5 ">Overview</h1>
                            <div className="px-2">
                                <MenuItem Icon={Compass} text="All projects" onClick={handleClick} showIcon={true} />
                                <MenuItem Icon={Bookmark} text="Saved projects" onClick={handleClick} showIcon={true} />
                            </div>
                        </div>
                        <div className="py-2.5 font-normal text-14 leading-4 text-text-primary border-border-color border-t border-solid">
                            <h1 className="px-7 py-2.5 ">Saved searches</h1>
                            <div className="px-2">
                                <MenuItem Icon={Compass} text="JavaScript Frameworks" onClick={handleClick} showIcon={false} />
                                <MenuItem Icon={Bookmark} text="Static Site Generators" onClick={handleClick} showIcon={false} />
                                <MenuItem Icon={Bookmark} text="Infrastructure" onClick={handleClick} showIcon={false} />
                                <MenuItem Icon={Bookmark} text="Dev Tools" onClick={handleClick} showIcon={false} />
                                <MenuItem Icon={Bookmark} text="Machine Learning" onClick={handleClick} showIcon={false} />
                            </div>
                        </div>
                    </div>
                    <div className="border-border-color border-t border-solid">
                        <MenuItem Icon={BookOpen} text="Help & Support" onClick={handleClick} showIcon={true} />
                    </div>
                </div>


                {/* Main content */}
                <div className="flex-col flex text-text-primary ml-56">
                    <div className="pl-7 pr-2 py-2.5 border-border-color border-b border-solid text-icon-color">
                        <div className="flex justify-between">
                            <div className="flex-row flex gap-3 items-center">
                                <Button variant={"onlyIconnoBordernoBG"} onClick={handleClick} Icon={X} />
                                <Button variant={"onlyIcon"} onClick={handleClick} Icon={ChevronUp} />
                                <Button variant={"onlyIcon"} onClick={handleClick} Icon={ChevronDown} />
                                <p className="text-text-secondary text-14">3/12</p>
                            </div>
                            <Button variant={"normal"} onClick={handleClick} text={"Edit timeframe"} Icon={Calendar} />
                        </div>
                    </div>
                    <div className="flex-grow flex">
                        <div className="w-4/5 flex-row">
                            <ProjectInformation
                                name="vercel/next.js"
                                eli5="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
                                tags={["React", "Static Site Generation", "TypeScript"]} />
                            <Chart starData={starData} forkData={forkData} issueData={issueData} />
                            <div className="flex flex-row">
                                <Card
                                    Icon={FaTwitter}
                                    name="Top Tweets"
                                    button={<Button variant={"normalHighlighted"} onClick={handleClick} text="Do something" />}
                                    textFields={[
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
                                    ]}
                                />
                                <Card
                                    Icon={FaHackerNews}
                                    name="Community sentiment"
                                    button={<Button variant={"normalHighlighted"} onClick={handleClick} text="Do something" />}
                                    textFields={[
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: ELI5",
                                        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore  -> Source: Hackernews",
                                    ]}
                                />
                            </div>
                            <div className="flex flex-col px-7 py-2.5">
                                <InformationRow
                                    statisticsData={statisticsData}
                                    name={name}
                                    tags={tags}
                                />
                                <InformationRow
                                    statisticsData={statisticsData}
                                    name={name}
                                    tags={tags}
                                />
                                <InformationRow
                                    statisticsData={statisticsData}
                                    name={name}
                                    tags={tags}
                                />


                            </div>
                        </div>

                        {/* Sidebar right */}
                        <div className="w-1/5 border-border-color border-l border-solid h-full">
                            <GitHubStatisticsContainer
                                statisticsData={statisticsData}

                            />
                            <SocialMediaContainer
                                socialMediaData={[
                                    { name: "Discord", text: "Followers", value: "101k", growth: "+2k", url: "https://discord.com" },
                                    { name: "Twitter", text: "Followers", value: "200k", growth: "+1k", url: "https://twitter.com" },
                                ]}
                            />
                            <FoundersContainer
                                foundersData={[
                                    { name: "John Doe", linkedin: true, mail: true, urlLinkedIn: "https://linkedin.com", urlMail: "mailto:john.doe@gmail" },
                                    { name: "Jane Doe", linkedin: true, mail: true, urlLinkedIn: "https://linkedin.com", urlMail: "mailto:jane.doe@gmail" },
                                ]}
                            />
                            <CompanyContainer
                                companyData={[
                                    { name: "Total Funding", value: "$1.2M", growth: "+$0.2M" },
                                    { name: "Contr./Employee", value: "1.3", growth: "+0.2" },
                                ]}
                            />
                            <IntegrationsContainer />
                        </div>

                    </div>
                </div>
            </div>
        </main >
    )
}