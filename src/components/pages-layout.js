import React from "react"
import Header from "../components/header"
import MainLayout from "../components/main-layout"
import { MDXProvider } from "@mdx-js/react"

const PageLayout = (props) => (
  <MainLayout >
    <Header title={props.title} />
    <div className="main-content">
      <div className="full-width-content">
        <MDXProvider>{props.children}</MDXProvider>
      </div>
    </div>
  </MainLayout>
)

export default PageLayout
