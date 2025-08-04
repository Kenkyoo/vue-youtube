import { ref, watchEffect } from 'vue'

export default function useFetchVideoDetails(videoIdRef) {
    const endpoint = 'videos?part=snippet%2CcontentDetails%2Cstatistics'
    const video = ref(null)

    watchEffect(async () => {
        if (!videoIdRef.value) return // evitar error si es null
        const url = `${import.meta.env.VITE_BASE_URL}${endpoint}&id=${videoIdRef.value}&key=${import.meta.env.VITE_API_KEY}`
        const response = await fetch(url)
        const json = await response.json()
        video.value = json.items[0]
    })

    return video
}
