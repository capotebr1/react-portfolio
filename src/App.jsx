import './App.scss'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/About/About'
import SideBar from './components/Sidebar/SideBar'
import Layout from './components/Layout/Layout'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={ <Layout/> }>
					<Route index element={<Home/>} />
					<Route path='/about' element={ <About/> } />
					<Route path='/study' element={ <Skills/> } />
					<Route path='/tech' element={ <Projects/> } />
				</Route>
			</Routes>
		</>
	)
}

export default App
