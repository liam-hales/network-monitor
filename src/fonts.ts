import { Montserrat, Cascadia_Code } from 'next/font/google';

/**
 * The Montserrat font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/Urbanist
 */
export const montserrat = Montserrat({
  variable: '--sans-font',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '800'],
});

/**
 * The Cascadia Code font from Google Fonts
 * self-hosted by `next/font`
 *
 * @url https://fonts.google.com/specimen/Cascadia+Mono
 */
export const cascadiaCode = Cascadia_Code({
  variable: '--mono-font',
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '700'],
});
