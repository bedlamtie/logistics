declare interface IRes<T> {
  code: string
  msg?: string
  obj: {
    Data: T
  }
}

declare interface WeparcelPriceQueryDTO {
  countryId: number
  weight: number
  length: number
  width: number
  height: number
}

declare interface LineFeeVO {
  CalType: number
  CalWeight: number
  ProductName: string
  TimelineRemark: string
  FirstWeightPrice: number
  FirstWeightUnit: number
  UnitPrice: number
  Price: number
  Unit: number
  Start: number
  End: number
  NeedVolume: any
  Faul: number
  OwsFee: number
  RemoteFee: number
  ProductRemark: string
  Length: any
  Width: any
  Height: any
  Weight: number
  FactWeight: any
  Transportation: any
  EfficiencyPredictedVos: EfficiencyPredictedVo[]
  VolumeWeight: number
  PeakSeasonUnitMoney: number
  PeakSeasonMinMoney: number
  IsIncludedTax: string
  HaveWeightStage: string
  ShipmentType: string
  CpPriceProductPartitionWeightVo: CpPriceProductPartitionWeightVo
  GoodsRestriction: string
  WeightRestriction: string
  LengthRestriction: string
  LineFeature: string
  AgingByCountryVO?: AgingByCountryVo | null
  ExpressId: number
  ExpressName: string
  ProductId: number
  ProductPartitionId: number
  OutGoodTagNames: any
  AgingStability: number
  PopularityDegree: number
  CustomsClearanceRate: number
  SafetyRate: number
  PredictAging: number
  WeightDesc: string
}

declare interface EfficiencyPredictedVo {
  FutureDay: number
  EfficiencyPredicte: string
  TimeEfficiencyMap: string[]
  WarmPrompt?: string | null
}

declare interface CpPriceProductPartitionWeightVo {
  CpPriceWeightList?: CpPriceWeightList[] | null
  Remark: string
}

declare interface CpPriceWeightList {
  WeightText: string
  WeightValue: string
}

declare interface AgingByCountryVo {
  CountryId: number
  CountryName: string
  Percen1to3: number
  Percen4to7: number
  Percen8to12: number
  Percen13to15: number
  Percen16to20: number
  Percen20to30: number
  Percenonway: number
  Total: number
}
