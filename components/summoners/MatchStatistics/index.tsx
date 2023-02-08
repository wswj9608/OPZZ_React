import { Text } from '@/elements'
import { blue, gray, red } from '@/styles/palette'
import styled from 'styled-components'

const MatchStatistics = () => {
  return (
    <StatisticsWrapper>
      <RecordStatistics>
        <Text>20전 10승 9패</Text>
        <div className="statistics">
          <div className="chart" />
          <div className="kda-statistics">
            <Text>
              5.1 / <span style={{ color: red[600] }}>6.1</span> / 7.2
            </Text>
            <Text size="20px" weight="bold" color={gray[900]}>
              2.02:1
            </Text>
            <Text color={red[600]}>킬관여 48%</Text>
          </div>
        </div>
      </RecordStatistics>
      <PlayedChampion>
        <Text>플레이한 챔피언 (최근 20게임)</Text>
        <div className="container">
          <ChampStatistics>
            <div className="champ-icon" />
            <div className="statistics">
              <Text color={red[600]}>50%</Text>
              <Text color={gray[400]}>(3승 3패)</Text>
              <Text>1.4 평점</Text>
            </div>
          </ChampStatistics>
          <ChampStatistics>
            <div className="champ-icon" />
            <div className="statistics">
              <Text color={red[600]}>50%</Text>
              <Text color={gray[400]}>(3승 3패)</Text>
              <Text>1.4 평점</Text>
            </div>
          </ChampStatistics>
          <ChampStatistics>
            <div className="champ-icon" />
            <div className="statistics">
              <Text color={red[600]}>50%</Text>
              <Text color={gray[400]}>(3승 3패)</Text>
              <Text>1.4 평점</Text>
            </div>
          </ChampStatistics>
        </div>
      </PlayedChampion>
      <PreferredPosition>
        <Text>선호 포지션 (랭크)</Text>
        <div className="container">
          <div>
            <div className="bar" />
            <div className="line-icon" />
          </div>
          <div>
            <div className="bar" />
            <div className="line-icon" />
          </div>
          <div>
            <div className="bar" />
            <div className="line-icon" />
          </div>
          <div>
            <div className="bar" />
            <div className="line-icon" />
          </div>
          <div>
            <div className="bar" />
            <div className="line-icon" />
          </div>
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
    width: 88px;
    height: 88px;
    border-radius: 50%;
    background-color: ${blue[500]};
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

    background-color: ${blue[400]};
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

  .bar {
    width: 16px;
    height: 64px;
    background-color: ${red[500]};
  }
`

export default MatchStatistics
