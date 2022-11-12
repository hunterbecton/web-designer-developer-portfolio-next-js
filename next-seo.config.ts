import type { NextSeoProps } from 'next-seo';

export const NEXT_SEO_DEFAULT: NextSeoProps = {
  titleTemplate: 'Wilfred Brett | %s',
  title: 'Web designer and developer in Atlanta, GA',
  description:
    'Web designer and developer in Atlanta, Georgia. I can help your team design memorable, user-friendly web experiences and write the code to bring them to life.',
  openGraph: {
    title: 'Web designer and developer in Atlanta, GA',
    description:
      'Web designer and developer in Atlanta, Georgia. I can help your team design memorable, user-friendly web experiences and write the code to bring them to life.',
    type: 'website',
    locale: 'en_US',
    site_name: 'Wilfred Brett',
    images: [
      {
        url: `https://web-designer-developer-portfolio-next-js.vercel.app/social.jpg`,
        width: 1200,
        height: 600,
        alt: 'Web designer and developer in Atlanta, GA',
      },
    ],
  },
  twitter: {
    site: '@skillthrive',
    cardType: 'summary_large_image',
  },
};
