import React from 'react'

import { Route, Switch, HashRouter as Router } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Contact, Home, Products } from './pages'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/products/:category' component={Products} />
					<Route exact path='/contact' component={Contact} />
				</Switch>
				<Footer />
			</div>
		</Router>
	)
}

export default App
