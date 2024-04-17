

import { Suspense } from 'react'

import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import { SideBar } from './components/sidebar'
import { Footer } from './components/footer'

import { useLocation } from 'react-router-dom';


function Drawer() {
	const location = useLocation();

	const isWatchRoute = location.pathname === '/watch';
	
	return (
		<div className="h-screen bg-white">
			<Header/>	

			<div className='flex'> 		
				{!isWatchRoute  && (
					<nav className='max-sm:hidden md:w-1/12 xl:w-2/12 3xl:w-2/12'>
						<SideBar/>	
					</nav>
	
				)}
			
				<body className={`sm:w-full md:w-11/12  ${isWatchRoute ? 'md:w-full xl:w-full 3xl:w-full' : 'xl:w-10/12 3xl:w-10/12 ' }`}>
					<Suspense fallback={<p>carregando...</p>}>
						<Outlet />
					</Suspense>
				</body>	

			</div>

			<div className='sm:hidden w-screen'>
				<Footer/>
			</div>


		
			
		</div>
	)
}

export default Drawer
