import Link from 'next/link';
import { FiArrowUpCircle, FiArrowRightCircle } from 'react-icons/fi';

const PageChange = ({ target }) => {
  return (
    <div className="flex gap-2 mr-4">
      <Link href={'/'}>
        <a>
          <FiArrowUpCircle />
        </a>
      </Link>

      <Link href={`${target}`}>
        <a>
          <FiArrowRightCircle />
        </a>
      </Link>
    </div>
  );
};

export default PageChange;
