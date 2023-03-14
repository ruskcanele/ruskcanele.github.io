import { DefaultSeo } from 'next-seo';
import { ROOT_URL } from '@/config/app';
import { useRootPath } from '@/hooks/useRootPath';
import { joinPath } from '@/lib/joinPath';

export const Seo = () => {
  const rootPath = useRootPath();
  const imageURL = joinPath(ROOT_URL, '/assets/icon1.jpg');

  return (
    <>
      <DefaultSeo
        defaultTitle="Yummy Rusk & Canelé Official Site"
        description="Yummy Rusk & Canelé Official Site"
        openGraph={{
          type: 'website',
          title: 'Yummy Rusk & Canelé Official Site',
          description: 'Yummy Rusk & Canelé Official Site',
          site_name: 'Yummy Rusk & Canelé Official Site',
          url: ROOT_URL,
          images: [
            {
              url: imageURL,
              width: 512,
              height: 512,
              alt: 'Og Image Alt',
              type: 'image/jpg',
            },
          ],
        }}
        twitter={{
          handle: '@ruskcanele',
          site: '@ruskcanele',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: `${rootPath}/favicons/favicon-16x16.png`,
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: `${rootPath}/favicons/favicon-32x32.png`,
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: `${rootPath}/favicons/apple-touch-icon-180x180.png`,
          }
        ]}
      />
    </>
  );
};
