import { Form, Link, LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import { getMovies, Movie } from '~/api/movies'

export const meta: MetaFunction = () => {
  return { title: 'Movies | Studio Ghibli', description: 'Studio Ghibli List of Movies' }
}

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url)
  const title = url.searchParams.get('title') ? url.searchParams.get('title') : null

  return getMovies(title)
}

// Client Side
export default function MoviesIndex() {
  const movies = useLoaderData<Movie[]>()

  return (
    <div className='p-16'>
      <h1 className='mb-12 text-5xl font-semibold text-center'>Movies</h1>

      <Form reloadDocument className='my-5 block'>
        <label htmlFor='title' className='font-bold'>
          Search{' '}
          <input
            type='search'
            name='title'
            id='title'
            className='border-2 border-gray-50 text-gray-900 bg-gray-300 rounded py-2 px-3 ml-2'
          />
        </label>

        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2 border-2 border-blue-500 hover:border-blue-700'
        >
          Search
        </button>
      </Form>

      <div className='grid grid-cols-4 gap-4 mt-10'>
        {movies.map(movie => (
          <Link
            to={movie.id}
            key={movie.id}
            className='cursor-pointer hover:shadow-2xl hover:scale-105 hover:font-bold'
          >
            <h2 className='text-2xl'>{movie.title}</h2>
            <img src={movie.image} alt={movie.title} />
          </Link>
        ))}
      </div>
    </div>
  )
}
