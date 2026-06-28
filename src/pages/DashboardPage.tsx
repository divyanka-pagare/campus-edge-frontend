import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../store/authStore';

export default function DashboardPage() {
  const navigate = useNavigate();
  const { name, email, role, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Welcome, {name} 👋</h1>
            <p className="text-sm text-slate-500 mt-1">{email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="text-sm text-red-600 font-medium hover:underline"
          >
            Log out
          </button>
        </div>

        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
          <p className="text-sm text-indigo-900">
            <span className="font-medium">Role:</span> {role}
          </p>
        </div>

        <p className="text-slate-500 text-sm mt-6">
          This is your dashboard. Experience wall, mentorship, and more are coming next.
        </p>
      </div>
    </div>
  );
}