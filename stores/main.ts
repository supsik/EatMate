import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
  const userData = ref()

  const setUserData = (param: string) => userData.value = param

  return { setUserData, userData }
})