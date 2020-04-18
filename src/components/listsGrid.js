import React from 'react';
import styled from 'styled-components';
import RichText from './richText';
import ListBox from './listBox';



const ListsGridWrapper = styled.section `
    max-width: 1248px;
    margin: 0 auto;
    padding: 0 15px;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
   

    
    

    h3{
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    padding-top: 54px;
    padding-bottom: 21px;
    border-bottom: 1px solid #CACACA;
    margin-bottom: 0;

}`;

const ListsGrid = ({title, lists}) => {
    return (
        <>
        <RichText render={title}/>
        <ListsGridWrapper>

           
            {lists.map((list,i) => {
                return (
                    <ListBox 
                    listImage= {list.list_image.url}
                    title={list.article_title}
                    buttonLabel={list.button_label}
                    buttonDestination={`/${list.button_destination._meta.uid}`}
                    key={i}/>
                        
                   
                )
            })}
        
        </ListsGridWrapper>
        </>

    )

}

export default ListsGrid;

