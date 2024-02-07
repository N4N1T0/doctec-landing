interface SvgProps {
  fill?: string
  width?: number
  height?: number
  className?: string
  viewBox?: string
}

// fix Props to ALL

export const Branding = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={70} height={70} fill='none'>
    <mask
      id='a'
      width={64}
      height={64}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M64 0H0v64h64V0Z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M64 0v64H44.8V41.61C44.794 53.978 34.768 64 22.4 64 10.029 64 0 53.971 0 41.6c0-12.371 10.029-22.4 22.4-22.4 12.368 0 22.394 10.023 22.4 22.39V19.2H0V0h64Z'
        clipRule='evenodd'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Comunity = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 169.85 169.85' height={70} width={70}>
    <g data-name='Capa 2'>
      <path
        d='M169.85 0H0v169.85h169.85ZM29.09 140.76V29.09h111.67v111.67Z'
        data-name='Layer 7'
        fill='#ffffff'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Design = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={70} height={70} fill='none'>
    <mask
      id='a'
      width={64}
      height={64}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M64 0H0v64h64V0Z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M0 32V0h64v32C46.33 32 32.004 17.677 32 .008 31.996 17.678 17.67 32 0 32Zm32 32c0-17.673 14.327-32 32-32v32H32Zm0 0c0-17.673-14.327-32-32-32v32h32Z'
        clipRule='evenodd'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Development = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={70} height={70} fill='none'>
    <mask
      id='a'
      width={64}
      height={64}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M64 0H0v64h64V0Z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#fff'
        fillRule='evenodd'
        d='M64 16V0H32v15.994C31.997 7.16 24.834 0 16 0H0v32h16C7.163 32 0 39.163 0 48v16h32V48c0 8.837 7.163 16 16 16h16V32H48.006C56.84 31.997 64 24.834 64 16Z'
        clipRule='evenodd'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Marketing = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={70} height={70} fill='none'>
    <mask
      id='a'
      width={64}
      height={64}
      x={0}
      y={0}
      maskUnits='userSpaceOnUse'
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill='#fff' d='M64 0H0v64h64V0Z' />
    </mask>
    <g mask='url(#a)'>
      <path
        fill='#fff'
        d='M31.998 64v-4.98C15.698 59.02 0 48.298 0 32h4.976c0-16.298 10.723-32 27.022-32v4.98C48.298 4.98 64 15.702 64 32h-4.976c0 16.298-10.727 32-27.026 32Z'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Seo = () => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 169.85 169.85' width={70} height={70}>
    <g data-name='Capa 2'>
      <path
        d='m152.56 33.06-119.5 119.5a85.63 85.63 0 0 1-15.77-15.77l119.5-119.5a85.63 85.63 0 0 1 15.77 15.77Zm17.29 59L92.1 169.85a85.24 85.24 0 0 0 77.75-77.75ZM169 70.61a84.34 84.34 0 0 0-7.77-23.78L46.83 161.18A84.34 84.34 0 0 0 70.61 169ZM.9 99.24A84.34 84.34 0 0 0 8.67 123L123 8.67A84.34 84.34 0 0 0 99.24.9ZM0 77.75 77.75 0A85.24 85.24 0 0 0 0 77.75Z'
        data-name='Layer 7'
        fill='#ffffff'
        className='group-hover:fill-black transition-colors duration-200'
      />
    </g>
  </svg>
)

export const Quotes = ({ className, }: SvgProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' width={87} height={63} fill='none' className={className}>
    <path fill='#FFA600' d='M0 0h41.241v26.747H0V0Z' />
    <path
      fill='#FFA600'
      d='M41.241 26.747H0v-.15c3.75-3.293 8.666.15 14.05.15 11.763 0 13.595 19.512 13.595 31.28A21.22 21.22 0 0 1 25.173 68h8.364l7.704-41.253ZM50.759 0H92v26.747H50.759V0Z'
    />
    <path
      fill='#FFA600'
      d='M92 26.747H50.759v-.15c3.75-3.293 8.666.15 14.049.15 11.764 0 13.596 19.512 13.596 31.28 0 3.603-.894 6.997-2.473 9.973h8.365L92 26.747Z'
    />
  </svg>
)

export const Check = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width={20} height={20} fill='none' className='grow'>
    <path
      fill='#07070A'
      fillRule='evenodd'
      d='M9 18A9 9 0 1 0 9 0a9 9 0 0 0 0 18Zm3.854-11.146a.5.5 0 0 0-.708-.708L7.5 10.793 5.854 9.146a.5.5 0 1 0-.708.708l1.788 1.787.009.009c.036.036.087.087.138.128a.666.666 0 0 0 .523.145.666.666 0 0 0 .315-.145c.051-.04.102-.092.138-.128l.009-.009 4.788-4.787Z'
      clipRule='evenodd'
    />
  </svg>
)