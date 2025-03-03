import App from '@/components/App'
import { Shop } from '@/pages/shop'
import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
	{
		path: '/shop',
		element: <App />,
		children: [
			{
				path: '/shop/main',
				element: (
					<Suspense fallback={'Loading...'}>
						<Shop />
					</Suspense>
				),
			},
			{
				path: '/shop/second',
				element: (
					<Suspense fallback={'Loading...'}>
						<div style={{ color: 'red' }}>
							<h1>second page</h1>
						</div>
					</Suspense>
				),
			},
		],
	},
]

export const router = createBrowserRouter(routes)

export default routes
