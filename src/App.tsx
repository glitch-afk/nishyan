import Sidebar from './components/Sidebar'
import Header from '#components/Header'
import MainContent from '#components/MainContent'

const App = () => {
  return (
    <>
      <Sidebar />
      <main className="w-full xl:pl-[224px]">
        <Header />
        <MainContent />
      </main>
    </>
  )
}

export default App
