import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import {
  faMapLocationDot,
  faCupStrawSwoosh,
  faArrowUpFromSquare
} from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

const HomePage = () => {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: 'Sua Casa - Café & Guaraná',
          text: 'Venha conhecer a Sua Casa - Café & Guaraná em Natal',
          url: 'http://suacasanatal.com.br/'
        })
        .then(() => {})
        .catch(error => {})
    }
  }

  return (
    <div className="h-full bg-primary flex flex-col items-center justify-center py-6 relative">
      <div className="absolute top-5 right-5">
        <button
          className="w-10 h-10 flex items-center justify-center text-center border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white"
          onClick={handleOnClick}
        >
          <FontAwesomeIcon icon={faArrowUpFromSquare} className="text-sm" />
        </button>
      </div>
      <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px]  ">
        <Image
          src="/logo-light.png"
          alt="Sua Casa - Café & Guaraná"
          width={493}
          height={408}
        />
      </div>
      <div className="flex-col items-center justify-center py-10 max-w-[320px] w-full">
        <Link href="https://www.instagram.com/suacasanatal/" passHref>
          <a
            target="_blank"
            className="flex items-center justify-center text-center py-3 px-4 border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white w-full  mb-6"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="mr-1 text-lg fa-fw"
            />
            Instagram
          </a>
        </Link>
        <Link href="https://wa.me/5584981179557/" passHref>
          <a
            target="_blank"
            className="flex items-center justify-center text-center py-3 px-4 border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white w-full  mb-6"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="mr-1 text-lg fa-fw" />
            Nosso WhatsApp
          </a>
        </Link>
        <Link href="https://goo.gl/maps/tLuyGZsr2rABVqNF9" passHref>
          <a
            target="_blank"
            className="flex items-center justify-center text-center py-3 px-4 border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white w-full  mb-6"
          >
            <FontAwesomeIcon
              icon={faMapLocationDot}
              className="mr-1 text-lg fa-fw -mt-[3px]"
            />
            Onde nos encontrar
          </a>
        </Link>
        <Link
          href="https://wa.me/5584981179557&text=Ol%C3%A1!%20Gostaria%20de%20encomendar%20meu%20Kit%20Guaran%C3%A1"
          passHref
        >
          <a
            target="_blank"
            className="flex items-center justify-center text-center py-3 px-4 border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white w-full  mb-6"
          >
            <FontAwesomeIcon
              icon={faCupStrawSwoosh}
              className="mr-1 text-lg fa-fw -mt-[4px]"
            />
            Encomende seu Kit Guaraná
          </a>
        </Link>
      </div>
      <span className="absolute text-center bottom-0 left-0 text-gray-200 text-sm mt-auto pb-6 w-full">
        Um lugar que você ama estar 💜
      </span>
    </div>
  )
}

export default HomePage
