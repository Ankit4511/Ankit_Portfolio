import { AiTwotoneFire  } from "react-icons/ai";

import {motion} from "framer-motion"


function StreakCard({ streak }) {

      console.log(streak);


  return (
    <motion.div 
    inittial={{Opacity: 0, y:40 }}
    whileInView={{Opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.5}}  
    className="
bg-white/5
border
border-white/10
rounded-2xl
p-6
w-60
h-[280px]
      hover:-translate-y-1
hover:border-orange-500/30
transition-all
duration-300
">
       <h3 className="text-gray-400 mb-6">GitHub Streak</h3>

<div className="flex justify-between items-center">

  <div >
    <h2 className="text-5xl font-bold">
  
  <span
    className="
    bg-gradient-to-r
    from-cyan-300
    via-cyan-400
    to-blue-600
    bg-clip-text
    text-transparent
    "
  >
    {streak.days}
  </span>

  <span className="text-base text-white ml-1">
    days
  </span>

</h2>
  </div>

  <AiTwotoneFire  className="text-5xl text-orange-400"/>


</div>
<p className="text-gray-400 mt-2">{streak.message}</p>
    </motion.div>
  );
}

export default StreakCard;