import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getSearchSummoner, getSummonerProfileToAxios } from '@/lib/api/summoner'
import { useLeaguesSelector, useSearchSummonerState, useSummonerLeagues, useSummonerMatchs } from '@/atoms/summoners'
import SummonerProfile from '@/components/summoners/SummonerProfile'
import Matchs from '@/components/summoners/Matchs'
import League from '@/components/summoners/League'
import matchDb from '@/@fake-db'
import MatchStatistics from '@/components/summoners/MatchStatistics'
import { getLeaguesToAxios } from '@/lib/api/leagues'
import ChampionStatistics from '@/components/summoners/ChampionStatistics'
import MatchHeader from '@/components/summoners/Matchs/MatchHeader'

const Summoners = () => {
  const { query, isReady } = useRouter()
  const { summonerName } = query
  // const [summonerLeagues, setSummonerLeagues] = useSummonerLeagues()
  const [, setSearchSummonerState] = useSearchSummonerState()

  // const getLeagues = async () => {
  //   const res = await getLeaguesToAxios()
  //   setSummonerLeagues(res)
  // }
  console.log(summonerName)

  const searchSummoner = async () => {
    const res = await getSearchSummoner(summonerName as string)
    setSearchSummonerState(res)
  }

  useEffect(() => {
    if (!isReady) return

    searchSummoner()
  }, [isReady])
  // const matchData = matchDb()

  return (
    <SummonersWrapper>
      <SummonerProfile />
      <UserHistoryWrappser>
        <div className="user-info">
          <League queueType="RANKED_SOLO_5x5" />
          <League queueType="RANKED_FLEX_SR" />
          <ChampionStatistics />
        </div>
        <div>
          <MatchHeader />
          <MatchStatistics />
          <Matchs />
        </div>
      </UserHistoryWrappser>
    </SummonersWrapper>
  )
}

const SummonersWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding-bottom: 40px;
  background: #1c1c1f;

  .user-info {
    width: 332px;
  }
`

const UserHistoryWrappser = styled.div`
  margin: 8px auto 0px;
  max-width: 1080px;
  display: flex;
  gap: 8px;
  height: calc(100% - 228px - 8px);
`

export default Summoners
