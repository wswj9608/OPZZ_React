import React, { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import { getSummonerInfo } from "../../lib/api/summoner"

const Summoners = () => {
  const router = useRouter()
  const { summonerName } = router.query
  const [summoner, setSummoner] = useState<string>()

  const getSummoner = useCallback(async () => {
    const res = await getSummonerInfo({ summonerName })
    setSummoner(res)
  }, [summonerName])

  useEffect(() => {
    if (!summonerName) return
    if (summoner) return
    getSummoner()
    console.log("111111")
    console.log(summonerName)
  }, [summonerName])

  return <div></div>
}

export default Summoners
