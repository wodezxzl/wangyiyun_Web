import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  height: 73px;
  font-size: 14px;
  background-color: #242424;
  .content {
    line-height: 70px;
    display: flex;
    justify-content: space-between;
  }
  .divider {
    height: 3px;
    background-color: #c20c0c;
  }
`
export const HeaderLeft = styled.div`
  display: flex;
  .logo {
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .selectList {
    display: flex;
    align-items: center;

    .selectItem {
      position: relative;
      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }
      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: '';
          width: 28px;
          height: 19px;
          /*这里引图片要像模块一样使用require*/
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      /*每一个由路由管理的组件,选中时自动添加active的class*/
      &:hover a,
      a.active {
        color: #fff;
        background-color: #000;
        text-decoration: none;
      }
      /*下面的小箭头图标*/
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 12px;

  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;
    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }
  .authorCenter {
    display: inline-block;
    width: 90px;
    height: 32px;
    margin: 0 16px;
    line-height: 32px;
    text-align: center;
    color: #ccc;
    border: 1px solid #616161;
    border-radius: 16px;
    &:hover {
      border-color: #ccc;
      text-decoration: none;
    }
  }
  .login {
    margin-right: 20px;
    &:hover {
      color: #ccc;
    }
  }
`
