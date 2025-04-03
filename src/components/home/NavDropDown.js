import styled from "styled-components";

export default function NavDropDown() {
    return(
        <ItemCategoryDropWrapper className="dropDown">
            <ItemCategoryDrop>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>태블릿PC</ItemCategoryDropListName>
                        <ItemCategoryDropListLink></ItemCategoryDropListLink>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>태블릿pc</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>터치펜</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>태블릿 키보드</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>케이스</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>보호필름</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>스마트 워치/밴드</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>스마트 워치</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>스마트 밴드</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>스트랩</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>케이스</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>보호필름</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>음향기기</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>무선 이어폰</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>유선 이어폰</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>무선 헤드폰</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>유선 헤드폰</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>이어폰/헤드폰 케이스</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>이어폰/헤드폰 주변기기</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>스피커/턴테이블</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>마이크/녹음기</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>기타 음향 주변기기</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>게임</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>PlayStation</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>Nintendo</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>기타 게임기</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>게임 타이틀</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>주변기기</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>주변기기</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>파우치</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>거치대</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>보조배터리</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>케이블</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>젠더</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>충전기</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>계산기/학습기기</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>방수팩</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>기타 주변기기</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>카메라</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>DSLR</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>DSLR 렌즈</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>미러리스</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>미러리스 렌즈</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>일반 디지털 카메라</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>액션캠/캠코더</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>즉석 카메라</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>포토프린터/용지</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>더보기</ItemCategoryDropListItem>
                </ItemCategoryDropList>
                <ItemCategoryDropList>
                    <ItemCategoryDropListNameWrapper>
                        <ItemCategoryDropListName>차량용 디지털</ItemCategoryDropListName>
                        <ItemCategoryDropListLink/>
                    </ItemCategoryDropListNameWrapper>
                    <ItemCategoryDropListItem>차량용 거치대</ItemCategoryDropListItem>
                    <ItemCategoryDropListItem>차량용 충전기</ItemCategoryDropListItem>
                </ItemCategoryDropList>
            </ItemCategoryDrop>
        </ItemCategoryDropWrapper>
    );
}
const arrowImgUrl = "https://www.univstore.com/image/ic-arrow-forward-mini.png";

const ItemCategoryDropWrapper = styled.div`
    //display: none;

    display: flex;
    justify-content: center;
`;

const ItemCategoryDrop = styled.div`
    // display: none;
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