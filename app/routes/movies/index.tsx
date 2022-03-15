import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { getMovies, Movie } from '~/api/movies'

export const meta: MetaFunction = () => {
  return { title: 'Movies | Studio Ghibli', description: 'Studio Ghibli List of Movies' }
}

export const loader: LoaderFunction = async () => {
  return getMovies()
}

// Client Side
export default function MoviesIndex() {
  const movies = useLoaderData<Movie[]>()

  return (
    <div className='p-16'>
      <h1 className='mb-12 text-5xl font-semibold text-center'>Movies</h1>

      <div className='grid grid-cols-4 gap-4'>
        {movies.map(movie => (
          <div
            key={movie.id}
            className='cursor-pointer hover:shadow-2xl hover:scale-105 hover:font-bold'
          >
            <h2 className='text-2xl'>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
          </div>
        ))}
      </div>
    </div>
  )
}
