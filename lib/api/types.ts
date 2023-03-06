export interface SummonerProfile {
  id: string
  name: string
  summonerLevel: number
  summonerIconImageUrl: string
  leagues: League[]
}

export interface League {
  queueType: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR'
  leaguePoints: number
  tier: 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER'
  rank: string
  wins: number
  losses: number
}

export interface Champion {
  championId: number
  championName: string
  championLevel: number
  championIcon: string
}

export interface Item {
  itemId: number
  name: string
  iconImageUrl: string
  description: string
  totalGold: number
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
  line: string
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
  totalDamageDealt: number
  totalDamageDealtToChampions: number
  totalDamageTaken: number
  damageDealtToChampionPercent: number
  damageTakenPercent: number
  mostMultiKills: string
}

export interface Team {
  bans: {
    championId: number
    pickTurn: number
  }[]
  objectives: {
    baron: {
      first: boolean
      kills: number
    }
    champion: {
      first: boolean
      kills: number
    }
    dragon: {
      first: boolean
      kills: number
    }
    inhibitor: {
      first: boolean
      kills: number
    }
    riftHerald: {
      first: boolean
      kills: number
    }
    tower: {
      first: boolean
      kills: number
    }
  }
  teamId: number
  win: boolean
  totalGold: number
}

export interface Match {
  gameDuration: string
  gameEndTimestamp: string
  gameId: number
  queueType: string
  playerMatchDatas: PlayerMatchData[]
  friendlyTeam: Team
  enemyTeam: Team
}

interface PlayedChampion {
  championId: number
  championIcon: string
  championName: string
  kda: number
  win: number
  loss: number
  matchNumber: number
  winningRate: number
}

interface PlayedPositions {
  TOP: number
  JUNGLE: number
  MIDDLE: number
  ADC: number
  SUPPORT: number
}

interface Statistics {
  totalMatchNumber: number
  totalWins: number
  totalLosses: number
  averageKills: number
  averageDeaths: number
  averageAssists: number
  averageKda: string
  killParticipationRate: number
  playedChampions: PlayedChampion[]
  playedPositions: PlayedPositions
}

export interface SearchSummoner {
  summonerProfile: SummonerProfile
  matchHistory: {
    matches: Match[]
    statistics: Statistics
  }
}
