interface SummonerProfileType {
  name: string
  id: string
  puuid: string
  summonerLevel: number
  imageUrl: string
}

interface GameDataType {
  kills: number
  assists: number
  deaths: number
  kda: number
  summonerName: string
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
  visionWardsBoughtInGame: number
  totalMinionsKilled: number
  minionsPerMinute: number
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
}
