import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// NOTE(okubo): wordpressでエラー出る文字列くる時あるので、ここで除外
const convertBreadcrumb = (str: string): string =>
  str.replace(/-/g, ' ').replace(/oe/g, 'ö').replace(/ae/g, 'ä').replace(/ue/g, 'ü').toUpperCase();

type Props = {
  title: string;
};

type BreadCrumb = {
  href: string;
  breadcrumb: string;
  title: string;
};

export const Breadcrumbs: React.FC<Props> = (props): JSX.Element => {
  const { title } = props;
  const router = useRouter();
  const [breadcrumbs, setBreadcrumbs] = useState<Array<BreadCrumb>>([]);

  useEffect(() => {
    if (router) {
      const linkPath = router.asPath.split('/');
      linkPath.shift();

      const pathArray = [
        {
          breadcrumb: linkPath.slice(-1)[0],
          href: `${linkPath.length === 1 ? '/' : '/posts/'}${linkPath
            .slice(linkPath.length - 1, linkPath.length)
            .join('/')}`,
          title
        }
      ];
      setBreadcrumbs(pathArray);
    }
  }, [router]);

  return (
    <>
      {breadcrumbs && (
        <div className='bg-gray-100 py-4'>
          <div className='px-6 mx-auto sm:px-10 sm:max-w-screen-md lg:max-w-screen-lg'>
            <div className='flex max-w-7xl mx-auto px-4 sm:px-6 mb-0 text-indigo-700 font-medium'>
              <div>
                <Link href='/'>
                  <a href='/' className='bread-effect'>
                    HOME
                  </a>
                </Link>
              </div>
              {breadcrumbs.map((breadcrumb) => (
                <div key={breadcrumb.href}>
                  &nbsp;&nbsp; / &nbsp;&nbsp;
                  <Link href={breadcrumb.href}>
                    <a href={breadcrumb.href} className='bread-effect'>
                      {convertBreadcrumb(breadcrumb.title)}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
