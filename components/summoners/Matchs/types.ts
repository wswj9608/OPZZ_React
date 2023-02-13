export interface MatchProps {
  matchData: any[]
}

export interface HistoryCardProps {
  match: SummonerMatchsType
}

export interface ItemsBoxProps {
  items: ({
    icon_id: number
    item_id: number
    image_url: string
    file_name: string
    name: string
    description: string
    gold_total: number
  } | null)[]
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
