import { useParams } from 'remix'

export default function DynamicChild() {
  const { someId } = useParams()

  return <h1 className='text-4xl font-semibold'>I'm dynamic {someId}</h1>
}
