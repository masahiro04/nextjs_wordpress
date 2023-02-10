import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Props = {
  title: string;
};

type BreadCrumb = {
  href: string;
  title: string;
};

export const Breadcrumbs: React.FC<Props> = ({ title }: Props) => {
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<BreadCrumb>>([]);

  const makeBreadCrumbs = (strArr: Array<string>): Array<BreadCrumb> => {
    const isLastEml = (elm: string): boolean => strArr.slice(-1)[0] === elm;

    // NOTE(okubo): wordpressでエラー出る文字列くる時あるので、ここで除外
    const makeTitle = (elm: string): string => {
      const removeUnsupportedStr = (str: string): string =>
        str.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü');
      return strArr.lastIndexOf(elm) ? removeUnsupportedStr(title) : removeUnsupportedStr(elm);
    };

    const makeLink = (str: string): string => `/${str}`;

    return strArr.map((link: string) => ({
      href: isLastEml(link) ? makeLink(strArr.join('/')) : makeLink(link),
      title: makeTitle(link)
    }));
  };

  useEffect(() => {
    if (router === undefined) return;
    const linkPath = router.asPath.split('/');
    linkPath.shift();
    setBreadcrumbs(makeBreadCrumbs(linkPath));
  }, [router]);

  return (
    <div>
      <div className='bg-gray-100 py-4'>
        <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
          <div className='flex max-w-7xl mx-auto px-4 sm:px-6 mb-0 text-indigo-700 font-medium'>
            <div className='space-x-4'>
              <Link href='/'>home</Link>
            </div>
            {breadcrumbs.map((breadcrumb) => (
              <div key={breadcrumb.title} className='space-x-4'>
                <Link href={breadcrumb.href}>&nbsp;/&nbsp;{breadcrumb.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
