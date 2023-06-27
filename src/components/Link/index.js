import React from "react"
import { Link as GatsbyLink } from "gatsby"

const Link = ({ to, ...props }) => {
  return <GatsbyLink {...props} to={to} />
}

export default Link
