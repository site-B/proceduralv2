import React from 'react';
import {BackButtonWrapper} from '../elements';

export const BackButton = ({children, href}) => {
    return <BackButtonWrapper to={"/"}>
        {children}
    </BackButtonWrapper>
}