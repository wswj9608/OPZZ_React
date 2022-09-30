import client from "./common"

export const getSummonerInfo = async (summonerName: any) => {
  console.log(summonerName)
  const res = await client.get("/summoner", { params: summonerName })
  return res.data
}
