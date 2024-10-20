import { ConnectButton } from '@rainbow-me/rainbowkit'

const Home = () => {
  return (
    <div className=' w-full h-screen flex flex-col items-center pt-20'>
        <span className='text-xl font-extralight'>Connect Here:</span>
        <ConnectButton/>
    </div>
  )
}

export default Home