import Overview from './Overview'
import PaymentsTable from './PaymentsTable'

const MainContent = () => {
  return (
    <section className="min-h-screen w-full bg-offWhite px-8 py-9 text-night">
      <Overview />
      <PaymentsTable />
    </section>
  )
}

export default MainContent
