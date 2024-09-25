import Link from "next/link";
import Image from "next/image";


export default function Home() {
  return (
   <>

  {/* -------------------------- Header div -------------------------------- */}

    <div className="bg-yellow-400 w-100 h-28 text-right text-black text-2xl font-bold flex justify-evenly p-10">
     
      <div className="text-4xl font-bold h-100 text-red-600">

          BISMA YOUSUF

      </div>

    <Link href={"/About"}> About </Link>

    <Link href={'/portfolio'}> Portfolio </Link>

    <Link href={'/Contactus'}> Contact US</Link>

    </div>



  {/* -------------------------- Intruduction-------------------------------- */}

    <div className='flex'>

    <div className='w-45 h-80 p-10'>

      <h1 className='text-5xl font-bold m-5 text-amber-500'>BISMA YOUSUF</h1>

      <h2 className=" text-4xl m-5 font-bold text-red-500 ml-14"> Web Developer </h2>

    <p className='text-2xl m-5 '>As a passionate and skilled web developer, I specialize in building dynamic, responsive, and user-friendly websites. With expertise in both front-end and back-end technologies, I strive to deliver seamless digital experiences that meet business objectives and engage users</p>
    </div>
   
   {/* -------------------------- Image div -------------------------------- */}
   
    <div className=' w-90 h-500 mr-20 mt-10'>

    <Image src={'/pic.png'} 
    width={800}
    height={500} 
    alt="picture"   
    />
    </div>

</div>


      {/* -------------------------- Footer div -------------------------------- */}

 <div className="bg-yellow-500 w-full h-20 mt-auto flex justify-center items-center fixed bottom-0 ">

    <div className="flex justify-evenly p-40 text-black">

 <Link href={'https://www.linkedin.com/in/bismayousuf/'}>   

<Image src={'/linkedin.png'}
      alt="linkedin"
      width={30}
      height={30}
/>
<p>LinkedIn</p>

</Link>
</div>

<div className="flex justify-evenly p-40 text-black">

<Link href={'https://github.com/bismayousuf'}>  

<Image src={'/github.jpeg'}
      alt="github"
      width={30}
      height={30}
/>
<p>Github</p>

</Link>

  </div>

  <div className="flex justify-evenly p-40 text-black">

<Link href={'https://www.facebook.com/'}>  

<Image src={'/facebook.png'}
      alt="facebook"
      width={30}
      height={30}
/>
<p>Facebook</p>

</Link>

  </div>


 </div>

   </>
  );
}
