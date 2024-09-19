import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Logo from './assets/images/logo.png';
import HomeDashboard from './components/Homedashboard';

export const AppRouter = ({ patientId }) => {
  return (
    <Router>
      <div className='min-h-screen bg-gray-100'>
        <nav className='bg-purple-500 text-white p-4'>
          <div className='container mx-auto'>
            <Link to='/' className='flex text-2xl font-bold gap-2'>
              <img className='mb-[-5px]' src={Logo} alt='logo' width={32} height={32} />
              Cancer Patient Support
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path='/'>
            <HomeDashboard />
          </Route>
          <Route exact path='/patientdashboard'>
            <Dashboard patientId={patientId} />
          </Route>
          {/* Add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
};
