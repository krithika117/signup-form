import './App.css';
import SignUpClassComponent from './components/SignUpClassComponent/SignUpClassComponent';
import SignUpFunctionalComponent from './components/SignUpFunctionalComponent/SignUpFunctionalComponent';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={< SignUpClassComponent />}/>
                            <Route path="/signup" element={< SignUpFunctionalComponent />}/>
                        </Routes>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;
