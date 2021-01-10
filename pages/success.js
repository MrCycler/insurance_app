import {Layout} from '../components/layout/Layout.tsx'
import {SuccessBanner} from '../components/SuccessBanner.tsx'

export default function Step1() {
  return (
    <Layout header_layout={false}><SuccessBanner/></Layout>
  )
}