import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {

    const { dispatch, currency } = useContext(AppContext)

    const handleCurrencyChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value,
        })
    }

    return (
        <div>
            <label>Change Currency:</label>
            <select className='bg-success' value={currency} onChange={handleCurrencyChange}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
        </div>
    )
}

export default Currency