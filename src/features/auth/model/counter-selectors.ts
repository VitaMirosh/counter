import type {RootState} from '../../../app/store.ts';


export type CountType = {
  count: number
  message: string
  min:number
  max:number
}
export const selectCounter = (state:RootState): CountType => state.counter