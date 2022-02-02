import { css } from '@emotion/react';

const TransitionStyles = css`
  /* Slide in */
  @keyframes slidein-left {
    from { 
      transform: translateX(-100%);
    }
    to { 
      transform: translateX(0);
    }
  }

  @keyframes slidein-right {
    from { 
      transform: translateX(100%);
    }
    to { 
      transform: translateX(0);
    }
  }

  @keyframes slidein-bottom {
    from { 
      transform: translateY(100%);
    }
    to { 
      transform: translateY(0);
    }
  }

  @keyframes slidein-top {
    from { 
      transform: translateY(-100%);
    }
    to { 
      transform: translateY(0);
    }
  }

  /* Slide out */
  @keyframes slideout-left {
    from { 
      transform: translateX(0);
    }
    to { 
      transform: translateX(-100%);
    }
  }

  @keyframes slideout-right {
    from { 
      transform: translateX(0);
    }
    to { 
      transform: translateX(100%);
    }
  }

  @keyframes slideout-bottom {
    0% { 
      transform: translateY(0);
    }
    20% {
      transform: translateY(-5%);
    }
    100% { 
      transform: translateY(100%);
    }
  }

  @keyframes slideout-top {
    0% { 
      transform: translateY(0);
    }
    20% {
      transform: translateY(5%)
    }
    100% { 
      transform: translateY(-100%);
    }
  }


  @keyframes fadeInUp {
    from {
        transform: translate3d(0,50px,0);
        opacity: 0;
    }

    to {
        transform: translate3d(0,0,0);
        opacity: 1;
    }
  }

`;

export default TransitionStyles;


