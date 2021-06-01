// <CountUp delay={0.5} start={0} end={28886} decimals={0} decimal="" separator="," prefix="$" useEasing={true}  />
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'


export function  Counter ({ target, duration }) {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  return (
    <span ref={ref}>
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        separator=","
        prefix="$"
        decimals={2}
        useEasing={true}
      >
        {({ countUpRef }) => (
          <span ref={countUpRef} />
        )}
      </CountUp>

      <style jsx>{`
        .opacity-100 {
          opacity: 1;
        }
        .opacity-0 {
          opacity: 0;
        }
        .transform-show {
          visibility: visible;
        }
        .transform-hide {
          visibility: hidden;
        }
        .delay {
          transition-delay: ${duration}s;
        }
        .transform-hide {
          transform: translate3d(0, 1rem, 0);
        }
        .transform-show {
          transform: translate3d(0, 0, 0);
        }
      `}</style>
    </span>
  )
}
