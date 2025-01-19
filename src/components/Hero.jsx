import React,{useState} from 'react'

const Hero = () => {
  const [currentIndex, setcurrentIndex] = useState(1);
  const [hasClicked, sethasClicked] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [loadedVideos, setloadedVideos] = useState(true);
  
  const handleMiniVdClick = () =>{

  }


  return (
    <div>
      <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id = "video-frame" className="relative z-10 h-dvh w-screen overflow-x-hidden rounded-lg bg-blue-75 ">
            <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                <div>
                    MinivideoPlayer
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
