
import { useStateMachine } from 'little-state-machine'
import updateAction from '@/hooks/updateAction'
import { Options } from '@/components/calculator/options'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

export function Question (props) {
  const { question, index } = props
  // console.log({ nextQ })
  // console.log({ prevQ })
  // const { register, handleSubmit } = useForm()
  const { actions, state } = useStateMachine({ updateAction })
  const { currentQuestion } = state.calculator

  // Animation Variants (Framer Motion)
  const variants = {
    initial: { opacity: 0, x: -50, display: 'none' },
    animate: {
      opacity: 1,
      x: 0,
      display: 'block'
    },
    removed: {
      opacity: 0,
      x: 50,
      display: 'none'
    }
  }
  // console.log(state?.calculator?.questions[question?._id]?.answer)
  return (
    <motion.div
      key={index}
      variants={variants}
      exit='removed'
      initial='initial'
      animate={currentQuestion === index ? 'animate' : 'initial'}
    >


      <Box mb='12' mt='4'>
        <Options question={question} title={question.title} description={question.description} />
      </Box>

    </motion.div>
  )
}
