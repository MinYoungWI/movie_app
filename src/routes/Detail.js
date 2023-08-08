import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Detail() {
  const location = useLocation();
  useEffect(() => {
    console.log(location.state)
  }, [])

  return (
    <span>Hello</span>
  )
}

export default Detail;