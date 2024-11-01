export async function getRandomQuote(category) {
  let url = import.meta.env.VITE_API_URL
  if (category) url += `?category=${category}`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': import.meta.env.VITE_API_KEY
      }
    })

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`)

    const data = await response.json()
    return data[0]
  } catch (error) {
    console.error('Error fetching quote:', error)
    throw error
  }
}
