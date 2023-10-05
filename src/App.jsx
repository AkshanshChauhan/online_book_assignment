import './App.css'
import Search from './components/search/search'
import Result from './components/result/result'
import Filters from './components/filters/filters'
function App() {
  return (
    <div className="app">
      <Search />
      <Filters />
      <Result />
    </div>
  )
}

export default App
