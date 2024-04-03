import { Header } from 'components/Header'
import home from 'styles/home.module.scss'
import { New } from 'components/New'
const HomePage = () => (
  <div className={home.container}>
    <Header />
    <New />
  </div>
)
export default HomePage
