// step1: reactをimportしてjsxを使用できるようにする
import * as React from 'react'
// section2-4: gatsbyパッケージで用意されているLinkコンポーネントを使用できるようにする
// import {Link} from 'gatsby' ※使用していないのでコメントアウト
// section2-5: 新規作成したLayoutコンポーネントを使用できるようにする
import Layout from '../components/layout'

// step2: IndexPageコンポーネントを定義する
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

// step3: exportして定義したコンポーネントを他ファイルで使用できるようにする
export default IndexPage