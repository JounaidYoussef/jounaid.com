import RepoCard from "../components/Cards/RepoCard"
import Layout from "../components/Layout"
import * as React from "react"

// markup
const Oss = () => {
  return (
    <Layout iscontact={false}>
      <title>OSS | Youssef Jounaid</title>
      <main>
        <RepoCard />
      </main>
    </Layout>
  )
}

export default Oss
