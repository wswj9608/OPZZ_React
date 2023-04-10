/* eslint-disable */
import client from './common'

export const getLeaguesToAxios = async () => {
  const res = await client.get<LeagueDataType[]>('/leagues')
  return res.data
}
