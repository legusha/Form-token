import { Injectable } from '@angular/core';
import { Token, CurrencyList } from '../types/token.type';

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  token: Token = {
    name: '',
    symbol: '',
    maxSupply: 1,
    currencyType: 'ETN',
    supply: true
  }

  currencyList: CurrencyList = {
    'ETN': { name: "Ethereum" },
    'BSC': { name: "Binance Smart Chain" }
  }

  constructor() { }
}
