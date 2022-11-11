import React from 'react'
import { Button } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navigator from './Navi'
import { Grid } from 'semantic-ui-react'
import { Route,Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'

export default function Dashboard() {
    return (
        <div>
            <Grid columns={4} divided>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories />
                    </Grid.Column>
                    <Grid.Column width={12}>    
                    <Routes>
                    <Route path="/" exact element={<ProductList />}></Route>
                    <Route path="/products" exact element={<ProductList />}></Route>
                    <Route path="/products/:name" element={<ProductDetail />}></Route>
                    <Route path="/cart" exact element={<CartDetail />}></Route>
                        </Routes>                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
