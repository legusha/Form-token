export type Token = {
  name: string,
  symbol: string,
  maxSupply: number,
  currencyType: string,
  supply: boolean
}

export type Currency = {
    name: string
}

export type CurrencyList = {
    [key: string]: Currency
}
