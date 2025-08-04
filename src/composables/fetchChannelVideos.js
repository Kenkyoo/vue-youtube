import { ref, watchEffect } from 'vue'

export default function fetchChannelVideos(url, playlistId) {
    const data = ref(null)

    watchEffect(async () => {
        const id = playlistId?.value || ''
        if (!id) return // espera a que haya un valor válido

        const fetchUrl = `${url}${id}`
        const response = await fetch(fetchUrl)
        const json = await response.json()
        data.value = json.items
    })

    return { data }
}
