import React from 'react';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { NavWrapper, NavLinksWrapper, NavLink } from '../elements'; 

export const Nav = () => {

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "logo.svg"}) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="procedural"/>
            </Link>
            <NavLinksWrapper>
                <NavLink href='/glossary'>
                        Glossary
                </NavLink>
                <NavLink href='/about'>
                        About + contact
                </NavLink>
            </NavLinksWrapper>
        </NavWrapper>
    )
}