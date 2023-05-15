import { ComponentType, useMemo } from 'react'

type ButtonProps = {
  variant:
    | 'normal'
    | 'highlighted'
    | 'noBordernoBG'
    | 'noBG'
    | 'onlyIcon'
    | 'onlyIconnoBordernoBG'
    | 'normalHighlighted'
  onClick: () => void
  text?: string
  Icon?: ComponentType<{ className?: string }>
  switchOrder?: boolean
  iconColor?: string
  textColor?: string
  fullWidth?: boolean
}

const Button = ({
  variant,
  onClick,
  text,
  Icon,
  switchOrder,
  iconColor = 'text-icon-color',
  textColor = 'text-text-secondary',
  fullWidth
}: ButtonProps) => {
  const contentLayout = useMemo(() => {
    if (Icon && !text) {
      return <Icon className={`h-4 w-4 ${iconColor}`} />
    }
    return switchOrder ? (
      <>
        {text && <span className={`text-14 ${textColor}`}>{text}</span>}
        {Icon && <Icon className={`ml-2 h-4 w-4 ${iconColor}`} />}
      </>
    ) : (
      <>
        {Icon && <Icon className={`mr-2 h-4 w-4 ${iconColor}`} />}
        {text && <span className={`text-14 ${textColor}`}>{text}</span>}
      </>
    )
  }, [Icon, text, switchOrder, iconColor, textColor])

  let buttonStyle = ''

  switch (variant) {
    case 'normal':
      buttonStyle = 'bg-bg-secondary border border-border-color px-4 py-2'
      break
    case 'normalHighlighted':
      buttonStyle = 'bg-bg-secondary-highlighted border border-border-color px-4 py-2'
      break
    case 'noBG':
      buttonStyle = 'border border-border-color px-4 py-2'
      break
    case 'noBordernoBG':
      buttonStyle = ' px-4 py-2'
      break
    case 'highlighted':
      buttonStyle = 'bg-highlight-color px-4 py-2'
      break
    case 'onlyIcon':
      buttonStyle = 'bg-bg-secondary border border-border-color px-1.5 py-1.5'
      break
    case 'onlyIconnoBordernoBG':
      buttonStyle = ''
      break
    default:
      buttonStyle = ''
  }
  buttonStyle += fullWidth ? ' w-full' : ''

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center rounded-[5px] transition-colors duration-100 hover:bg-bg-secondary-highlighted ${buttonStyle}`}
    >
      {contentLayout}
    </button>
  )
}

Button.defaultProps = {
  text: null,
  Icon: null,
  switchOrder: false,
  iconColor: 'text-icon-color',
  textColor: 'text-text-secondary',
  fullWidth: false
}

export default Button