import client from './common'

export const getSummonerInfo = async (summonerName: any) => {
  const res = await client.get<SummonerInfoType>('/summoner', { params: summonerName })
  console.log(res.data)
  return res.data
}
