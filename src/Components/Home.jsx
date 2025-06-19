import React from 'react'
import Nav from './Nav'
import Card from './Card'
import MyFooter from './MyFooter'


import currencyImage from '../images/image-currency.jpg';
import restaurant from '../images/image-restaurant.jpg';
import plane from '../images/image-plane.jpg';
import confetti from '../images/image-confetti.jpg';
import online from '../images/creditCard.svg';
import onboarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';
import budgeting from '../images/icon-budgeting.svg';
import bgIntro from '../images/bg-intro-desktop.svg';
import mockups from '../images/image-mockups.png'
import bgMobile from '../images/bg-intro-mobile.svg';





function Home() {
  return (
    <div className='lg:flex lg:flex-col lg:items-center lg:justify-evenly w-screen font-sans items-center justify-center  '>


    <Nav />


   <div className="flex flex-col-reverse lg:flex-row justify-center items-start w-screen p-4 border-orange-500">

  {/* Left Side - Text Section */}
  <div className="flex flex-col lg:justify-start justify-center w-[90%] lg:items-start   items-center lg:w-[450px] lg:m-0  lg:p-4  lg:h-[400px]  h-[300px] md:justify-center md:items-center  ">


    <Card 
      cardClass="lg:w-[60%] lg:flex- lg:flex-col lg:items-center lg:justify-start w-screen sm:items-center sm:justify-center "
      text1Class="  font-light lg:w-[80%] text-3xl sm:text-3xl md:text-4xl leading-tight m-1"
      text2Class="font-normal text-gray-400 m-1 mt-4 text-sm sm:text-base"



      text1="Next generation digital banking"
      text2="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
    />

    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold mt-6 px-6 py-3 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300 lg:h-[50px]  sm:w-[250px] sm:h-[50px] lg:float-left">
      Request Invite
    </button>
  </div>

  {/* Right Side - Image Section */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center ">

    <img src={bgIntro} alt="Background design" className="absolute lg:w-[100%] w-[70%] hidden lg:block lg:top-0 lg:h-[100%]  " />


    <img src={bgMobile} alt="" className='absolute top-0 w-full lg:hidden ' />
    <img src={mockups} alt="Mockups" className="relative lg:w-[80%] w-[90%] lg:mb-[20px]" />

  </div>

</div>

    <div className='w-[95%] lg:h-[550px] m-0  flex flex-col gap-5 '>
        <h3 className=' lg:w-[80%] m-0 text-[30px] w-[400px] '>Why choose Easybank?</h3>
        <p className='font-normal text-gray-400 m-0 w-[90%] lg:w-[80%] '>We leverage open Banking to turn your bank account into your financial hub. Control your finance like never before</p>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center mt-10 w-[100%] sm:place-items-center ">
           <Card 
         
           
         cardClass={' flex flex-col items-center justify-center lg:items-start  md:items-center  h-90 '}
         imageClass="rounded-lg w-20 h-20 object-cover m-5   "
         text1Class={'flex font-bold m-5 text-2xl mb-0 flex w-full items-center justify-center lg:items-start  md:items-start lg:items-start lg:justify-start'}
        text2Class={'m-5 w-[60%] font-normal text-gray-400 flex justify-center items-center'}

        
           image={online}
           text1={'Online Banking'}
           text2={'Our mordern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}
           
           />



           <Card 
            
            cardClass={' flex flex-col items-center justify-center lg:items-start  md:items-center  h-90 '}
            imageClass="rounded-lg w-20 h-20 object-cover m-5   "
            text1Class={'flex font-bold m-5 text-2xl mb-0 flex w-full items-center justify-center lg:items-start  md:items-start lg:items-start lg:justify-start'}
           text2Class={'m-5 w-[60%] font-normal text-gray-400 flex justify-center items-center'}



           image={budgeting}
           text1={'Simple Budgeting'}
           text2={'See exactly where your money goes eac month. Recieve notifications when youre close to hitting your limits'}/>


           <Card 
          
       
          
          cardClass={' flex flex-col items-center justify-center lg:items-start  md:items-center  h-90 '}
          imageClass="rounded-lg w-20 h-20 object-cover m-5   "
          text1Class={'flex font-bold m-5 text-2xl mb-0 flex w-full items-center justify-center lg:items-start  md:items-start lg:items-start lg:justify-start'}
         text2Class={'m-5 w-[60%] font-normal text-gray-400 flex justify-center items-center'}


           image={onboarding}
           text1={'Fast Onbording'}
           text2={'We dont do branches. Open your account in minutes online and start taking control of your finances right away.'}

        

           />


           <Card
           
           
           cardClass={' flex flex-col items-center justify-center lg:items-start  md:items-center  h-90 '}
           imageClass="rounded-lg w-20 h-20 object-cover m-5   "
           text1Class={'flex font-bold m-5 text-2xl mb-0 flex w-full items-center justify-center lg:items-start  md:items-start lg:items-start lg:justify-start'}
          text2Class={'m-5 w-[60%] font-normal text-gray-400 flex justify-center items-center'}

           image={api}
           text1={'Open API'}
           text2={'Manage your savings, investments, pension and so much more from one account. Tracking your money has never been easier'}


           /> 
        </div>
    </div>



{/* latest articles */}
<div className=' lg:h-[650px] lg:w-[100%] sm:w-full  '>
    <h3 className=' text-4xl m-10 w-[90%] flex items-center justify-center '>Latest Articles</h3>

    <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4  place-items-center  ">


        <Card
        image={currencyImage}
        text1={'By Claire Robinson'}
        link={'Recieve money in any currency with no fees'}
        text2={'The World is getting smaller and we are becoming more mobile. So why should you be forced to only recieve money in a single'}
        




        cardClass={'flex  flex-col items-center  m-5'}
        text1Class={'font-normal text-gray-400 text-sm w-[65%] mt-10 mb-2'}
        text2Class={'m-2 w-[65%] mb-0 text-base/6 font-normal text-gray-400 mt-0 '}
        imageClass={'h-50 w-60 rounded w-[80%] '}
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  lg:h-[50px] lg:w-[75%] mb-0 text-[19px]  text-base/6 w-[65%] '}
        


        />


        <Card
        

        cardClass={'flex  flex-col items-center  m-5'}
        text1Class={'font-normal text-gray-400 text-sm w-[65%] mt-10 mb-2'}
        text2Class={'m-2 w-[65%] mb-0 text-base/6 font-normal text-gray-400 mt-0 '}
        imageClass={'h-50 w-60 rounded w-[80%] '}
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[68%] mb-0 text-[19px]  text-base/6 lg:w-[80%]'}
        


        text1={'By Wilson Hutton'}
        image={restaurant}
        link={'Treat yourself without worrying about money'}
        text2={'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.'}
        />

        <Card 
        image={plane}
        text1={'By Wilson Hutton'}
        text2={'We want you to enjoy your travels. This is why we dont charge any fees on purchaes while your are abroad. Well even show you'}
        link={'Take your Easybank card wherever you go '}






        cardClass={'flex  flex-col items-center  m-5'}
        text1Class={'font-normal text-gray-400 text-sm w-[65%] mt-10 mb-2'}
        text2Class={'m-2  w-[65%] mb-0 text-base/6 font-normal text-gray-400 mt-0 '}
        imageClass={'h-50 w-60 rounded w-[80%] '}
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[65%] mb-0 text-[19px]  text-base/6 lg:w-[76%]'}
        

        />

        <Card
        image={confetti}
        text1={'By Claire Robinson'}
        
        link={'Our invite-only Beta accounts are now live!'}
        text2={'After a lot of hard work by the whole team.we are excited to launch our closed beta. it is easy to request an invite through the site'}



        cardClass={'flex  flex-col items-center  m-5'}
        text1Class={'font-normal text-gray-400 text-sm w-[65%] mt-10 mb-2'}
        text2Class={'m-2  w-[65%] mb-0 text-base/6 font-normal text-gray-400 mt-0 '}
        imageClass={'h-50 w-60 rounded w-[80%] '}
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[65%] mb-0 text-[19px]  text-base/6 lg:w-[76%]'}
        


       
        />
    </div>
</div>


 <MyFooter />
    </div>
  )
}

export default Home
