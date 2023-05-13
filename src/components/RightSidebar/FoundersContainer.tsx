import FounderItem from './FounderItem'

interface FoundersData {
  name: string
  linkedin: boolean
  mail: boolean
  urlLinkedIn: string
  urlMail: string
}

interface FoundersContainerProps {
  foundersData: FoundersData[]
}

const FoundersContainer = ({ foundersData: socialMediaData }: FoundersContainerProps) => {
  const handleClick = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <div className="border-y border-solid border-border-color py-2.5 text-14 font-normal leading-4">
      <h1 className="px-7 py-2.5 text-12 uppercase text-text-secondary">Founders</h1>
      {socialMediaData.map((data) => (
        <FounderItem
          key={data.name}
          linkedin={data.linkedin}
          mail={data.mail}
          name={data.name}
          onClickLinkedIn={() => handleClick(data.urlLinkedIn)}
          onClickMail={() => handleClick(data.urlMail)}
        />
      ))}
    </div>
  )
}

export default FoundersContainer
