import { ComponentType, ReactNode } from 'react'

type CardProps = {
  Icon: ComponentType<{ className?: string }>
  name: string
  button: ReactNode
  textFields: string[]
}

const Card = ({ Icon, name, button, textFields }: CardProps) => (
  <div className="mx-7 my-4 rounded-lg border border-border-color bg-bg-secondary">
    <div className="flex flex-row items-center px-4 pt-4">
      <Icon className="mr-2 text-highlight-color" />
      <h2 className="">{name}</h2>
    </div>
    {textFields.map((text) => (
      <p
        key={text}
        className="border-b border-border-color p-4 text-12 font-light text-text-secondary"
      >
        {text}
      </p>
    ))}
    <div className="p-4">{button}</div>
  </div>
)

export default Card
