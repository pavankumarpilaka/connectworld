import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Appointments = () => {
  const { Infid } = useParams();
  const { Influencers,currsymbol } = useContext(AppContext);
  const [infdata, setInfdata] = useState(null);
  const [inflsot,setinfslot]=useState([])
  const [slotindex,setslotindex]=useState(0)
  const [slottime,setslottime]=useState('')
  const daysofweek = ['sun','mon','tue','wed','thu','fri','sat']



  const fetchInfData = async () => {
    try {
      if (!Influencers || !Array.isArray(Influencers)) {
        console.warn("Influencers data is not available yet.");
        return;
      }

      const foundInfluencer = Influencers.find(inf => String(inf._id) === String(Infid));
      setInfdata(foundInfluencer);
      console.log("Fetched infdata:", foundInfluencer);
    } catch (error) {
      console.error("Error fetching influencer data:", error);
    }
  };

  const getavailableslots=async () =>{
    setinfslot([])
    let today=new Date()
    for(let i=0;i<7;i++){
      let currentdate=new Date(today)
      currentdate.setDate(today.getDate()+i)
      
      let endtime=new Date()
      endtime.setDate(today.getDate()+i)
      endtime.setHours(21,0,0,0)

      if(today.getDate()===currentdate.getDate()){
        currentdate.setHours(currentdate.getHours()>10?currentdate.getHours()+1:10)
        currentdate.setMinutes(currentdate.getMinutes()>30?30:0)
      }else{
        currentdate.setHours(10)
        currentdate.setMinutes(0)
      }
      let timeslots=[]
      while(currentdate<endtime){
        let formattedtime = currentdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeslots.push({
          datetime:new Date(currentdate),
          time:formattedtime
        })
        currentdate.setMinutes(currentdate.getMinutes()+30)
      }
       setinfslot(prev =>([...prev,timeslots]))
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetchInfData();
    };
    fetchData();
  }, [Influencers, Infid]);

  useEffect(()=>{
    getavailableslots()
  },[infdata])

  useEffect(()=>{
    console.log(inflsot)
  },[inflsot])

  return infdata && (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={infdata.image} alt='image'/>
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm: mx-0 mt-[-80px] sm:mt-0 '>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{infdata.name} <img className='w-5' src={assets.verified_icon} alt=''/></p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{infdata.degree} - {infdata.speciality}</p>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-5'>About <img src={assets.info_icon} alt=''/></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{infdata.about}</p>
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointement Fee:<span className='text-gray-600'>{currsymbol}{infdata.fees}</span></p>
        </div>
      </div>
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll'>
          {
            inflsot.length && inflsot.map((item,index)=>(
              <div onClick={()=>setslotindex(index)}
  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotindex === index ? 'bg-primary text-white' : 'border border-gray-200'}`}
  key={index}
>
                 <p>{item[0] && daysofweek[item[0].datetime.getDay()]}</p>
                 <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>


        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
                 {
                  inflsot.length && inflsot[slotindex].map((item, index) => (
                     <p onClick={()=>setslottime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slottime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                    {item.time.toLowerCase()}
                    </p>
                    ))
                  }
         </div>
         <div>
          <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full mt-10'>Book Appointment</button>
         </div>



      </div>


    </div>
  );
};

export default Appointments;
