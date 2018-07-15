import React from 'react'

import { translate, Trans } from 'react-i18next';

const SubApp = () => {
    return(
        <Trans>This is a sub-component of the App component.</Trans>
    )
}

export default translate('translations')(SubApp)