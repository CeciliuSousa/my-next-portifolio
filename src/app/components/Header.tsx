import { Saira_Stencil_One } from 'next/font/google';

const sairaStencil = Saira_Stencil_One({
  weight: '400',
  subsets: ['latin'],
});

export function Header() {
  return (
    <header className='flex px-14 py-7 items-center justify-between shadow-sm shadow-fuchsia-500 '>
      <div className='font-bold text-[30px] text-fuchsia-800 '>
        <a className={sairaStencil.className} href='/'>
          <p>CECILIUS</p>
        </a>
      </div>
      <div className='flex gap-8 text-lg text-fuchsia-600 font-bold '>
        {/* <a className='hover:text-fuchsia-900' href=''>
          <p>Inicio</p>
        </a> */}
        <a className='hover:text-fuchsia-900' href=''>
          <p>Sobre mim</p>
        </a>
        <a className='hover:text-fuchsia-900' href=''>
          <p>Habilidades</p>
        </a>
        <a className='hover:text-fuchsia-900' href=''>
          <p>Projetos</p>
        </a>
        <a className='hover:text-fuchsia-900' href=''>
          <p>Contatos</p>
        </a>
      </div>
    </header>
  );
}
