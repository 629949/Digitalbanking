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
    <div className='flex flex-col items-center justify-center'>
    <Nav />
    <div className='flex justify-between '>
        <Card 
        // design
        width={'900px'}
        height={'400px'}
        flexDirection={'column'}
        display={'flex'}
        border={'1px solid black'}
        

// body
        text1={"Next generation digital banking"}
        text2={'Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.'}

    
        link={'Request Invite'}/>

<div className=' border w-7/12'>
<img src={bgIntro} alt="Background design" className='absolute w-5/12' />
<img src={mockups} alt="Mockups" className='relative w-8/12' />
</div>
        
    </div>

    <div className='w-screen h-96  flex flex-col justify-around'>
        <h3>Why choose Easybank?</h3>
        <p>We leverage open Banking to turn your bank account into your financial hub. Control your finance like never before</p>

        <div className=" grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 place-items-center ">
           <Card 
         
           width={'250px'}
           height={'250px'}
            imageClass="rounded-lg w-20 h-20 object-cover"
            flexDirection={'column'}
           image={online}
           text1={'Online Banking'}
           text2={'Our mordern web and mobile applications allow you to keep track of your finances wherever you are in the world.'}/>



           <Card 
            
            width={'250px'}
            height={'250px'}
            imageClass="rounded-lg w-20 h-20 object-cover"

           image={budgeting}
           text1={'Simple Budgeting'}
           text2={'See exactly where your money goes eac month. Recieve notifications when youre close to hitting your limits'}/>


           <Card 
          
            width={'250px'}
            height={'250px'}
            imageClass="rounded-lg w-20 h-20 object-cover"

           image={onboarding}
           text1={'Fast Onbording'}
           text2={'We dont do branches. Open your account in minutes online and start taking control of your finances right away.'}
           />


           <Card
           
            width={'250px'}
            height={'250px'}
            imageClass="rounded-lg w-20 h-20 object-cover"

           image={api}
           text1={'Open API'}
           text2={'Manage your savings, investments, pension and so much more from one account. Tracking your money has never been easier'}
           /> 
        </div>
    </div>

<div>
    <h3 className=' text-4xl m-10'>Latest Articles</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <Card 
        

        image={currencyImage}
        text1Class={'font-thin text-sm'}
        imageClass={'h-50 w-86 rounded '}
        text1={'By Claire Robinson'}
        link={'Recieve money in any currency with no fees'}
        text2={'The World is getting smaller and we are becoming more mobile. So why should you be forced to only recieve money in a single'}
        />


        <Card
        image={restaurant}
        imageClass={'h-50 w-86 rounded '}

        text1={'By Wilson Hutton'}
        text1Class={'font-thin text-sm'}
        link={'Treat yourself without worrying about money'}
        text2={'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.'}
        />

        <Card 
        image={plane}
        imageClass={'h-50 w-86 rounded '}

        text1={'By Wilson Hutton'}
        text1Class={'font-thin text-sm'}
        link={'Take your Easybank card wherever you go '}
        text2={'We want you to enjoy your travels. This is why we dont charge any fees on purchaes while your are abroad. Well even show you'}
        />

        <Card
        image={confetti}
        imageClass={'h-50 w-86 rounded '}

        text1={'By Claire Robinson'}
        text1Class={'font-thin text-sm'}
        link={'Our invite-only Beta accounts are now live!'}
        text2={'After a lot of hard work by the whole team.we are excited to launch our closed beta. it is easy to request an invite through the site'}
        />
    </div>
</div>


 <MyFooter />
    </div>
  )
}

export default Home
