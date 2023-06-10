import css from './CompanyItem.module.sass'

type CompanyProps = {
  name: string
  value: string
  growth: string
}

const CompanyItem = ({ name, value, growth }: CompanyProps) => (
  <div className={css.company}>
    <div className={css.company__item}>
      <div className={css.company__content}>
        <span className={css.company__name}>{name}</span>
        <span className={css.company__value}>{value}</span>
        <span className={css.company__growth}>{growth}</span>
      </div>
    </div>
  </div>
)

export default CompanyItem
