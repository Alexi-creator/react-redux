import React from 'react'
import ContentLoader from 'react-content-loader'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PizzaFullSkeleton = (props: any) => (
  <ContentLoader
    speed={2}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="240" y="375" rx="6" ry="6" width="104" height="39" />
    <rect x="240" y="425" rx="6" ry="6" width="104" height="52" />
    <rect x="149" y="337" rx="0" ry="0" width="298" height="17" />
    <circle cx="295" cy="154" r="151" />
  </ContentLoader>
)
