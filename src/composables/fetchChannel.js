import { ref, watchEffect } from 'vue'

export default function useFetchChannel(channelIdRef) {
    const endpoint = 'channels?part=snippet,statistics,contentDetails'
    const channel = ref(null)

    watchEffect(async () => {
        if (!channelIdRef.value) return // evitar error si es null
        const url = `${import.meta.env.VITE_BASE_URL}${endpoint}&id=${channelIdRef.value}&key=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const json = await response.json()
        channel.value = json.items[0]
    })

    return channel
}
