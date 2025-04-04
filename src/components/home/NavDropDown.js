import styled from "styled-components";
import CATEGORIES from "./Categories";

export default function NavDropDown({isActive, activeCategory, OME, OML}) {
    const categories = CATEGORIES;
    const category = categories[activeCategory];
    return(
        <ItemCategoryDropWrapper>
            { isActive ? 
                <ItemCategoryDrop onMouseEnter={OME} onMouseLeave={OML}>
                    {category.map((cl, idx) => {
                        return (
                            <ItemCategoryDropList key={idx}>
                                {cl.names.map((n, idx)=>{
                                    return (
                                        <ItemCategoryDropListNameWrapper key={idx}>
                                            <ItemCategoryDropListName>{n}</ItemCategoryDropListName>
                                            <ItemCategoryDropListLink></ItemCategoryDropListLink>
                                        </ItemCategoryDropListNameWrapper>
                                    );
                                })}
                                {cl.items.map((i, idx)=>{
                                    return <ItemCategoryDropListItem key={idx}>{i}</ItemCategoryDropListItem>
                                })}
                            </ItemCategoryDropList>
                        );
                    })}
                </ItemCategoryDrop> : null
            }
        </ItemCategoryDropWrapper>
    );
}



const arrowImgUrl = "https://www.univstore.com/image/ic-arrow-forward-mini.png";

const ItemCategoryDropWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const ItemCategoryDrop = styled.div`
    display: flex;
    position: absolute;
    height: 274px;
    background-color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, .08);
    border-top: 1px solid #ecedf1;
    z-index: 1000;

    width: 100%;

    max-width: 1064px;
`;

const ItemCategoryDropList = styled.div`
    border-right: 1px solid #ecedf1;

    padding-left: 16px;

    flex: 0 0 12.5%;
    width: 12.5%;
    margin: 16px 0;
    padding: 0 14px;
    box-sizing: border-box;
`;

const ItemCategoryDropListNameWrapper = styled.a`
    display: flex;
    align-items: center;
    cursor: pointer;
    padding-bottom: 8px;
`;

const ItemCategoryDropListName = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    font-weight: bold;
`;

const ItemCategoryDropListItem = styled.a`
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #787a87;
    font-size: 12px;
    line-height: 25px;
    cursor: pointer;
`;

const ItemCategoryDropListLink = styled.img.attrs({
    src : arrowImgUrl,
})`
    width: 4.5px;
    height: 8px;
    margin-top: 2px;
    margin-left: 5px;
    margin-bottom: 3px;
`;