type Props = {
  onClick: () => void;
};

export const BackButton: React.FC<Props> = ({ onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className='relative cursor-pointer duration-500 py-2 bg-white rounded-md shadow-sm px-2 bg-opacity-60 flex items-center w-24 justify-center text-gray-600 text-sm -translate-y-1 hover:shadow-md sm:-translate-y-2'
    >
      <span className='mr-1'>Back</span>
      <img className='w-4 h-4 sm:w-5 sm:h-5' src={'/static/images/back_arrow.svg'} alt='back arrow icon' />
    </div>
  );
};
