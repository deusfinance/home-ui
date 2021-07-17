import { LoopCircleLoading } from 'react-loadingg'
import dynamic from 'next/dynamic'

const Loading = () => <LoopCircleLoading />
Loading.displayName = "Loading"

const Main = dynamic(
  () => import('../components/Main'), 
  {loading : Loading , ssr: false})

const Home = function Home() {
  return (
    <div>
      <Main />
    </div>
  )
}

export default Home
