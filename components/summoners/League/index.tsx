import { useSummonerLeagues } from '@/atoms/summoners'
import React from 'react'
import styled from 'styled-components'
import { emblems } from '@/assets/images'
import { Text } from '@/elements'
import Image from 'next/image'
import { gray } from '@/styles/palette'
import { LeagueProps, RankType, TierType } from './types'

type ModuleType = typeof emblems

const emblemGenerator = <K extends keyof ModuleType>(tier: K): ModuleType[K] => {
  return emblems[tier]
}

const League = ({ data }: LeagueProps) => {
  const { wins, losses, leaguePoints, queueType } = data
  const winningRate = ((wins / (wins + losses)) * 100).toFixed()

  const isSoloRank = queueType === 'RANKED_SOLO_5x5'
  const imageSize = isSoloRank ? 72 : 40

  const getLeagueString = () => {
    const { tier, rank } = data
    const tierString = tier.toLowerCase().replace(/^[a-z]/, char => char.toUpperCase())

    const rankString = () => {
      if (rank === 'I') return '1'
      if (rank === 'II') return '2'
      if (rank === 'III') return '3'
      return '4'
    }

    return `${tierString} ${rankString()}`
  }

  return (
    <LeagueWrapper>
      <div className="header">
        <Text>{isSoloRank ? '솔로랭크' : '자유랭크'}</Text>
      </div>
      <LeagueState imageSize={imageSize} isSoloRank={isSoloRank}>
        <div className="emblem">
          <Image src={emblemGenerator(data.tier)} width={imageSize} height={imageSize} />
        </div>

        <div className="tier">
          <Text color={gray[900]} size={isSoloRank ? '20px' : '14px'} weight="bold">
            {getLeagueString()}
          </Text>
          <Text color={gray[500]} size="12px">
            {`${leaguePoints}LP`}
          </Text>
        </div>
        <div className="win-lose">
          <Text>{`${wins}승 ${losses}패`}</Text>
          <Text>{`승률 ${winningRate}%`}</Text>
        </div>
      </LeagueState>
    </LeagueWrapper>
  )
}

const LeagueWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #31313c;

  .header {
    height: 35px;
    padding: 0 12px;

    p {
      line-height: 35px;
      font-size: 12px;
      color: ${gray[900]};
    }
  }

  &:first-child {
    margin-bottom: 8px;
  }
`

const LeagueState = styled.div<{ imageSize: number; isSoloRank: boolean }>`
  display: flex;
  padding: 12px;
  box-sizing: border-box;
  border-top: 1px solid ${gray[200]};
  align-items: center;

  .emblem {
    min-width: ${({ imageSize }) => imageSize}px;
    width: ${({ imageSize }) => imageSize}px;
    height: ${({ imageSize }) => imageSize}px;
    border-radius: 50%;
    background-color: ${gray[100]};
    padding: ${({ isSoloRank }) => (isSoloRank ? '12px' : '4px')};
    box-sizing: border-box;
  }

  .tier {
    margin-left: ${({ isSoloRank }) => (isSoloRank ? '16px' : '8px')};
    width: 100%;

    p {
      &:last-child {
        margin-top: 2px;
      }
    }
  }

  .win-lose {
    min-width: fit-content;
    p {
      color: ${gray[400]};
      font-size: 12px;

      &:last-child {
        margin-top: 2px;
      }
    }
  }
`

export default League
