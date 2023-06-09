import { Suspense } from 'react';
import Link from 'next/link';
import Repo from '@/app/components/Repo';
import RepoDirs from '@/app/components/RepoDirs';

const RepoPage = ({ params: { name } }) => {
  // params means getting the data from the url and wesend it as name
  // we can make spinner until it load
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back bg-gray-100'>
        Back To Repositories
      </Link>
      <Suspense fallback={<div className="text-2xl">Loading repo...</div>}> 
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div className="text-2xl">Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};
export default RepoPage;