import { atom, useRecoilState } from "recoil"

export const summonerInfoState = atom<SummonerInfoType | null>({
  key: "summonerInfoState",
  default: null,
})

export const useSummonerInfoState = () => {
  return useRecoilState(summonerInfoState)
}
