import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <div className="bg-[#F7FAFC] dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300">
      <Header />
      <Home />
    </div>
  )
}

export default App