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
