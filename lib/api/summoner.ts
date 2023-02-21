import client from './common'
import { SearchSummoner } from './types'

export const getSummonerProfileToAxios = async (summonerName: any) => {
  // const res = await client.get<SummonerInfoType>('/summoner', { params: summonerName })
  const res = await client.get<SummonerProfileType>('/summoner')
  return res.data
}

export const getSearchSummoner = async (summonerName: string) => {
  console.log(summonerName)
  const res = await client.get<SearchSummoner>(`/summoner/${summonerName}`)
  return res.data
}
