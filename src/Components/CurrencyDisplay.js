//Switch to our CurrencyDisplay.js file. This is where we'll display our converted currency. The component should be functional, take in one paramater called props and return some JSX. The JSX will be a <p></p> element. The p element should show the US Dollar amount, the name of the currency, the symbol and then the amount of the exchanged currency. Export the newly created component.

import React from 'react'

function CurrencyDisplay (props) {
    return (
<p>${props.amount.toFixed(2)}{' - '}{props.currency.name}{' '}{props.currency.symbol}{(props.amount * props.currency.rate).toFixed(2)}</p>
    )
}

export default CurrencyDisplay