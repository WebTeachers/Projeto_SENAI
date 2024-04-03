import Image from 'next/image'
import home from './home.module.scss'
import type { Agent } from 'global/agent'

export const Cards = (agent: Agent) => (
  <a href="#" className={home.agent}>
    <div className={home.text}>
      <p>{agent.role.displayName}</p>
      <strong>{agent.displayName}</strong>
    </div>
    <ul className={home.abilities}>
      {agent.abilities.map(ability => ability.displayIcon && (
        <li key={ability.displayName}>
          <Image
            src={ability.displayIcon}
            width={36}
            height={36}
            alt={'Icone da habilidade ' + ability.displayName}
          />
        </li>
      ))}
    </ul>
    <div className={home.background}>
      <span style={{ backgroundImage: `url('${agent.fullPortrait}')` }} />
    </div>
  </a>
)
