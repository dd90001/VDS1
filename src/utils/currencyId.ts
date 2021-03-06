import { Currency, ETHER, Token } from '@wanswap/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'VDS'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
