import { useSummonerChampionStatistics } from '@/atoms/summoners'
import { Text } from '@/elements'
import { blue, gray } from '@/styles/palette'
import styled from 'styled-components'
import ChampStatisticsHeader from './ChampStatisticsHeader'

const ChampionStatistics = () => {
  const [championStatistics] = useSummonerChampionStatistics()

  if (!championStatistics) return null

  return (
    <>
      <ChampStatisticsHeader />
      <StatisticsWrapper>
        {championStatistics.map((el, idx) => {
          if (idx > 6) return

          return (
            <div key={el.id} className="champion">
              <div className="champion__icon" />
              <div className="champion__name-minions">
                <Text weight="bold" color={gray[900]}>
                  {el.championName}
                </Text>
                <Text className="small">
                  CS {el.totalMinionsKilled} ({el.minionsPerMinute})
                </Text>
              </div>
              <div className="champion__kda">
                <Text weight="bold" color={gray[500]}>
                  {el.kda}:1 평점
                </Text>
                <Text className="small">
                  {el.averageKills} / {el.averageDeaths} / {el.averageAssists}
                </Text>
              </div>
              <div className="champion__winning-rate">
                <Text weight="bold" color={gray[500]}>
                  {el.winningRate}%
                </Text>
                <Text className="small">{el.totalMatchNumber}게임</Text>
              </div>
            </div>
          )
        })}
      </StatisticsWrapper>
    </>
  )
}

const StatisticsWrapper = styled.div`
  background-color: ${gray[0]};
  min-height: 200px;
  border-radius: 0 0 4px 4px;

  .champion {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 12px;
    border-bottom: 1px solid ${gray[200]};

    &__icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background-color: ${blue[900]};
    }

    &__name-minions {
      width: 100px;
      padding-left: 8px;
      box-sizing: border-box;
    }

    &__kda {
      width: 100px;
      text-align: center;
    }

    &__winning-rate {
      width: 88px;
      text-align: right;
    }

    .small {
      font-size: 11px;
      color: ${gray[400]};
    }
  }
`

export default ChampionStatistics
