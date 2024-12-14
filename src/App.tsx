import RupeeFullLoader from '@/components/lotties/rupee-full-loader';
import { NavBar } from '@/components/nav-bar/nav-bar'

function App() {
  return (
    <>
      <NavBar />
      <main className='h-[calc(100vh-64px)] flex justify-center items-center w-full'>
        <div className='w-64 h-64'>
          <RupeeFullLoader />
        </div>
      </main>
    </>
  )
}

export default App
