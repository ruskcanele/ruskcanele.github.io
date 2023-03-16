import { BsChatDots } from 'react-icons/bs';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';



export const Contact = () => {
  return (
    <MainLayout
      main={
        <div className="vstack p-5 bg-primary-1">
          <h2 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight ">
            {<BsChatDots />} {"Contact"}
          </h2>
          <br/>
          <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md">
          {'お問い合わせ: '} <p className="text-accent-1 inline">
            <Link href="https://twitter.com/ruskcanele" passHref>
              {'@ruskcanele'}
            </Link>
          </p>
          </p>
        </div>
      }
      aside={
        <Profile />
      }
    />
  );
};