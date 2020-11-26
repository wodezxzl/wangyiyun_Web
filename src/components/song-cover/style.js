import styled from 'styled-components'

export const SongCoverWrapper = styled.div`
  width: 140px;
  margin: 20px 0;

  .top-img {
    position: relative;
    & > img {
      width: 140px;
      height: 140px;
    }

    .cover {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-position: 0 0;

      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        background-position: 0 -537px;
        color: #ccc;
        height: 27px;

        span {
          display: flex;
          align-items: center;
          .headset {
            margin-right: 5px;
            display: inline-block;
            width: 14px;
            height: 11px;
            background-position: 0 -24px;
          }
        }
      }
    }
  }

  .bottom-description {
    font-size: 14px;
    color: #000;
    margin-top: 5px;
  }

  .source {
    color: #666;
  }
`
