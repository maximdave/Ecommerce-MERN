import React, {useContext, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios'

const OrderHistory = () => {
    const state  = useContext(GlobalState);
    return (
        <div>
            Order david History
        </div>
    )
}

export default OrderHistory
