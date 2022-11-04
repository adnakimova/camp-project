import React from 'react'
import { Button} from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navigator from './Navi'
export default function Dashboard() {
    return (
        <div>
            <Navigator/>
            <Categories/>
            <ProductList/>
            </div>
    )
}
