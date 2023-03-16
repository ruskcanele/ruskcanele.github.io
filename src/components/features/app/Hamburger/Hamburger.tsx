import { RiMenu4Line } from 'react-icons/ri';
import {
  DropdownMenu,
  DropdownMenuItem,
} from '@/components/common/DropdownMenu';
import { Link } from '@/components/common/Link';
import { links } from '@/config/links';

type Props = {
  children?: React.ReactNode;
};

export const Hamburger: React.VFC<Props> = ({ children }) => {
  return (
    <DropdownMenu
      sideOffset={8}
      collisionPadding={16}
      className="vstack gap-2 max-h-80 bg-primary-1 rounded-lg shadow-lg"
      trigger={
        <button
          className="icon-btn rounded-full bg-white dark:bg-orange-400 dark:text-black shadow-xl"
          aria-label="hamburger menu"
        >
          <RiMenu4Line size={28} />
        </button>
      }
    >
      <div className="right">
        {links.map(({ name, href, icon }) => (
          <DropdownMenuItem
            key={name}
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent('keydown', { key: 'Escape' }),
              )
            }
            className="text-md text-primary-1 hover:text-orange-800 hover:dark:text-orange-400 focus:text-orange-800 focus:dark:text-orange-400 capitalize select-none cursor-pointer"
          >
            <Link href={href} passHref>
              <a className="hstack gap-4 py-2 px-5">
                {icon} {name}
              </a>
            </Link>
          </DropdownMenuItem>
        ))}
      </div>
      {children}
    </DropdownMenu>
  );
};
