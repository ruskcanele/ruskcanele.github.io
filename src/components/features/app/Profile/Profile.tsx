import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { sns } from '@/config/sns';

export const Profile = () => (
  <div className="vstack items-center gap-5 p-6 bg-primary-1">
    <div className="vstack items-center gap-2">
      <Image
        className="object-cover w-28 h-28 rounded-full"
        alt="avatar"
        src="/assets/icon1.jpg"
      />
      <h1 className="text-2xl font-semibold text-primary-1">Yummy Rusk & Canelé</h1>
    </div>

    <p className="text-primary-1">
      京都発！11ピースのエレクトロスウィングのバンドです。Kyoto, Japan / Electro Swing band
    </p>

    <div className="flex gap-4">
      {sns.map(({ href, icon, label }) => (
        <Link key={href} href={href} passHref>
          <a className="text-primary-1" aria-label={label}>
            {icon}
          </a>
        </Link>
      ))}
    </div>
  </div>
);
