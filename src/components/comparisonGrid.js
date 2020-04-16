import React from 'react';
import styled from 'styled-components';
import ComparisonBox from './comparisonBox';


const ComparisonWrapper = styled.section `
max-width: 1220px;
margin: 0 auto;
padding: 0 15px;
`;

const ComparisonGrid = ({ comparisons}) => {
    return (
        <ComparisonWrapper>
                
                {comparisons.map((comparison,i) => {
                return (
                    <ComparisonBox 
                    popularTag= {comparison.popular_tag}
                    features={comparison.feature}
                    price={comparison.price}
                    readMore={comparison.read_more}
                    serviceDescription={comparison.service_description}
                    serviceLogo={comparison.service_logo.url}
                    webLabel={comparison.web_label}
                    webLink={comparison.web_link.url}
                    key={i}/>
                        
                   
                )
            })}
        
        </ComparisonWrapper>

    )

}

export default ComparisonGrid;
