import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { ProductService } from '../services/ProductService'
export default function ProductList() {

    const [products, setPrducts] = useState([])
    useEffect(()=>{
        let productService = new ProductService()
        productService.getProducts().then(result=>setPrducts(result.data.data))
    }, [])
    return (
        <div><Table celled>
            <Table.Header> 
                <Table.Row>
                    <Table.HeaderCell>Id</Table.HeaderCell>
                    <Table.HeaderCell>Product Name</Table.HeaderCell>
                    <Table.HeaderCell>Unit Price</Table.HeaderCell>
                    <Table.HeaderCell>Units in Stock</Table.HeaderCell>
                    <Table.HeaderCell>Category</Table.HeaderCell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {
                    products.map(product => (
                        <Table.Row key={product.id}>
                            <Table.Cell>{product.id}</Table.Cell>
                            <Table.Cell><Link to={`/products/${product.productName}`}>{product.productName}</Link></Table.Cell>
                            <Table.Cell>{product.unitPrice}</Table.Cell>
                            <Table.Cell>{product.unitsInStock}</Table.Cell>
                            <Table.Cell>{product.category.categoryName}</Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>

            <Table.Footer>
                <Table.Row>
                    <Table.HeaderCell colSpan='5'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                                <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table></div>
    )
}
