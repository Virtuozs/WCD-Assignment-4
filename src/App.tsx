import Hero from './components/sections/hero'
import About from './components/sections/about'
import Work from './components/sections/work'

function App() {
  return (
    <>
      <main className='scroll-smooth overflow-y-hidden'>
        <Hero />
        <About />
        <Work />
      </main>
    </>
  )
}

export default App
