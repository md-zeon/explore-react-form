import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Sister = () => {
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <button onClick={() => setMoney(money + 500)}>Add 500Tk</button>
        </div>
    );
};

export default Sister;