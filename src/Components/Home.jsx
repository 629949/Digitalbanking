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





function Home() {
  return (
    <div className='flex flex-col items-center justify-evenly font-sans  '>
    <Nav />
   <div className="flex flex-col-reverse lg:flex-row justify-around items-start w-full p-4 ">

  {/* Left Side - Text Section */}
  <div className="flex flex-col justify-start items-start  lg:w-1/2 p-4 border h-[400px]">
    <Card 
      cardClass="w-[60%] flex- flex-col items-center justify-start "
      text1Class="font-light w-[80%] text-3xl sm:text-4xl md:text-5xl leading-tight m-1"
      text2Class="font-normal text-gray-400 m-1 mt-4 text-sm sm:text-base"
      text1="Next generation digital banking"
      text2="Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more."
    />

    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white font-semibold mt-6 px-6 py-3 rounded-full shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300 lg:h-[50px] lg:w-full sm:w-[50px] sm:h-[90px]">
      Request Invite
    </button>
  </div>

  {/* Right Side - Image Section */}
  <div className="relative w-full lg:w-1/2 flex justify-center items-center">
    <img src={bgIntro} alt="Background design" className="absolute w-[60%] sm:w-[70%]" />
    <img src={mockups} alt="Mockups" className="relative w-[80%] sm:w-[90%]" />
  </div>

</div>

    <div className='w-[80%] h-[550px] m-0  flex flex-col gap-5 items-start'>
        <h3 className=' w-[80%] m-0 text-[40px]'>Why choose Easybank?</h3>
        <p className='font-normal text-gray-400 m-0 w-[43%]'>We leverage open Banking to turn your bank account into your financial hub. Control your finance like never before</p>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center mt-10 w-[100%] ">
           <Card 
         
           cardClass={' flex flex-col items-start  h-90'}
            imageClass="rounded-lg w-20 h-20 object-cover m-5 "
            flexDirection={'column'}
           image={online}
           
           text1={'Online Banking'}
           text1Class={'font-bold m-5 text-2xl mb-0  w-full'}
           text2={'Our mordern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}
           text2Class={'m-5 w-60 font-normal text-gray-400 '}
           
           />



           <Card 
            cardClass={' flex flex-col items-center justify-center h-90 '}
         
            imageClass="rounded-lg w-20 h-20 object-cover"
       


           image={budgeting}
           text1={'Simple Budgeting'}
           text1Class={'font-bold mb-0 text-2xl'}
           text2Class={'m-5 w-60 font-normal text-gray-400'}

           text2={'See exactly where your money goes eac month. Recieve notifications when youre close to hitting your limits'}/>


           <Card 
          
       
            imageClass="rounded-lg w-20 h-20 object-cover"
            cardClass={' flex flex-col items-center justify-center h-90 '}


           image={onboarding}
           text1={'Fast Onbording'}
           text2={'We dont do branches. Open your account in minutes online and start taking control of your finances right away.'}

           text1Class={'font-bold m-5 text-2xl'}
           text2Class={'m-5 w-56 font-normal text-gray-400'}

           />


           <Card
           
           
            imageClass="rounded-lg w-20 h-20 object-cover"
            cardClass={' flex flex-col items-center justify-center h-90 '}


           image={api}
           text1={'Open API'}
           text2={'Manage your savings, investments, pension and so much more from one account. Tracking your money has never been easier'}

           text1Class={'font-bold m-5 text-2xl w-full ml-15'}
           text2Class={'m-5 w-56 font-normal text-gray-400'}

           /> 
        </div>
    </div>

<div className=' h-[650px] w-[90%]'>
    <h3 className=' text-4xl m-10'>Latest Articles</h3>

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
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[65%] mb-0 text-[19px]  text-base/6'}
        


        />


        <Card
        

        cardClass={'flex  flex-col items-center  m-5'}
        text1Class={'font-normal text-gray-400 text-sm w-[65%] mt-10 mb-2'}
        text2Class={'m-2 w-[65%] mb-0 text-base/6 font-normal text-gray-400 mt-0 '}
        imageClass={'h-50 w-60 rounded w-[80%] '}
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[68%] mb-0 text-[19px]  text-base/6'}
        


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
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[65%] mb-0 text-[19px]  text-base/6'}
        

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
        linkClass={'hover:text-[#2dd2ce]  font-semibold lineSpacing-1  h-[50px] w-[65%] mb-0 text-[19px]  text-base/6'}
        


       
        />
    </div>
</div>


 <MyFooter />
    </div>
  )
}

export default Home
