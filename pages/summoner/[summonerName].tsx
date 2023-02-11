import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { getSummonerProfileToAxios } from '@/lib/api/summoner'
import { useSummonerLeagues, useSummonerMatchs } from '@/atoms/summoners'
import SummonerProfile from '@/components/summoners/SummonerProfile'
import Matchs from '@/components/summoners/Matchs'
import League from '@/components/summoners/League'
import matchDb from '@/@fake-db'
import MatchStatistics from '@/components/summoners/MatchStatistics'
import { getLeaguesToAxios } from '@/lib/api/leagues'
import ChampionStatistics from '@/components/summoners/ChampionStatistics'
import MatchHeader from '@/components/summoners/Matchs/MatchHeader'

const Summoners = () => {
  const [summonerLeagues, setSummonerLeagues] = useSummonerLeagues()

  const getLeagues = async () => {
    const res = await getLeaguesToAxios()
    setSummonerLeagues(res)
  }

  useEffect(() => {
    getLeagues()
  }, [])
  // const matchData = matchDb()

  return (
    <SummonersWrapper>
      <SummonerProfile />
      <UserHistoryWrappser>
        <div className="user-info">
          {summonerLeagues?.map(league => (
            <League key={league.queueType} data={league} />
          ))}
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
