import { Injectable } from '@angular/core';
import { Token } from './token.type';

enum Blockchain {
  ethereum = 1,
  bsc = 2,
}

@Injectable({
  providedIn: 'root'
})

export class TokenService {
  token: Token = {
    name: '',
    symbol: '',
    maxSupply: 1,
    blockchain: Blockchain.ethereum,
    supply: true
  }

  constructor() { }
}
