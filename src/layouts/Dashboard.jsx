import React from 'react'
import { Button } from 'semantic-ui-react'
import ProductList from '../pages/ProductList'
import Categories from './Categories'
import Navigator from './Navi'
import { Grid } from 'semantic-ui-react'
import { Route,Routes } from 'react-router-dom'

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
                    <Route path="/" component={ProductList}/>
                        </Routes>                    
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
