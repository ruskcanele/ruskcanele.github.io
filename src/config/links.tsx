import { AiOutlineInfoCircle } from 'react-icons/ai';
import { AiFillHome } from 'react-icons/ai';
import { BiMusic } from 'react-icons/bi';
import { ImNewspaper } from 'react-icons/im';
import { BsChatDots } from 'react-icons/bs';
import { LinkType } from '@/types/link';

export const links: LinkType[] = [
  { name: 'Home', href: '/', icon: <AiFillHome /> },
  { name: 'News', href: '/posts/page/1', icon: <ImNewspaper /> },
  { name: 'About', href: '/about', icon: <AiOutlineInfoCircle /> },
  { name: 'Discography', href: '/discography', icon: <BiMusic /> },
  { name: 'Contact', href: '/contact', icon: <BsChatDots /> },
];
