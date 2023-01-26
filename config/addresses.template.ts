// AS compiler does not like interface
export class Addresses {
    CollateralPoolConfig: string
    BookKeeper: string
    PriceOracle: string
    PositionManager: string
    FixedSpreadLiquidationStrategy: string
    blockNumber: string
    network: string
  }
  
  // AS compiler does not like const
  export let addresses: Addresses = {
    CollateralPoolConfig: '{{CollateralPoolConfig}}',
    BookKeeper: '{{BookKeeper}}',
    PriceOracle: '{{PriceOracle}}',
    PositionManager: '{{PositionManager}}',
    FixedSpreadLiquidationStrategy: '{{FixedSpreadLiquidationStrategy}}',
    blockNumber: '{{blockNumber}}',
    network: '{{network}}'
  }