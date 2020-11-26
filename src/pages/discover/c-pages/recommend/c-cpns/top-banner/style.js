import styled from 'styled-components'

export const BannerWrapper = styled.div`
  //通过组件传过来的图片地址，随轮播图实时改变高斯模糊背景图
  background: url(${({ bgImage }) => bgImage}) center/6000px;

  .banner {
    height: 270px;
    background-color: red;

    display: flex;
    position: relative;
  }

  .slick-dots {
    button {
      height: 6px !important;
      border-radius: 5px !important;
    }
  }
`

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    height: 270px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank'
})`
  width: 254px;
  height: 270px;
  background: url(${require('@/assets/img/download.png').default});
`

export const BannerControl = styled.div`
  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png').default});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }

  .left,
  .right {
    top: 50%;
    transform: translateY(-50%);
  }
`
