import { ref, watchEffect } from 'vue'

export default function useFetchSearch(url, searchTerm) {
  const API_URL = url
  const data = ref(null)
  console.log(searchTerm)
  watchEffect(async () => {
    const fetchUrl = `${API_URL}${searchTerm}`
    const response = await fetch(fetchUrl)
    const json = await response.json()
    data.value = json.items
  })

  return { data }
}
