import { useRouter } from 'next/router'

import { useForm } from 'react-hook-form'
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'

export default function index () {
  const router = useRouter()
  const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const onSubmit = (data) => {
    actions.updateAction(data)
    router.push('/wizard/step2')
  }
  return (
    <div>
      <h1>wizard</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Step 1</h2>
        <label>
          First Name:
          <input {...register('firstName')} defaultValue={state.firstName} />
        </label>
        <label>
          Last Name:
          <input {...register('lastName')} defaultValue={state.lastName} />
        </label>
        <input type='submit' />
      </form>
    </div>
  )
}
