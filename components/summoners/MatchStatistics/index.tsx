import { Text } from '@/elements'
import { gray } from '@/styles/palette'
import styled from 'styled-components'

const MatchStatistics = () => {
  return (
    <StatisticsWrapper>
      <div>
        <Text>20전 10승 9패</Text>
        <div>
          <div className="chart" />
          <div>
            <Text>5.1 / 6.1 / 7.2</Text>
            <Text>2.02:1</Text>
            <Text>킬관여 48%</Text>
          </div>
        </div>
      </div>
      <div>
        <Text>플레이한 챔피언 (최근 20게임)</Text>
        <div>
          <div />
          <div>
            <Text>50%</Text>
            <Text>(3승 3패)</Text>
            <Text>1.4 평점</Text>
          </div>
        </div>
        <div>
          <div />
          <div>
            <Text>50%</Text>
            <Text>(3승 3패)</Text>
            <Text>1.4 평점</Text>
          </div>
        </div>
        <div>
          <div />
          <div>
            <Text>50%</Text>
            <Text>(3승 3패)</Text>
            <Text>1.4 평점</Text>
          </div>
        </div>
      </div>
      <div>
        <Text>선호 포지션 (랭크)</Text>
        <div>
          <div>
            <div className="line-icon" />
            <div className="bar" />
          </div>
          <div>
            <div className="line-icon" />
            <div className="bar" />
          </div>
          <div>
            <div className="line-icon" />
            <div className="bar" />
          </div>
          <div>
            <div className="line-icon" />
            <div className="bar" />
          </div>
          <div>
            <div className="line-icon" />
            <div className="bar" />
          </div>
        </div>
      </div>
    </StatisticsWrapper>
  )
}

const StatisticsWrapper = styled.div`
  width: 100%;
  padding: 24px 21px;
  background-color: ${gray[500]};
  box-sizing: border-box;

  display: flex;
`

const RecordStatistics = styled.div``

const PlayedChampion = styled.div``

const PreferredPosition = styled.div``

export default MatchStatistics
