import { Outlet } from 'react-router-dom';
import MenuDropdown from '../components/Block-nav-menu';
import BlockFooter from '../components/Block-footer';

export default function MainLayout() {
  return (
    <>
      <MenuDropdown />
      <main>
        <Outlet />
      </main>
      <BlockFooter title="&copy; Footer - 2025 Iván Arasco Millán" />
    </>
  );
}
