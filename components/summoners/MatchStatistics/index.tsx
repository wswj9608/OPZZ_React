import { useMatchStatisticsSelector } from '@/atoms/summoners'
import { Text } from '@/elements'
import { blue, gray, main, red } from '@/styles/palette'
import styled from 'styled-components'
import { PieChart, Pie, Cell } from 'recharts'
import { IconPosition } from '@/assets/images/icons'
import Image from 'next/image'
import { kdaColor } from '@/utils'

const MatchStatistics = () => {
  const statistics = useMatchStatisticsSelector()

  const COLORS = [red[500], main[500]]

  if (!statistics) return null

  const {
    totalMatchNumber,
    totalWins,
    totalLosses,
    averageKills,
    averageDeaths,
    averageAssists,
    averageKda,
    killParticipationRate,
    playedChampions,
    playedPositions,
  } = statistics

  const data = [
    { name: 'losses', value: totalLosses },
    { name: 'wins', value: totalWins },
  ]

  type Position = 'TOP' | 'JUNGLE' | 'MIDDLE' | 'ADC' | 'SUPPORT'

  const positions: Position[] = ['TOP', 'JUNGLE', 'MIDDLE', 'ADC', 'SUPPORT']

  return (
    <StatisticsWrapper>
      <RecordStatistics>
        <Text>
          {totalMatchNumber}전 {totalWins}승 {totalLosses}패
        </Text>
        <div className="statistics">
          <div className="chart">
            <PieChart width={88} height={88}>
              <Pie
                data={data}
                startAngle={90}
                endAngle={450}
                labelLine={false}
                innerRadius={29}
                outerRadius={43}
                stroke="none"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
            <Text className="percent" size="14px" color={main[500]}>
              <strong>{Math.round((totalWins / totalMatchNumber) * 100)}</strong>%
            </Text>
          </div>
          <div className="kda-statistics">
            <Text>
              {averageKills} / <span style={{ color: red[600] }}>{averageDeaths}</span> / {averageAssists}
            </Text>
            <Text size="20px" weight="bold" color={gray[900]}>
              {averageKda}:1
            </Text>
            <Text color={red[600]}>킬관여 {killParticipationRate}%</Text>
          </div>
        </div>
      </RecordStatistics>
      <PlayedChampion>
        <Text>플레이한 챔피언 (최근 {totalMatchNumber}게임)</Text>
        <div className="container">
          {playedChampions?.map(({ championIcon, win, loss, kda, winningRate }, idx) => {
            if (idx > 2) return null

            return (
              <ChampStatistics key={idx}>
                <Image className="champ-icon" src={championIcon} width={24} height={24} alt="champion" />
                <div className="statistics">
                  <Text color={winningRate > 50 ? red[600] : gray[600]}>{winningRate}%</Text>
                  <Text color={gray[400]}>
                    ({win}승 {loss}패)
                  </Text>
                  <Text color={kdaColor(kda)}>{kda} 평점</Text>
                </div>
              </ChampStatistics>
            )
          })}
        </div>
      </PlayedChampion>
      <PreferredPosition>
        <Text>선호 포지션 (랭크)</Text>
        <div className="container">
          {positions.map(position => (
            <div key={position}>
              <Bar height={Math.round((playedPositions[position] / totalMatchNumber) * 100)}>
                <div className="played-line" />
              </Bar>
              <IconPosition line={position} />
            </div>
          ))}
        </div>
      </PreferredPosition>
    </StatisticsWrapper>
  )
}

const StatisticsWrapper = styled.div`
  width: 100%;
  padding: 24px 21px;
  background-color: ${gray[0]};
  box-sizing: border-box;
  border-radius: 0 0 4px 4px;

  display: flex;
`

const RecordStatistics = styled.div`
  flex: 1;

  .statistics {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-top: 12px;
  }

  .kda-statistics {
    p {
      margin-bottom: 2px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .chart {
    position: relative;
    width: 88px;
    height: 88px;

    .percent {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

const PlayedChampion = styled.div`
  flex: 1;

  .container {
    margin-top: 12px;
  }
`

const ChampStatistics = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }

  .champ-icon {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  .statistics {
    display: flex;
    gap: 4px;

    p {
      font-size: 11px;
    }
  }
`

const PreferredPosition = styled.div`
  flex: 1;
  text-align: center;

  .container {
    margin-top: 12px;
    display: flex;
    justify-content: space-around;
  }

  .line-icon {
    width: 16px;
    height: 16px;
    background-color: ${blue[600]};
    margin-top: 8px;
  }
`

const Bar = styled.div<{ height: number }>`
  position: relative;
  width: 16px;
  height: 64px;
  background-color: ${gray[250]};
  margin-bottom: 8px;

  .played-line {
    width: 16px;
    height: ${({ height }) => height}%;
    bottom: 0;
    left: 0;
    position: absolute;
    background-color: ${blue[500]};
  }
`

export default MatchStatistics
