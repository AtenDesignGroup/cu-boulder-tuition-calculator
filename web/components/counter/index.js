
import CountUp from 'react-countup'


export function  Counter ({ target, duration }) {
  return (

      <CountUp
        start={0}
        end={target}
        duration={duration}
        separator=","
        prefix="$"
        decimals={2}
        useEasing={true}
        />


  )
}
