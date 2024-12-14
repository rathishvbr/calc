import GroovyWalkAnimation from '@/components/lotties/groovy-walk-animation';
import { NavBar } from '@/components/nav-bar/nav-bar'

function App() {
  return (
    <>
      <NavBar />
      <div className='flex justify-center items-center h-[90vh]'>
        <GroovyWalkAnimation />
      </div>
    </>
  )
}

export default App
