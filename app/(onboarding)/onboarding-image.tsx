import Image from 'next/image'
import OnboardingBg from '@/public/images/onboarding-image.jpg'
import OnboardingDecoration from '@/public/images/auth-decoration.png'

export default function OnboardingImage() {
  return (
    <div className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
      <Image className="object-cover object-center w-full h-full" src={OnboardingBg} priority width={760} height={1024} alt="Onboarding" />
      <Image className="absolute top-1/4 left-0 -translate-x-1/2 ml-8 hidden lg:block" src={OnboardingDecoration} priority width={218} height="224" alt="Onboarding decoration" />
    </div>
  )
}
