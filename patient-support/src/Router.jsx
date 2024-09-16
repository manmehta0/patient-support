import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import Logo from './assets/images/logo.png';


export const AppRouter = ({ patientId }) => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/dashboard' />
        </Route>
        <Route exact path='/dashboard'>
          <Dashboard patientId={patientId} />
        </Route>
      </Switch>
      <div className='min-h-screen bg-gray-100'>
        <nav className='bg-blue-600 text-white p-4'>
          <div className='container mx-auto'>
            <Link to='/' className='text-2xl font-bold'>
              <image src={Logo} width={24} height={24} />
              Cancer Patient Support
            </Link>
          </div>
        </nav>
      </div>
    </Router>
  );
};
