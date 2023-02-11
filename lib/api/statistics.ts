import client from './common'

export const getStatisticsToAxios = async () => {
  const res = await client.get('/statistics')

  return res.data
}

export const getChampionStatisticsToAxios = async () => {
  const res = await client.get('champions')

  return res.data
}
