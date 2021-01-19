import React from 'react';
import { PaginationWrapper, PaginationElement, PaginationElementDisabled } from '../elements'; 

export const Pagination = ({isFirst, isLast, prevPage, nextPage}) => {
    return (
        <PaginationWrapper isFirst={isFirst} isLast={isLast}>
            {
                isFirst ? (
                    <PaginationElementDisabled disabled display='none'>This is the first page</PaginationElementDisabled>
                ) : (
                    <PaginationElement to={prevPage}>Previous Page</PaginationElement>
                )
            }

            {
                isLast ? (
                    <PaginationElementDisabled disabled>This is the last page</PaginationElementDisabled>
                ) : (
                    <PaginationElement to={nextPage}>Next Page</PaginationElement>
                )
            }
            
        </PaginationWrapper>
    )
}; 

