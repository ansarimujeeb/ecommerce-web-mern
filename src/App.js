import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './component/Header';

function App() {
    return (
        <h1 className="bg-red-500">
            <Header />
            <main className="pt-16 bg-slate-100 min-h-[calc(100vh)]">
                <Outlet />
            </main>
        </h1>
    );
}

export default App;
