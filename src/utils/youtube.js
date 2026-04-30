export const extractYouTubeId = input => {
  if (!input) return ""
  const match = input.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/))?([A-Za-z0-9_-]{11})/
  )
  return match ? match[1] : ""
}
