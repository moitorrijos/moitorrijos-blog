import React from "react"
import Header from "../components/header"
import MainLayout from "../components/main-layout"
import { MDXProvider } from "@mdx-js/react"

const PageLayout = ({ children }) => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="full-width-content">
        <MDXProvider>{children}</MDXProvider>
      </div>
    </div>
  </MainLayout>
)

export default PageLayout
