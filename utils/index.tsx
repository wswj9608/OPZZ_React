import { perkIcons } from '@/assets/images/perkIcons'

export const COMMUNITY_DRAGON_URL =
  'https://raw.communitydragon.org/12.19/plugins/rcp-be-lol-game-data/global/default/v1'

export const perkIcon = (perkId: number) => {
  return perkIcons[perkId]
}
