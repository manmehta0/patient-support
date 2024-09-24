import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { PatientDashboard } from './pages/PatientDashboard';
import Logo from './assets/images/logo.png';
import HomeDashboard from './pages/HomeDashboard';

interface AppRouterProps {
  patientId: number;
}

export const AppRouter: React.FC<AppRouterProps> = ({ patientId }) => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="text-[#4d0060] bg-white p-4">
          <div className="container">
            <Link to="/" className="flex text-2xl font-bold gap-2">
              <img className="mb-[-5px]" src={Logo} alt="logo" width={32} height={32} />
              Cancer Patient Support
            </Link>
          </div>
        </nav>
        <Switch>
          <Route exact path="/">
            <HomeDashboard />
          </Route>
          <Route exact path="/patientdashboard">
            <PatientDashboard patientId={patientId} />
          </Route>
          {/* Add more routes here as needed */}
        </Switch>
      </div>
    </Router>
  );
};
