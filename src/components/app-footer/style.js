import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  height: 172px;
  background-color: #f2f2f2;
  .content {
    display: flex;
    justify-content: space-between;
  }
`
export const FooterLeft = styled.div`
  margin-top: 20px;
  line-height: 22px;
  & > a {
    color: #ccc;
    border-right: 1px solid #ccc;
  }
  & > a:nth-child(n + 2) {
    padding: 0 10px;
  }
  & > a:first-child {
    padding-right: 10px;
  }
  /*这里不能使用last-child,因为a不是父亲的最后一个元素,使用last-child无法选中*/
  & > a:last-of-type {
    border-right: none;
  }

  span {
    margin: 0 18px;
  }
`
export const FooterRight = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  width: 550px;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    &:hover {
      text-decoration: none;
    }
    i {
      display: inline-block;
      width: 50px;
      height: 45px;
      background-image: url(${require('@/assets/img/sprite_footer_02.png').default});
      background-size: 110px 450px;
    }
    &:nth-child(1) i {
      background-position: -60px -101px;
    }
    &:nth-child(2) i {
      background-position: 0 0;
    }
    &:nth-child(3) i {
      background-position: -60px -50px;
    }
    &:nth-child(4) i {
      background-position: 0 -101px;
    }
    &:nth-child(5) i {
      background-position: 50px 0;
    }
  }
`
