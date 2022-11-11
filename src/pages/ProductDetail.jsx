import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import { ProductService } from '../services/ProductService';

export default function ProductDetail() {
    let { name } = useParams(); //get the URL parameters

    const [product, setProduct] = useState({})

    useEffect(() => {
        let productService = new ProductService()
        productService.getByProductName(name).then(result => setProduct(result.data.data))
    }, [])

    return (
        <div>
            <Card.Group>
                <Card fluid>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='small'
                            src='https://cdnkdc.azureedge.net/cdprod/Media/global/pages/applications/beverage/iced-coffee-beverage2'
                        />
                        <Card.Header>{product.productName}</Card.Header>
                        <Card.Meta><h1>{product.unitPrice}$</h1></Card.Meta>
                        <Card.Meta>{product.unitsInStock} pc</Card.Meta>
                        <Card.Meta>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo luctus dolor interdum dictum. 
                            Integer eu elit sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                            Duis condimentum nunc arcu, a gravida nibh pretium vel.Suspendisse condimentum magna sapien, eu sagittis augue elementum at.
                             Mauris in justo ac augue posuere consequat. Quisque sit amet nunc augue.</Card.Meta>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                            <Link to={`/products/${product.productName}`}>Add to Cart</Link>
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </Card.Content>
                </Card>


            </Card.Group></div>
    )
}
