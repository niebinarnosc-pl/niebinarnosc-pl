import React from "react"
import { Fragment, jsx, jsxs } from "react/jsx-runtime"
import rehypeReact from "rehype-react"
import {unified} from "unified"

const renderAst = ast => unified().use(rehypeReact, {
  Fragment,
  jsx,
  jsxs,
  createElement: React.createElement,
  components: {
    h2: (props) => <h2 className="article-h2" {...props}/>,
    columns: (props) => <div className={`columns${props.reverse === "true" ? " reverse" : ""}`}>{props.children}</div>,
    container: (props) => <div {...props}/>
  }
}).stringify(ast)

export default renderAst