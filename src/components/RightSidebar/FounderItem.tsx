import { FaLinkedin } from 'react-icons/fa'

type FounderProps = {
  linkedin: boolean
  mail: boolean
  name: string
  onClickLinkedIn: () => void
  onClickMail: () => void
}

const FounderItem = ({ linkedin, mail, name, onClickLinkedIn, onClickMail }: FounderProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-bgSecondary">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <span className="text-xs not-italic leading-3 text-icon">{name}</span>
        {linkedin && (
          <button type="button" onClick={onClickLinkedIn}>
            <FaLinkedin className="h-[14px] w-[14px] text-icon" />
          </button>
        )}
        {mail && (
          <button type="button" onClick={onClickMail}>
            <FaLinkedin className="h-[14px] w-[14px] text-icon" />
          </button>
        )}
      </div>
    </div>
  </div>
)

export default FounderItem
