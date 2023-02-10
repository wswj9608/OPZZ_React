import client from './common'

export const getSummonerProfileToAxios = async (summonerName: any) => {
  // const res = await client.get<SummonerInfoType>('/summoner', { params: summonerName })
  const res = await client.get<SummonerProfileType>('/summoner')
  return res.data
}
