import { shopRoutes } from '@packages/shared/src/routes/shop'
import { Link } from 'react-router-dom'

const Shop = () => {
	return (
		<div>
			<h1>Shop</h1>
			<Link to={shopRoutes.second}>second</Link>
		</div>
	)
}
export default Shop
