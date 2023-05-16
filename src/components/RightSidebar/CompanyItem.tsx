type CompanyProps = {
  name: string
  value: string
  growth: string
}

const CompanyItem = ({ name, value, growth }: CompanyProps) => (
  <div className="flex flex-col justify-between">
    <div className="inline-flex px-7 py-2.5 transition-colors duration-100 hover:bg-bgSecondary">
      <div className="flex flex-row items-center justify-center gap-[15px]">
        <span className="text-xs not-italic leading-3 text-icon">{name}</span>
        <span className="w-6 text-xs not-italic leading-3 text-textPrimary">{value}</span>
        <span className="text-xs not-italic leading-3 text-icon">{growth}</span>
      </div>
    </div>
  </div>
)

export default CompanyItem
