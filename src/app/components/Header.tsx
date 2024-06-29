import { Saira_Stencil_One } from 'next/font/google';
import Link from 'next/link';

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
});

export function Header() {
  return (
    <header className='flex px-14 py-7 items-center justify-between shadow-md shadow-fuchsia-500 '>
      <div className='font-bold text-[30px] text-fuchsia-800 hover:text-fuchsia-600 '>
        <a className={sairaStencil.className} href='/'>
          <p>CECILIUS</p>
        </a>
      </div>
      <div className='flex gap-8 text-lg text-fuchsia-400 font-bold '>
        <Link className='hover:text-fuchsia-800 ' href='/'>
          Sobre mim
        </Link>
        <Link className='hover:text-fuchsia-800 ' href='/skills'>
          Habilidades
        </Link>
        <Link className='hover:text-fuchsia-800 ' href='/projects'>
          Projetos
        </Link>
        <Link className='hover:text-fuchsia-800 ' href='/contacts'>
          Contatos
        </Link>
      </div>
    </header>
  );
}
