import {createNavigation} from 'next-intl/navigation';

export const locales = ['en', 'da'] as const;

export const {Link, redirect, usePathname, useRouter} =
  createNavigation({locales});