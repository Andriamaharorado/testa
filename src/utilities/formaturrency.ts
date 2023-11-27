const CURRENCY_FORMATER = new Intl.NumberFormat(undefined,{currency:"USD", style:"currency"})

export default function formaturrency(number: number) {
  return CURRENCY_FORMATER.format(number)
}

