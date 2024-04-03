import { Header } from 'components/Header'
import home from 'styles/home.module.scss'
import { Edit } from 'components/Edit'
const HomePage = () => (
  <div className={home.container}>
    <Header />
    <Edit />
  </div>
)
export default HomePage
