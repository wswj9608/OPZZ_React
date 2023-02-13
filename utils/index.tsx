export const COMMUNITY_DRAGON_URL =
  'https://raw.communitydragon.org/12.19/plugins/rcp-be-lol-game-data/global/default/v1'

export const getPrimaryPerk = (primaryPerks: PrimaryPerkType[], perkId: number) => {
  return primaryPerks.find(perk => perk.perk_id === perkId)
}
