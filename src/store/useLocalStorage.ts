// useSavedData.ts
import { useLocalStorage } from '@vueuse/core'

export function useSavedVideos<T>(key: string, defaultValue: T) {
  return useLocalStorage<T>(key, defaultValue)
}
