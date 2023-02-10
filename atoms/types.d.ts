interface SummonerProfileType {
  name: string
  summonerLevel: number
  summonerIconImageUrl: string
}

interface LeagueDataType {
  queueType: 'RANKED_SOLO_5x5' | 'RANKED_FLEX_SR'
  leaguePoints: number
  tier: 'IRON' | 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM' | 'DIAMOND' | 'MASTER' | 'GRANDMASTER' | 'CHALLENGER'
  rank: 'I' | 'II' | 'III' | 'IV'
  wins: number
  losses: number
}

interface GameDataStatusType {
  killParticipationRate: number
  visionWardsBoughtInGame: number
  totalMinionsKilled: number
  minionsPerMinute: number
}

interface GameDataType {
  kills: number
  assists: number
  deaths: number
  kda: number
  win: boolean
  status: GameDataStatusType
  mostMultiKills: string
  summonerName: string
  teamId: number
  champion: {
    image_url: string
    championName: string
  }
  primaryPerkId: number
  subPerkStyleId: number
  champLevel: number
  items: ({
    icon_id: number
    item_id: number
    image_url: string
    file_name: string
    name: string
    description: string
    gold_total: number
  } | null)[]
  summonerSpells: {
    image_url: string
    spell_id: number
    file_name: string
  }[]
}
interface SummonerMatchsType {
  gameDatas: GameDataType[]
  gameDuration: string
  gameEndTimestamp: string
  gameId: number
  primaryPerks: {
    id: number
    perk_id: number
    name: string
    long_desc: string
    icon_path: string
  }[]
  teams: {
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
  }[]
}

interface MatchStatisticsType {
  totalMatchNumber: number
  totalWins: number
  totalLosses: number
  averageKills: number
  averageDeaths: number
  averageAssists: number
  averageKda: number
  killParticipationRate: number
  playedChampions: {
    championName: string
    championIcon: string
    winningRate: number
    wins: number
    losses: number
    kda: number
  }[]
  preferredPositions: {
    line: string
    lineIcon: string
    selectionRate: number
  }[]
}
