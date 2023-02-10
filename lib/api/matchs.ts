import client from './common'

export const getMatchsToAxios = async () => {
  const res = await client.get<SummonerMatchsType[]>('/matchs')
  return res.data
}
