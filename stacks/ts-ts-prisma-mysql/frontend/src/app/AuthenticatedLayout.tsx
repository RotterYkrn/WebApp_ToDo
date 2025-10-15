// AuthenticatedLayout.tsx
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const AuthenticatedLayout: React.FC = () => {
	return (
		<div className="app-layout">
			<Header />
			<main className="app-main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default AuthenticatedLayout;
