import GradientHr from '@/components/GradientHr'
import Scene from '../3D/Scene'
import AboutObject from '../3D/AboutObject'
import AboutTyping from './AboutTyping'

const About = () => {
    return (
        <div>
            <div className='flex gap-20 flex-col lg:flex-row'>
                <div className='h-[250px]'>
                    <Scene>
                        <AboutObject />
                    </Scene>
                </div>
                <div className="border border-gray-700 min-h-[300px] rounded-2xl shadow-lg bg-gray-900 w-full">
                    {/* Window header with controls */}
                    <div className="flex items-center justify-between border-b border-gray-700 py-2 px-4 rounded-t-2xl bg-gray-800">
                        {/* Window controls */}
                        <div className="flex gap-2">
                            <div className="w-[15px] h-[15px] bg-red-600 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-yellow-500 rounded-full"></div>
                            <div className="w-[15px] h-[15px] bg-green-600 rounded-full"></div>
                        </div>

                        {/* Window title */}
                        <h1 className="text-lg font-medium text-blue-400">About Me</h1>

                        {/* Empty space for balance */}
                        <div className="w-[45px]"></div>
                    </div>

                    {/* Content Area */}
                    <div className="p-6 text-gray-200 text-[14px] sm:text-[20px] lg:text-[24px]">
                        <AboutTyping />
                    </div>

                </div>
            </div>
            <div className='mt-8'></div>
            <GradientHr />
        </div >

    )
}

export default About
