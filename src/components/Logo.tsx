import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/">
        <Image 
            src="/Logo_TyE.svg" 
            alt="Logo de T&E Empaques" 
            width={80} 
            height={40} 
        />
    </Link>
  );
}
