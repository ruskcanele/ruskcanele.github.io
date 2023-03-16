import { SiInstagram, SiTiktok, SiTwitter, SiYoutube } from 'react-icons/si';
import { GiCamel } from 'react-icons/gi';

export const sns = [
  {
    href: 'https://twitter.com/ruskcanele',
    icon: <SiTwitter size={30} />,
    label: 'Twitter',
  },
  {
    href: 'https://www.youtube.com/@ruskcanele',
    icon: <SiYoutube size={30} />,
    label: 'YouTube',
  },
  {
    href: 'https://www.instagram.com/ruskcanele/',
    icon: <SiInstagram size={30} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.tiktok.com/@ruskcanele',
    icon: <SiTiktok size={30} />,
    label: 'Tiktok',
  },
  {
    href: 'https://ruskcanele.booth.pm/',
    icon: <GiCamel size={30} />,
    label: 'Booth',
  }
];
