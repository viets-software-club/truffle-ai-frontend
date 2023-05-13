interface CompanyProps {
  name: string
  value: string
  growth: string
}

const CompanyItem = ({ name, value, growth }: CompanyProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-bg-secondary">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <span className="text-xs not-italic leading-3 text-icon-color">{name}</span>
        <span className="w-6 text-xs not-italic leading-3 text-text-primary">{value}</span>
        <span className="text-xs not-italic leading-3 text-icon-color">{growth}</span>
      </div>
    </div>
  </div>
)

export default CompanyItem
