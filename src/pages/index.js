import { faArrowUpFromSquare } from '@fortawesome/pro-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

import {
  siteUrl,
  siteName,
  shareText,
  siteSlogan,
  socialLinks
} from '../../app.config'

const HomePage = () => {
  const handleOnClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: siteName,
          text: shareText,
          url: siteUrl
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
      <div className="h-[120px] w-[120px] md:h-[150px] md:w-[150px] ">
        <Image
          src="/logo-light.png"
          alt={siteName}
          width={493}
          height={408}
          className="animate__animated animate__fadeIn"
        />
      </div>
      <div className="flex-col items-center justify-center py-10 max-w-[320px] w-full">
        {socialLinks.map(({ href, name, icon, iconClassName }, index) => (
          <Link key={href} href={href} passHref>
            <a
              target="_blank"
              className="flex items-center justify-center text-center py-3 px-4 border border-2 border-primary shadow-sm text-md font-medium rounded-full text-primary bg-white hover:bg-white focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-white w-full mb-6 animate__animated animate__fadeIn"
              style={{
                'animation-delay': '0.3s'
              }}
            >
              <FontAwesomeIcon icon={icon} className={iconClassName} />
              {name}
            </a>
          </Link>
        ))}
      </div>
      <span className="absolute text-center bottom-0 left-0 text-gray-200 text-sm mt-auto pb-6 w-full">
        <span
          className="animate__animated animate__fadeInUp block"
          style={{
            '--animate-duration': '2000ms'
          }}
        >
          {siteSlogan}
        </span>
      </span>
    </div>
  )
}

export default HomePage
