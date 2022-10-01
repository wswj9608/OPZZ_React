import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getSummonerInfo } from "../../lib/api/summoner"

const Summoners = () => {
  const { query, isReady } = useRouter()
  const { summonerName } = query
  const [summoner, setSummoner] = useState<string>()

  const getSummoner = async () => {
    const res = await getSummonerInfo({ summonerName })
    setSummoner(res)
  }

  console.log(isReady)

  useEffect(() => {
    if (!summonerName) return
    if (!isReady) return

    console.log("summoner ====>", summoner)
    console.log("summonerName ====>", summonerName)
    getSummoner()
  }, [summonerName, isReady])

  if (!isReady) return null

  return <div>tqtqtqtqtqtqttqt</div>
}

export default Summoners
