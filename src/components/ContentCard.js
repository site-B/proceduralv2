import React from 'react'; 
import { CardWrapper, P, H2, TagContainer, Tags } from '../elements';
import { Button } from '../components'; 
import { slugify } from '../utils/utilityFunctions'; 
import Img from 'gatsby-image'; 

export const ContentCard = ({ date, title, excerpt, slug, tags, fluid }) => {
    return (
        <CardWrapper>
            <Img fluid={fluid}/>
            <P size="xSmall" textAlign='center' margin='0 0 .5rem 0' color='light2'>
                {date}
            </P>
            <H2 textAlign='center' margin='0 0 1rem 0'>
                {title}
            </H2>
            <P size='small' color='light2' textAlign='center' margin='0 0 1.5rem 0'>
                {excerpt}
            </P>
            <TagContainer>
                {tags.map(tag => (
                    <li>
                        <Tags to={`/tag/${slugify(tag)}`}>
                                {tag}
                        </Tags>
                    </li>
                ))}
            </TagContainer>
            <Button href={slug}>
                Read more
            </Button>
        </CardWrapper>
    )
}

