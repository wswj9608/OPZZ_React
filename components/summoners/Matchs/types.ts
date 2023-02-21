import { Item, Match } from '@/lib/api/types'

export interface MatchProps {
  matchData: any[]
}

export interface HistoryCardProps {
  match: Match
}

export interface ItemsBoxProps {
  items: Item[]
  isWin: boolean
}

export interface MatchDetailProps {
  gameDatas: GameDataType[]
  primaryPerks: PrimaryPerkType[]
  teamId: number
}

export interface GameDetailHeaderProps {
  isWin: boolean
  teamId: number
}

export interface GameDetailProps {
  gameData: GameDataType
  primaryPerks: PrimaryPerkType[]
}
