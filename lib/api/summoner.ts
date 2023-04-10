/* eslint-disable */
import client from './common'
import { SearchSummoner } from './types'

export const getSearchSummoner = async (summonerName: string) => {
  console.log(summonerName)
  const res = await client.get<SearchSummoner>(`/summoner/${summonerName}`)
  return res.data
}
