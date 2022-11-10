import React from 'react'
import { Dropdown, Menu, Image} from 'semantic-ui-react'

export default function SignedIn(props) {
  return (
    <div>
        <Menu.Item>
            <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/56923613?v=4"/>
            <Dropdown pointing="top left" text ="Aidana">
                <Dropdown.Menu>
                    <Dropdown.Item text="My information" icon="info"/>
                    <Dropdown.Item onClick={props.signOut} text="Sign out" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </div>
  )
}

