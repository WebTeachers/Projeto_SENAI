import Image from 'next/image'
import home from './home.module.scss'
import { Agents } from 'components/Agents'


export const Main = () => (
  <main className={home.container}>
    <div className={home.title}>
      <Image
        className={home.Logo}
        src="background-logo.svg"
        width={140}
        height={99}
        alt="Logo de Background"
      />
      <h1 className={home.Font}> AGENTES</h1>
    </div>
    <Agents />
  </main>
)
