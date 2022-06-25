export async function getFeaturedDataOf(type) {
  const response = await fetch(`https://eriandev.github.io/api/erianvc/${type}/featured/`)
  return await response.json()
}
