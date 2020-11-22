import styled from 'styled-components'

export const DiscoverWrapper = styled.div`
  height: 30px;
  background-color: #c20c0c;

  .topMenu {
    padding-left: 196px;
    display: flex;
    li {
      margin: 2px 40px 0 0;
      a {
        display: inline-block;
        padding: 2px 14px;
        color: #fff;
        &:hover {
          text-decoration: none;
        }
      }
      .active,
      a:hover {
        border-radius: 10px;
        background-color: #9b0909;
      }
    }
  }
`
