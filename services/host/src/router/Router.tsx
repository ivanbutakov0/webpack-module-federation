import { App } from '@/components/App'
import adminRoutes from 'admin/Router'
import { createBrowserRouter } from 'react-router-dom'
import shopRoutes from 'shop/Router'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [...shopRoutes, ...adminRoutes],
	},
])
