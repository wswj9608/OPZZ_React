import IconSearch from './icon-search.svg'
import IconArrowDown from './icon-arrow-down.svg'
import IconBaron from './icon-baron.svg'
import IconDragon from './icon-dragon.svg'
import IconTower from './icon-tower.svg'
import IconPositionTop from './icon-position-top.svg'
import IconPositionJungle from './icon-position-jungle.svg'
import IconPositionMid from './icon-position-mid.svg'
import IconPositionAdc from './icon-position-adc.svg'
import IconPositionSupport from './icon-position-support.svg'

export const IconSearchSvg = () => {
  return <IconSearch />
}

export const IconArrowDownSvg = ({ fill }: { fill: string }) => {
  return <IconArrowDown fill={fill} />
}

export const IconBaronSvg = ({ fill }: { fill: string }) => {
  return <IconBaron fill={fill} />
}

export const IconDragonSvg = ({ fill }: { fill: string }) => {
  return <IconDragon fill={fill} />
}

export const IconTowerSvg = ({ fill }: { fill: string }) => {
  return <IconTower fill={fill} />
}

export const IconPosition = ({ line }: { line: string }) => {
  if (line === 'TOP') return <IconPositionTop />
  if (line === 'JUNGLE') return <IconPositionJungle />
  if (line === 'MIDDLE') return <IconPositionMid />
  if (line === 'ADC') return <IconPositionAdc />
  return <IconPositionSupport />
}
