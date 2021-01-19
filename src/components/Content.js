import React from 'react'; 
import { ContentWrapper, AboutContentWrapper } from '../elements';

export const Content = ({children}) => {
    return <ContentWrapper>
        {children}
    </ContentWrapper>
}

export const AboutContent = ({children}) => {
    return <AboutContentWrapper>
        {children}
    </AboutContentWrapper>
}