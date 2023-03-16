import { useRouter } from 'next/router';
import { AiTwotoneTags } from 'react-icons/ai';
import { RiChatNewLine } from 'react-icons/ri';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { Pagination } from '@/components/features/story/Pagination';
import { Stories } from '@/components/features/story/Stories';
import { PostType } from '@/types/post';



type Props = {
  posts: PostType[];
  maxPage: number;
};

export const Page: React.VFC<Props> = ({ posts, maxPage }) => {
  const page = Number(useRouter().query.page);

  return (
    <MainLayout
      main={
        <div className="vstack gap-10 p-8 bg-primary-1">

          <div className="wrap gap-2">
          <span className="select-none text-primary-1">
            <AiTwotoneTags />
            </span>
            <Link key={"Live"} href={`/tags/Live`} passHref>
              <a className="badge">{"Live"}</a>
            </Link>
          </div>

          <Stories posts={posts} title="News" icon={<RiChatNewLine />} />
          <Pagination count={maxPage} page={page} />
        </div>
      }
      aside={<Profile />}
    />
  );
};
