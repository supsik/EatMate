import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const activeTab = ref('main')

  const setTab = (param: string) => activeTab.value = param

  return { activeTab, setTab }
})