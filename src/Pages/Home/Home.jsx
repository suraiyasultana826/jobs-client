import { Link } from 'react-router-dom';
import TabComponents from '../../TabComponents/TabComponents';
import banner from '../../assets/banner.jpg'
import WhyChooseUs from '../../ExtraSection/WhyChooseUs';
import { FaCarSide, FaHammer, FaUserCog } from 'react-icons/fa';
const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img  src={banner} className="w-1/2 rounded-lg " />
          <div>
            <h1 className="text-5xl font-bold">Start your Dream <br /> job from Here</h1>
            <p className="py-6">Total 6,500+ available jobs here, We are damn sure someone <br /> which fits you most. So, let grab the chance to get a dream job.</p>
            <Link to='/findJob'><button className="btn bg-blue-400">Get a job</button></Link>
           <Link to='/postJob'> <button className="btn btn-ghost ml-4">Post a job</button></Link>
          </div>
        </div>
      </div>
      <div className=''>
            <div className="flex justify-center items-center">
            <div>
                <h1 className="text-6xl ml-40">Our Mission</h1>
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
                    <p className='mt-5 mb-20'>We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software .</p>
                </div>
                <div>
                    <FaCarSide className='w-20 h-20 ml-20 mb-5 '></FaCarSide>
                    <p className='text-2xl'>PROFESSIONAL STANDARDS</p>
                    <p className='mt-5 mb-20'>Our website is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
                </div>
            </div>
            
            
            
        </div>
      <h1 className="text-5xl font-bold text-center mb-20">Popular Categories</h1>
      <div className=' flex justify-center'>
      <TabComponents></TabComponents>
     

      </div>
      <WhyChooseUs></WhyChooseUs>
      
        </div>
    );
};

export default Home;