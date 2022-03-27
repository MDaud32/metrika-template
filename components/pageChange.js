import Link from 'next/link';
import router from 'next/router';
import { FiArrowUpCircle, FiArrowLeftCircle } from 'react-icons/fi';

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
          <FiArrowLeftCircle />
        </a>
      </Link>
    </div>
  );
};

export default PageChange;
