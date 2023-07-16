
import Logo from "@/assets/Logo.png";

type Props = {}

const Footer = (props: Props) => {
  return (
   <footer className='bg-primary-100 py-16'>
    <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
        <div className='mt-16 basis-1/2 md:mt-0'>
            <img src={Logo}/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nisi omnis odit inventore voluptatum fugit similique soluta eius numquam quibusdam illum repudiandae ab eaque, id est eos perspiciatis quia veritatis autem?</p>
        ,<p>Evogym All Rights Reversed</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
            <h4 className='font-bold'>Links</h4>
            <p className='my-5'>Massa orci senectucs</p>
            <p className='my-5'>vishal Gupta</p>
            <p className='my-5'>vishalgupta703782@gmail.com</p>
        </div>
        <div className='mt-16 basis-1/4 md:mt-0'>
        <h4 className='font-bold'>Contact Us</h4>
            <p className='my-5'>Massa orci senectucs</p>
            <p className='my-5'>(7037)823947</p>
           
        </div>

    </div>

   </footer>
  )
}

export default Footer
