import React from 'react';
import MenuItem from './menuItem';
import MenuTree from './menuTree';


export default props =>(

    <div>
    <ul className='sidebar-menu' >
        <MenuItem  path='#' icon='dashboard' label='Dashboard' />
        <MenuTree label='Cadastro' icon='edit' >
            <MenuItem path='#billingCycles' label='Ciclos de pagamentos' icon='usd' />
        </MenuTree>
    </ul>

    </div>
);