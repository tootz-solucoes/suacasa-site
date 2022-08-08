const {
  faInstagram,
  faWhatsapp
} = require('@fortawesome/free-brands-svg-icons')
const {
  faMapLocationDot,
  faCupStrawSwoosh,
  faArrowUpFromSquare
} = require('@fortawesome/pro-regular-svg-icons')
const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome')

module.exports = {
  siteUrl: 'http://suacasanatal.com.br/',
  siteName: 'Sua Casa - Café & Guaraná',
  siteNameShort: 'Sua Casa',
  siteDescription:
    'Sua Casa - Café e Guaraná é uma cafeteria localizada em Natal - Rio Grande do Norte',
  siteKeywords:
    'sua casa, café, guaraná, guaraná do amazonas, cafeteria, natal, rio grande do norte, rn, salgado, fitness, doces',
  siteSlogan: 'Um lugar que você ama estar 💜',
  shareText: 'Venha conhecer a Sua Casa - Café & Guaraná em Natal',
  socialLinks: [
    {
      href: 'https://bit.ly/sua-casa-instagram',
      name: 'Instagram',
      Icon: () => (
        <FontAwesomeIcon icon={faInstagram} className="mr-1 text-lg fa-fw" />
      )
    },
    {
      href: 'https://bit.ly/sua-casa-whatsapp',
      name: 'Nosso WhatsApp',
      Icon: () => (
        <FontAwesomeIcon icon={faWhatsapp} className="mr-1 text-lg fa-fw" />
      )
    },
    {
      href: 'https://bit.ly/sua-casa-maps',
      name: 'Onde nos encontrar',
      Icon: () => (
        <FontAwesomeIcon
          icon={faMapLocationDot}
          className="mr-1 text-lg fa-fw -mt-[3px]"
        />
      )
    },
    {
      href: 'https://bit.ly/sua-casa-encomendar-kit-guarana',
      name: 'Encomende seu Kit Guaraná',
      Icon: () => (
        <FontAwesomeIcon
          icon={faCupStrawSwoosh}
          className="mr-1 text-lg fa-fw -mt-[4px]"
        />
      )
    }
  ]
}
