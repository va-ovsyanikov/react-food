import React from 'react'
import ContentLoader from "react-content-loader"
 const LoadingBlock = () => {
    return (
        <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
  
      >
        <circle cx="140" cy="140" r="140" />
        <rect x="127" y="157" rx="0" ry="0" width="1" height="1" />
        <rect x="151" y="179" rx="0" ry="0" width="1" height="1" />
        <rect x="13" y="289" rx="3" ry="3" width="260" height="30" />
        <rect x="12" y="329" rx="3" ry="3" width="260" height="80" />
        <rect x="17" y="421" rx="0" ry="0" width="90" height="30" />
        <rect x="142" y="418" rx="20" ry="20" width="124" height="40" />
      </ContentLoader>
    )
  
}
export default LoadingBlock