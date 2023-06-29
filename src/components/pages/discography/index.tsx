import { BiMusic } from 'react-icons/bi';
import { Date } from '@/components/common/Date';
import { Image } from '@/components/common/Image';
import { Link } from '@/components/common/Link';
import { MainLayout } from '@/components/features/app/Layout';
import { Profile } from '@/components/features/app/Profile';



export const Discography = () => {
  return (
    <MainLayout
      main={
        <div className="vstack p-5 bg-primary-1">
          <h2 className="hstack gap-2 text-primary-1 text-3xl font-bold tracking-tighter leading-tight ">
            {<BiMusic />} {"Discography"}
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0'>

            {/* あらくれサーカス */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=FIJciX-FYZc" passHref>
                <Image
                  src={"/assets/arakurecircus.png"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2023/05/25"} />
              <h3 className="text-primary-1 text-md font-medium">{"あらくれサーカス"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Lyrics & Vocal - Mari'}<br />
                {'Lyrics & Rap & DJ - Higaki'}<br />
                {'Music & Mix & Piano - Kaj'}<br />
                {'Trumpet - North'}<br />
                {'Tenor Sax - Taru'}<br />
                {'Baritone Sax - Koruri'}<br />
                {'Clarinet - Noa'}<br />
                {'Launch Pad - Miya'}<br />
                <br />
                {'Producer - Higaki'}<br />
                {'Editor - Miya'}<br />
                <br />
                {'−Special Thanks−'}<br />
                {'Dancer - 歌音'}<br />
                {'Director & Photographer - 玲珑 LINLON'}<br />
                {'Assistant - Arukion, Aimi, ゆーじん, Yukiko'}<br />
                {'Location - PAVILION COURT'}<br />
              </p>
            </div>

            {/* 1st Single あらくれサーカス */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=3vodifGSr4c" passHref>
                <Image
                  src={"/assets/1stsingle_arakurecircus.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2023/04/30"} />
              <h3 className="text-primary-1 text-md font-medium">{"1st Single 『あらくれサーカス』"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'−収録曲−'}<br />
                {'1. あらくれサーカス'}<br />
                {'2. 幽霊退治'}<br />
              </p>
            </div>

            {/* 泥棒猫 */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=tR7Rus3jt24" passHref>
                <Image
                  src={"/assets/dorobouneko.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2023/02/13"} />
              <h3 className="text-primary-1 text-md font-medium">{"泥棒猫"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Lyrics & Vocal - Mari'}<br />
                {'Music & Mix - Kaj'}<br />
                {'Music Video - Oleo'}<br />
                {'Title Calligraphy - Noa'}<br />
                {'−Special Thanks−'}<br />
                {'Illustration - miru'}<br />
              </p>
            </div>

            {/* 砂上の楼閣 */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=SQ0vlhrZOYI" passHref>
                <Image
                  src={"/assets/sajounoroukaku.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2023/02/13"} />
              <h3 className="text-primary-1 text-md font-medium">{"砂上の楼閣"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Lyrics & Vocal - Mari'}<br />
                {'Lyrics & Rap - Higaki'}<br />
                {'Music & Mix - Miya'}<br />
                {'Vocal Edit - Kaj'}<br />
                {'Music Video - Miya'}<br />
                {'−Special Thanks−'}<br />
                {'Illustration - Lima'}<br />
              </p>
            </div>

            {/* 宴 */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://ruskcanele.booth.pm/" passHref>
                <Image
                  src={"/assets/jacket1st.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2022/10/30"} />
              <h3 className="text-primary-1 text-md font-medium">{"1st Album『宴』"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'−収録曲−'}<br />
                {'1. L\'apéro'}<br />
                {'2. 船出'}<br />
                {'3. 砂上の楼閣'}<br />
                {'4. 我楽多'}<br />
                {'5. 乱痴気騒ぎ'}<br />
                {'6. Chaser'}<br />
                {'7. 泥棒猫'}<br />
                {'8. 乱痴気騒ぎ (Acoustic ver.)'}<br />
              </p>
            </div>

            {/* 船出 */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=lN5D3gj6knk" passHref>
                <Image
                  src={"/assets/funade.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2022/09/17"} />
              <h3 className="text-primary-1 text-md font-medium">{"船出"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Lyrics & Rap - Higaki'}<br />
                {'Lyrics & Vocal - Mari'}<br />
                {'Music & Mix - Oleo'}<br />
                {'Vocal Edit - Kaj'}<br />
                {'Title Calligraphy - Noa'}<br />
                {'Music Video - Oleo'}<br />
                {'−Special Thanks−'}<br />
                {'Illustration - yorolleyhoo'}<br />
              </p>
            </div>

            {/* 乱痴気騒ぎ(アコースティックver.) */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=pHmxOMCrxgU" passHref>
                <Image
                  src={"/assets/ranchikisawagi_ac.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2022/08/09"} />
              <h3 className="text-primary-1 text-md font-medium">{"乱痴気騒ぎ (Acoustic ver.)"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Lyrics & Vocal - Mari'}<br />
                {'Music - Kaj, Oleo, Mari'}<br />
                {'Voice Samples & DJ - Higaki'}<br />
                {'Title Calligraphy - Noa'}<br />
                {'Music Video Making - Oleo'}<br />
                {'−Special Thanks−'}<br />
                {'Illustration - yorolleyhoo'}<br />
              </p>
            </div>

            {/* 乱痴気騒ぎ */}
            <div className="top vstack lg:col-span-1 p-5">
              <Link href="https://www.youtube.com/watch?v=Duam9iddgxM" passHref>
                <Image
                  src={"/assets/ranchikisawagi.jpg"}
                  className="xs:max-w-xs xs:max-h-xs object-cover cursor-pointer"
                  alt={``}
                />
              </Link>
              <br />
              <Date date={"2022/07/15"} />
              <h3 className="text-primary-1 text-md font-medium">{"乱痴気騒ぎ"}</h3>
              <p className="text-neutral-700 dark:text-neutral-300 font-normal text-xs">
                {'Vocal - Mari'}<br />
                {'Arrangement - Kaj'}<br />
                {'Voice Samples & DJ - Higaki'}<br />
                {'Title Calligraphy - Noa'}<br />
                {'Music Video Making - Oleo'}<br />
                {'−Special Thanks−'}<br />
                {'Illustration - yorolleyhoo'}<br />
              </p>
            </div>

          </div>
        </div>
      }
      aside={
        <Profile />
      }
    />
  );
};
