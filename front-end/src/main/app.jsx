import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Item from '../item/item'
import ItemDetalhe from '../item/item-detalhe'

export default props => (
    <div className='container'>
        <Item />
        <ItemDetalhe />
    </div>
)