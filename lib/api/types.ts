export interface SummonerProfile {
  id: string
  name: string
  summonerLevel: number
  summonerIconImageUrl: string
  leagues: League[]
}

interface League {
  queueType: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR'
  leaguePoints: number
  tier: string
  rank: string
  wins: number
  losses: number
}

export interface Champion {
  championName: string
  championLevel: number
  championIcon: string
}

export interface Item {
  item_id: number
  name: string
  description: string
  total_gold: number
}

export interface Challenges {
  kda: number
  killParticipation: number
}

export interface Spell {
  image_url: string
  spell_id: number
  file_name: string
}

export interface PlayerMatchData {
  summonerName: string
  kills: number
  assists: number
  deaths: number
  champion: Champion
  items: Item[]
  teamId: number
  win: boolean
  challenges: Challenges
  visionWardsBoughtInGame: number
  wradsKilled: number
  wardsPlaced: number
  totalMinionsKilled: number
  minionsPerMinute: number
  primaryPerkId: number
  subPerkStyleId: number
  summonerSpells: Spell[]
}

export interface Match {
  gameDuration: string
  gameEndTimestamp: string
  gameId: number
  playerMatchDatas: PlayerMatchData[]
}

export interface SearchSummoner {
  summonerProfile: SummonerProfile
  matches: Match[]
}
