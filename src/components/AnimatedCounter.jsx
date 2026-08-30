// import {counterItems} from '../constants/index'
// import CountUp from 'react-countup';

// const AnimatedCounter = () => {
//   return (
//     <div id="counter" className="padding-x-lg xl:0 mt-32">
//        <div className="mx-auto grid-4-cols">
//          {counterItems.map((item) =>(
//             <div className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
//                <div key={counterItems.label} className='counter-number text-white text-5xl font-bold mb-2'>
//           <CountUp suffix={item.suffix} end={item.value} />
//                </div>
//                <div className='text-white-50 text-lg '>
//                 {item.label}
//                </div>
//             </div>
//          ))}
//        </div>
//     </div>
//   )
// }

// export default AnimatedCounter


import { counterItems } from '../constants/index'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div id="counter" ref={ref} className="padding-x-lg xl:0 mt-32 z-50">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, idx) => (
          <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
            <div className='counter-number text-white text-5xl font-bold mb-2'>
              <CountUp
                end={inView ? item.value : 0}
                suffix={item.suffix}
                duration={2}
                start={inView ? 0 : null}
              />
            </div>
            <div className='text-white-50 text-lg '>
              {item.label}
            </div>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default AnimatedCounter
