import Link from 'next/link';

export default function TopMenuItem( {title,pageRef} : {title:string,pageRef:string} ) {
  return(
    <Link className='w-[120px] text-center text-[10pt] text-black my-auto font-[Verdana]' href={pageRef}>
      {title}
    </Link>
  );
}