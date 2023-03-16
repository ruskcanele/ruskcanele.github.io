import { Image } from '@/components/common/Image';
import { MainLayout } from '@/components/features/app/Layout';
import { ContentLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';
import { useBreakPoint } from '@/hooks/useBreakPoint';



export const About = () => {
  const lg = useBreakPoint('lg');
  return (
    <MainLayout
      main={
      <ContentLayout className="lg:block">
      <div className="vstack items-center gap-5 p-6 bg-primary-1">

        {/*
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
        */}

          <a className="w-full h-full vstack md:flex-row focus:outline-2 ">
            <div className="center w-full md:w-1/3 h-1/3 md:h-full bg-transparent">
              <Image
                src={"/assets/jacket1st.jpg"}
                alt={`Cover Image for profile`}
                className="w-full max-w-xs h-full object-cover"
              />
            </div>
            <div className="md:w-2/3 p-4 md:p-6 vstack gap-2 bg-primary-1">
              <h1 className="text-primary-1 text-3xl font-medium">{"Yummy Rusk & Canelé"}</h1>
              <h3 className="text-primary-1 text-sm font-medium">{"ヤミー ラスク & カヌレ"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md">
                {'2022年1月、京都にて Higaki (DJ & Rap) を中心に結成。生楽器を取り入れた国内有数のエレクトロスウィングバンド。通称「らすくかぬれ」'}<br />
              </p>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md">
                {'2022年3月に初ライブ「春のお菓子祭り」を主催。同年10月にはオリジナル8曲を収録した 1st Album『宴』をリリース。そして、2023年3月には国内のエレクトロスウィングアーティストが集結する「エレスイフェス」を開催。'}<br />
                <br/>
              </p>

              <h1 className="text-primary-1 text-xl font-medium">{"Member"}</h1>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md">
                {"Mari (Vocal)"}<br/>
                {"Aimi (Vocal)"}<br/>
                {"North (Trumpet)"}<br/>
                {"South (Alto Saxophone)"}<br/>
                {"Taru (Tenor Saxophone)"}<br/>
                {"Koruri (Baritone Saxophone)"}<br/>
                {"Noa (Clarinet)"}<br/>
                {"Miya (Drums)"}<br/>
                {"Oleo (Synthesizer)"}<br/>
                {"Kaj (Synthesizer)"}<br/>
                {"Higaki (DJ & Rap)"}<br/>
              </p>
              <h1 className="text-primary-1 text-xl font-medium">{"Ex-Member"}</h1>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-md">
                {"Horse (Trombone) : ~ 2023年2月末"}<br/>
                <br/>
              </p>

            </div>
          </a>
      </div>
      </ContentLayout>
      }
      aside={
        <Profile />
      }
    />
  );
};
