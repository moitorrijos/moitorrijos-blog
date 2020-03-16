import React from "react"
import MainLayout from "../components/main-layout"
import Header from "../components/header"
import { MDXProvider } from "@mdx-js/react"

const PostsLayout = ({ children }) => {
  return (
    <MainLayout>
      <Header />
      <div className="main-content">
        <div className="content-container">
          <div className="blog-content">
            <MDXProvider >
              {children}
            </MDXProvider>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default PostsLayout
