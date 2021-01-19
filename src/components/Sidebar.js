import React from 'react';  
import { SidebarContent, NavLinksWrapper, NavLink, SidebarContentCard } from '../elements';  

export const Sidebar = () => {
    return (
        <SidebarContent>
            <NavLinksWrapper>
                <NavLink href='/glossary'>
                        Glossary
                </NavLink>
                <NavLink href='/about'>
                        About + contact
                </NavLink>
            </NavLinksWrapper>
            <SidebarContentCard>
                NEWSLETTER
                You want it? It's yours, my friend. As long as you have an email address: 
            </SidebarContentCard>
            <SidebarContentCard>
                TIL
            </SidebarContentCard>
            <SidebarContentCard>
                Today's video
                
            </SidebarContentCard>
            <SidebarContentCard>
                GITHUB REPO
            </SidebarContentCard>
        </SidebarContent>
    )
}