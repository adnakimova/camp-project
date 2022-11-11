import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div><Dropdown  item text='Cart' icon="cart">
            <Dropdown.Menu>
                <Dropdown.Item>Pavlova</Dropdown.Item>
                <Dropdown.Item>Guaraná Fantástica</Dropdown.Item>
                <Dropdown.Item>Spegesild</Dropdown.Item>
                <Dropdown.Divider/>
                <Dropdown.Item as={NavLink} to="/cart">Go to cart</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown></div>
    )
}
