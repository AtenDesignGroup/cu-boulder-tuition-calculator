import { useRouter } from 'next/router'

import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'

export default function result () {
  const router = useRouter()
  const { state } = useStateMachine(updateAction)
  function goBack () {
    router.push('/wizard/step2')
  }
  return (
    <div>
      <h2>Result:</h2>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={() => goBack()}>back</button>
    </div>
  )
}
