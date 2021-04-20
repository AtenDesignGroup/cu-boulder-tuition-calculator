import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'

export default function step2 () {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { state, actions } = useStateMachine({ updateAction })
  const onSubmit = (data) => {
    actions.updateAction(data)
    router.push('/wizard/result')
  }
  function goBack () {
    router.push('/wizard')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 2</h2>
        <label>
          Age:
          <input {...register('age')} defaultValue={state.age} />
        </label>
        <label>
          Years of experience:
          <input {...register('yearsOfExp')} defaultValue={state.yearsOfExp} />
        </label>
        <input type='submit' /> or <button onClick={() => goBack()}>back to step 1</button>
      </form>
    </div>
  )
}
