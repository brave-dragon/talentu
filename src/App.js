import './App.css';
import Sidebar from './Components/Sidebar';
import Menu from './Components/Menu';
import PageContent from './Components/PageContent';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="right-side">
        <Menu />
        <PageContent />
      </div>
    </div>
  );
}

export default App;
