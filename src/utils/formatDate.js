export default function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}