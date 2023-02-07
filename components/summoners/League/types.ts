export interface LeagueProps {
  data: LeagueDataType
}

export type TierType =
  | 'IRON'
  | 'BRONZE'
  | 'SILVER'
  | 'GOLD'
  | 'PLATINUM'
  | 'DIAMOND'
  | 'MASTER'
  | 'GRANDMASTER'
  | 'CHALLENGER'

export type RankType = 'I' | 'II' | 'III' | 'IV'
