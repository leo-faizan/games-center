import Image from 'next/image'
import Header from './header'
import List from './list'

export default function Home() {
  return (
    <div className='min-h-screen p-10'>
      <Header />
      <List />
    </div>
  )
}
