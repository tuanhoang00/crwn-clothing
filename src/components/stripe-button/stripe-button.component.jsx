import React from 'react'

import StripeCheckOut from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IEochHpFoG4wkqDHM98kqqnBpmnND9hC8ypiPmOEXxj1DzifoV0Tj1p29SSqN0VXYcNfirdSFOGaGsT4ggrttLa00FNZv8qQI'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckOut
        label ='Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image= 'http://svgshare.com/i/CUz.svg'
        description ={`Your total is $${price}`}
        amout = {priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey} />
    )
}

export default StripeCheckoutButton