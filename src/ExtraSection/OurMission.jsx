import { FaUserCog, FaHammer, FaCarSide} from 'react-icons/fa';
const OurMission = () => {
    return (
        <div className=''>
        <div className="flex justify-center items-center">
        <div>
            <h1 className="text-6xl ml-40">WHY CHOOSE US?</h1>
            <p className="text-2xl mb-20 mt-10">We are one of the leading  shops serving customers in Tucson. <br />
All mechanic services are performed by highly qualified mechanics.</p>
        </div>
        </div>
        <div className='lg:flex gap-5'>
            <div>
                <FaUserCog className='w-20 h-20 ml-20 mb-5'></FaUserCog>
                <p className='text-2xl'>EVERY JOB IS PERSONAL</p>
                <p className='mt-5 mb-20'>If you want the quality you would expect from the dealership,  but with a more personal and friendly atmosphere, you have found it.</p>
            </div>
            <div>
                <FaHammer className='w-20 h-20 ml-20 mb-5'></FaHammer>
                <p className='text-2xl'>BEST MATERIALS</p>
                <p className='mt-5 mb-20'>We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
            </div>
            <div>
                <FaCarSide className='w-20 h-20 ml-20 mb-5 '></FaCarSide>
                <p className='text-2xl'>PROFESSIONAL STANDARDS</p>
                <p className='mt-5 mb-20'>Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
            </div>
        </div>
        
        <p className='text-5xl lg:ml-72 mb-20'>OUR PRODUCTS</p>
        
        
    </div>
    );
};

export default OurMission;