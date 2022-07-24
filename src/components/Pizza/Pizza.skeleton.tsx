import React from 'react'
import ContentLoader from 'react-content-loader'

export const PizzaSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="225" rx="10" ry="10" width="261" height="36" />
    <rect x="1" y="284" rx="9" ry="9" width="259" height="81" />
    <rect x="7" y="407" rx="6" ry="6" width="104" height="39" />
    <rect x="132" y="405" rx="14" ry="14" width="124" height="62" />
    <circle cx="144" cy="107" r="99" />
  </ContentLoader>
)
