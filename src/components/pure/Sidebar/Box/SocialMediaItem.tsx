import { FaDiscord, FaLinkedin, FaQuestion, FaSlack, FaTwitter } from 'react-icons/fa'
import styles from './SocialMediaItem.module.sass'

type SocialMediaPlatform = 'discord' | 'twitter' | 'linkedin' | 'slack'

type SocialMediaItemProps = {
  icon: SocialMediaPlatform
  text: string
  name: string
  value: string
  growth: string
  onClick: () => void
}
const iconNameToIconComponentType = new Map<SocialMediaPlatform, IconComponentType>([
  ['discord', FaDiscord],
  ['twitter', FaTwitter],
  ['linkedin', FaLinkedin],
  ['slack', FaSlack]
])

const SocialMediaItem = ({ icon, text, name, value, growth, onClick }: SocialMediaItemProps) => {
  const Icon = iconNameToIconComponentType.get(icon) || FaQuestion

  return (
    <div className={styles.socialMediaItem}>
      <div className={styles.socialMediaItem__buttonArea}>
        <div className={styles.socialMediaItem__buttonRow}>
          <button type="button" onClick={onClick}>
            <Icon className={styles.socialMediaItem__button} />
          </button>

          <span className={styles.socialMediaItem__text}>{name + text}</span>
          <span className={styles.socialMediaItem__value}>{value}</span>
          <span className={styles.socialMediaItem__growth}>{growth}</span>
        </div>
      </div>
    </div>
  )
}

export default SocialMediaItem
