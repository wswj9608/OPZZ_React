import { useLeaguesSelector } from '@/atoms/summoners'
import React from 'react'
import styled from 'styled-components'
import { emblems } from '@/assets/images'
import { Text } from '@/elements'
import Image from 'next/image'
import { gray } from '@/styles/palette'
import { LeagueProps } from './types'

type ModuleType = typeof emblems

const emblemGenerator = <K extends keyof ModuleType>(tier: K): ModuleType[K] => {
  return emblems[tier]
}

const League = ({ queueType }: LeagueProps) => {
  const leagues = useLeaguesSelector()

  if (!leagues) return null

  const idx = leagues.findIndex(league => league.queueType === queueType)

  const targetLeague = leagues[idx]

  const isSoloRank = queueType === 'RANKED_SOLO_5x5'
  const winningRate = ((targetLeague.wins / (targetLeague.wins + targetLeague.losses)) * 100).toFixed()

  const imageSize = isSoloRank ? 72 : 40

  const getLeagueString = () => {
    const tierString = targetLeague?.tier.toLowerCase().replace(/^[a-z]/, char => char.toUpperCase())

    const rankString = () => {
      const { rank } = targetLeague

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
        <Text color={gray[900]}>{isSoloRank ? '솔로랭크' : '자유랭크'}</Text>
        {!targetLeague && (
          <Text color={gray[300]} weight="bold">
            Unranked
          </Text>
        )}
      </div>
      {targetLeague && (
        <LeagueState imageSize={imageSize} isSoloRank={isSoloRank}>
          <div className="emblem">
            <Image src={emblemGenerator(targetLeague.tier)} width={imageSize} height={imageSize} alt="emblem" />
          </div>

          <div className="tier">
            <Text color={gray[900]} size={isSoloRank ? '20px' : '14px'} weight="bold">
              {getLeagueString()}
            </Text>
            <Text>{`${targetLeague.leaguePoints}LP`}</Text>
          </div>
          <div className="win-lose">
            <Text>{`${targetLeague.wins}승 ${targetLeague.losses}패`}</Text>
            <Text>{`승률 ${winningRate}%`}</Text>
          </div>
        </LeagueState>
      )}
    </LeagueWrapper>
  )
}

const LeagueWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #31313c;
  margin-bottom: 8px;

  .header {
    height: 35px;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;

    p {
      line-height: 35px;
      font-size: 14px;
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

    img {
    }
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
