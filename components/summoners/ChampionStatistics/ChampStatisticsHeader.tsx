import { Button } from '@/elements'
import { gray } from '@/styles/palette'
import styled from 'styled-components'

const categories = [
  {
    id: 0,
    name: 's2023 전체',
  },
  {
    id: 1,
    name: '솔로랭크',
  },
  {
    id: 2,
    name: '자유랭크',
  },
]

const ChampStatisticsHeader = () => {
  return (
    <HeaderWrapper>
      <div className="categorise">
        {categories.map(category => (
          <Button key={category.id} className="categorise__category-button" buttonType="category">
            {category.name}
          </Button>
        ))}
      </div>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  background-color: ${gray[0]};
  padding: 5px 4px 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${gray[200]};
  border-radius: 4px 4px 0 0;

  .categorise {
    display: flex;
    gap: 4px;
    width: 100%;

    &__category-button {
      flex: 1;
      height: 27px;
    }
  }
`

export default ChampStatisticsHeader
