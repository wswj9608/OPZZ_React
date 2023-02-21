export interface LeagueProps {
  // data: LeagueDataType
  queueType: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR'
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
