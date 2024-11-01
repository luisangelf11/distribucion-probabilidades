import { IData } from '@/interface/data'
import { create } from 'zustand'

type Store = {
  data: IData[] | []
  add: (value: IData) => void
  clear: ()=> void
  removeItem: (id: number)=>void
}

export const useStore = create<Store>()((set) => ({
  data: [],
  add: (value) => set((state)=> ({data: [...state.data, value]})),
  clear: ()=> set({data: []}),
  removeItem: (id: number) => set((state)=>{
    const newState = state.data.filter(el => el.id !== id)
    return ({data: newState})
  })
}))