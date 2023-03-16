import styled from "styled-components";

export const StyleFooter = styled.footer`
color: #ffffff;
background-color: #001e00;
margin: 40px;
border-radius: 10px;
padding: 40px 120px;
@media (max-width : 500px) {
padding: 10px;
    
}
.col-links {
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 60px;
    flex-wrap: wrap;
    ul {
        li {
            margin:0 0 15px 0 ;
            .Link {
                color: #ffffff;
            }
        }
    }
}
.row-2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    border-bottom: 2px solid #ffffff;
    padding-bottom: 15px;
    div,ul {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 10px;
        margin: 5px 0;
        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #9aaa97;
            transition: 0.5s;
            &:hover {
                background-color: #9aaa97;
            }
        }
    }
}

.row-3 {
    text-align: center;
    margin: 20px 0;
    font-size: 15px;
}
`