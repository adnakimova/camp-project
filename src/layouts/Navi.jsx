import React from 'react'
import CartSummary from './CartSummary'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
export default function Navigator() {
    return (
        <div>
            <Menu inverted fixed>
                <Container>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        <CartSummary>
                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>

                        </CartSummary>
                    </Menu.Menu>
                </Container>

            </Menu>
        </div>
    )
}