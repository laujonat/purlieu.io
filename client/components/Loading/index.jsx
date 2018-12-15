import React from "react"

export default Loading = ({ children, customClasses }) => (
  <div id="loading-overlay">
    <div className={`loading-content ${customClasses}`}>
      {children}
    </div>
  </div>
)
