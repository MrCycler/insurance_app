import {Layout} from '../components/layout/Layout.tsx'
import {BasicForm} from '../components/BasicForm.tsx'

export default function Home() {
  return (
    <Layout header_layout={true}><BasicForm/></Layout>
  )
}