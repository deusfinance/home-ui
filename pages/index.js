import { LoopCircleLoading } from 'react-loadingg'
import dynamic from 'next/dynamic'

const Main = dynamic(() => import('../components/Main'), {loading: () => <LoopCircleLoading />, ssr: false})

export default function Home() {
  return (
      <Main />
  )
}
