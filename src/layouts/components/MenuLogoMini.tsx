import React, { memo } from 'react';
import Style from './Menu.module.less';

export default memo(() => (
  <div className={Style.menuLogo}>
    <svg
      width='16'
      height='14'
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='tdesign-starter-side-nav-logo-t-logo'
    >
      <g clipPath='url(#clip0_2557_23660)'>
        <path
          d='M9.14 8.252h-5.6a.561.561 0 01-.553-.66l.89-5.146A.544.544 0 014.414 2h5.792L9.14 8.252z'
          fill='url(#paint0_linear_2557_23660)'
        ></path>
        <path d='M13.03 21.473H6.778l2.34-13.226h6.252l-2.34 13.226z' fill='url(#paint1_linear_2557_23660)'></path>
        <path
          d='M11.47 27.724H6.343a.566.566 0 01-.553-.655l.994-5.583h6.238l-1.025 5.793a.543.543 0 01-.525.445z'
          fill='url(#paint2_linear_2557_23660)'
        ></path>
        <path
          d='M26.666 8.252H9.141l1.105-6.239H27.58a.566.566 0 01.552.66L27.22 7.82a.535.535 0 01-.553.432z'
          fill='url(#paint3_linear_2557_23660)'
        ></path>
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_2557_23660'
          x1='2.717'
          y1='5.128'
          x2='10.062'
          y2='4.981'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0062FF'></stop>
          <stop offset='.26' stopColor='#006AFF'></stop>
          <stop offset='.68' stopColor='#0081FF'></stop>
          <stop offset='1' stopColor='#0097FF'></stop>
        </linearGradient>
        <linearGradient
          id='paint1_linear_2557_23660'
          x1='12.383'
          y1='7.623'
          x2='9.123'
          y2='22.042'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#0097FF'></stop>
          <stop offset='.32' stopColor='#0081FF'></stop>
          <stop offset='.74' stopColor='#006AFF'></stop>
          <stop offset='1' stopColor='#0062FF'></stop>
        </linearGradient>
        <linearGradient
          id='paint2_linear_2557_23660'
          x1='5.631'
          y1='27.363'
          x2='12.858'
          y2='21.473'
          gradientUnits='userSpaceOnUse'
        >
          <stop stopColor='#009EFF'></stop>
          <stop offset='.31' stopColor='#00A3FF'></stop>
          <stop offset='.71' stopColor='#00B3FF'></stop>
          <stop offset='1' stopColor='#00C3FF'></stop>
        </linearGradient>
        <linearGradient
          id='paint3_linear_2557_23660'
          x1='8.849'
          y1='5.128'
          x2='27.94'
          y2='4.746'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.03' stopColor='#ECFFFE'></stop>
          <stop offset='.19' stopColor='#AFF1D9'></stop>
          <stop offset='.34' stopColor='#79E5B9'></stop>
          <stop offset='.49' stopColor='#4EDB9F'></stop>
          <stop offset='.63' stopColor='#2CD48A'></stop>
          <stop offset='.77' stopColor='#14CE7C'></stop>
          <stop offset='.89' stopColor='#05CB73'></stop>
          <stop offset='1' stopColor='#00CA70'></stop>
        </linearGradient>
        <clipPath id='clip0_2557_23660'>
          <path fill='#fff' transform='translate(2.978 2)' d='M0 0h25.141v25.72H0z'></path>
        </clipPath>
      </defs>
    </svg>
  </div>
));
