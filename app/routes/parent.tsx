import { Outlet } from 'remix'

export default function ParentLayout() {
  return (
    <div className='p-10'>
      <Outlet />
    </div>
  )
}
