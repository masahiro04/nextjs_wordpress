import { Layout } from '@/presentation';
import { NextPage } from 'next';
import Image from 'next/image';

type Props = {
  name: string;
  description: string;
  url: string;
};
const Item: React.FC<Props> = (props: Props) => {
  const { name, description, url } = props;
  return (
    <div className='relative w-full group cursor-pointer mb-2 sm:mb-8'>
      <a href={url} target='_blank' rel='noreferrer'>
        <div className='break-inside-avoid-column py-3 bg-white rounded-md max-w-full px-6 bg-opacity-60 shadow-sm duration-500 group-hover:shadow-lg group-hover:scale-[1.01] group-hover:bg-opacity-90'>
          <div className='font-semibold text-gray-600 text-sm sm:text-base'>{name}</div>
          <div className='text-gray-500 font-thin text-sm duration-500 group-hover:text-gray-600'>{description}</div>
        </div>
      </a>
    </div>
  );
};

const Bee: React.FC = () => {
  return (
    <Image className='drop-shadow-md text-shadow w-full' src='/static/images/bee.svg' alt='' width='100' height='100' />
  );
};

const Projects: NextPage = () => {
  return (
    <Layout>
      <div className='max-w-xl mx-auto'>
        <a className='w-full group' href='https://github.com/masahiro04' target='_blank' rel='noreferrer'>
          <div className='relative'>
            <Image className='w-full' src='/static/images/honeycomb.svg' alt='' width='100' height='100' />
            <div className='absolute -scale-x-100 top-[35%] w-[9%] group-hover:duration-1000 group-hover:translate-x-[280%] group-hover:-translate-y-1 group-hover:delay-100'>
              <Bee />
            </div>
            <div className='absolute -scale-x-100 bottom-[13%] left-[25%] w-[7%] group-hover:duration-700 group-hover:translate-x-[100%] group-hover:-translate-y-1'>
              <Bee />
            </div>
            <div className='absolute rotate-12 -scale-x-100 top-[15%] left-[15%] w-[6.5%] group-hover:duration-700 group-hover:translate-x-[250%] group-hover:-translate-y-1'>
              <Bee />
            </div>
            <div className='absolute -rotate-24 bottom-[20%] right-[18%] w-[6%] group-hover:duration-1000 group-hover:-translate-x-[230%] group-hover:-translate-y-1 group-hover:delay-50'>
              <Bee />
            </div>
            <div className='absolute top-[20%] right-[8%] w-[9%] group-hover:duration-1000 group-hover:-translate-x-[230%] group-hover:-translate-y-1 group-hover:delay-100'>
              <Bee />
            </div>
            <div className='absolute w-full h-full flex justify-center top-0'>
              <div className='drop-shadow-lg flex-none self-center text-gray-800 w-[70%] h-[70%]'>
                <Image className='w-auto mx-auto' src='/static/images/github.svg' alt='' layout='fill' objectFit='contain' />
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className='space-y-16'>
        <div>
          <div className='mb-3 font-semibold text-gray-700 text-lg sm:text-xl'>Currently working on</div>
          <div className='gap-8 gap-x-10 justify-center sm:columns-2'>
            <Item
              name='Seibii'
              description='A service where a mechanic will come to your home to perform maintenance simply by submitting a maintenance request via the web.'
              url='https://seibii.co.jp/'
            />

            <Item
              name='Doctormate'
              description='A service that allows nursing homes to easily provide medical consultation for residents to physicians and nurses.'
              url='https://doctormate.co.jp/'
            />
          </div>
        </div>
        <div>
          <div className='mb-3 font-semibold text-gray-700 text-lg sm:text-xl'>Advisors</div>
          <div className='gap-8 gap-x-10 justify-center sm:columns-2'>
            <Item
              name='Benten'
              description='A service that allows users to easily request cosmetics orders on a platform.'
              url='https://bentenmarket.com/'
            />
            <Item
              name='Everyplus'
              description='A service that matches nursing homes with recreation providers.'
              url='https://recreation.everyplus.jp/'
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
