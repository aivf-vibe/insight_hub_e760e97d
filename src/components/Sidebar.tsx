import Link from 'next/link';
import { HomeIcon, ChartBarIcon, CurrencyDollarIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: HomeIcon, href: '/' },
    { name: 'Portfolio', icon: ChartBarIcon, href: '/portfolio' },
    { name: 'Transactions', icon: CurrencyDollarIcon, href: '/transactions' },
    { name: 'Reports', icon: DocumentTextIcon, href: '/reports' },
    { name: 'Settings', icon: CogIcon, href: '/settings' },
  ];

  return (
    <div className="flex flex-col w-64 bg-white h-screen border-r">
      <div className="p-4 border-b">
        <h1 className="text-2xl font-bold text-gray-800">Insight Hub</h1>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href} 
                    className="flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100">
                <item.icon className="w-6 h-6 mr-3" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;