import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h1>Payment Canclled <Link className='btn bg-primary' to={"/dashboard/my-parcel"}>Please try again</Link> </h1>
        </div>
    );
};

export default PaymentCancelled;