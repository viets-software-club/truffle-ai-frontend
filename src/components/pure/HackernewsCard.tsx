import { FiArrowUpRight } from 'react-icons/fi'
import Button from './Button'

type HackernewsCardProps = {
  Icon: IconComponentType
  name: string
  communitySentiment: string
  links: string[]
}

const HackernewsCard = ({ Icon, name, communitySentiment, links }: HackernewsCardProps) => (
  <div className="my-4 rounded-lg border border-gray-800">
    <div className="flex flex-row items-center px-4 pt-4">
      <Icon className="mr-2 h-6 w-6 text-indigo-500" />
      <h3 className="text-20">{name}</h3>
    </div>

    <p className="border-b border-gray-800 p-4 text-14 font-light text-gray-300">
      {communitySentiment}
    </p>

    <div className="flex flex-row gap-3 p-4">
      {links.map((link, index) => (
        <a href={link} target="_blank" rel="noreferrer">
          <Button
            Icon={FiArrowUpRight}
            variant="normal"
            onClick={() => ''}
            text={`Open ${index}`}
            order="ltr"
          />
        </a>
      ))}
    </div>
  </div>
)

export default HackernewsCard
