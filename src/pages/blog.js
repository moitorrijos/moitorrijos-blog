import React from 'react'
import MainLayout from '../components/main-layout'
import Header from '../components/header'

const BlogPage = () => (
  <MainLayout>
    <Header />
    <div className="main-content">
      <div className="full-width-content">
        <h1 className="centered">Mi Blog</h1>
      </div>
    </div>
  </MainLayout>
)

export default BlogPage