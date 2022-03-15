export type Movie = {
  id: string
  title: string
  original_title: string
  description: string
  image: string
  movie_banner: string
  people: string[]
}

export async function getMovies() {
  const response = await fetch('https://ghibliapi.herokuapp.com/films')
  const movies: Movie[] = await response.json()

  return movies
}
