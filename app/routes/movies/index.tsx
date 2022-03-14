import { MetaFunction } from 'remix'

export const meta: MetaFunction = () => {
  return { title: 'Movies | Studio Ghibli', description: 'Studio Ghibli List of Movies' }
}

export default function MoviesIndex() {
  return <h1 className='text-4xl font-semibold'>Movies</h1>
}
