import Image from 'next/image'
import AuthBg from '@/public/images/auth-image.jpg'
import AuthDecoration from '@/public/images/auth-decoration.png'

export default function AuthImage() {
  return (
    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
      <Image className="object-cover object-center w-full h-full" src={AuthBg} priority width={760} height={1024} alt="Authentication" />
      <Image className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={AuthDecoration} priority width={218} height={224} alt="Authentication decoration" />
    </div>
  )
}
