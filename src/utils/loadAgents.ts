import type { Agent } from 'global/agent'
export const loadAgents = async () => {
  const route = 'https://valorant-api.com/v1/agents?language=pt-BR'
  const response = await fetch(route).then(data => data.json())
  const data = response.data as Agent[]
  return data.filter(agent => agent.fullPortrait)
}
