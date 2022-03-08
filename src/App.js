import { useState } from 'react'
import './App.css';
import Content from './Content';

function App() {
	const [toggle, setToggle] = useState(false)

	return (
		<div>
			<button onClick={() => setToggle(!toggle)}>Toggle</button>
			{toggle && <Content />}
		</div>
	)
}

export default App;