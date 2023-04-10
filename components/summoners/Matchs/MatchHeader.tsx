import { Button } from '@/elements'
import { gray } from '@/styles/palette'
import Image from 'next/image'
import styled from 'styled-components'
import { IconSearchSvg } from '@/assets/images/icons'
import { useMatchStatisticsSelector } from '@/atoms/summoners'

const categories = [
  {
    id: 0,
    name: '전체',
  },
  // {
  //   id: 1,
  //   name: '솔로랭크',
  // },
  // {
  //   id: 2,
  //   name: '자유랭크',
  // },
]

const MatchHeader = () => {
  const statistics = useMatchStatisticsSelector()

  if (!statistics) return null

  return (
    <HeaderWrapper>
      <div className="categorise">
        {categories.map(category => (
          <Button key={category.id} className="categorise__category-button" buttonType="category">
            {category.name}
          </Button>
        ))}
        {/* <Button buttonType="category">큐타입</Button> */}
      </div>
      {/* <ChampionSearchInput>
        <IconSearchSvg />
        <input placeholder="챔피언 검색" />
      </ChampionSearchInput> */}
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  background-color: ${gray[0]};
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${gray[200]};
  border-radius: 4px 4px 0 0;

  .categorise {
    display: flex;
    gap: 4px;

    &__category-button {
      height: 27px;
    }
  }
`

const ChampionSearchInput = styled.div`
  background-color: ${gray[200]};
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;

  .icon {
    width: 24px;
    height: 24px;
  }

  input {
    font-size: 12px;
  }
`

export default MatchHeader
