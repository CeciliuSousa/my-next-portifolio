import Image from 'next/image';

export function Content() {
  return (
    <div className='flex justify-center px-16 py-10 items-center gap-[220px]'>
      <div>
        <div className='rounded-full overflow-hidden border-2 border-fuchsia-800 shadow-lg shadow-slate-900 '>
          <Image
            src='https://avatars.githubusercontent.com/u/112483893?s=400&u=ded087f4bd276fa34862c84dfbac502bdd0fbb6b&v=4'
            alt='Minha foto de perfil do github'
            width={450}
            height={450}
            className='object-cover'
          />
        </div>
      </div>
      <div className=' w-[550px] text-right text-fuchsia-800 font-bold mt-8 '>
        <div className='text-[16px] text-right '>
          <p>Cecilius Afonso Sousa do Carmo</p>
        </div>
        <div className=' font-bold text-[36px] text-right mb-6 '>
          <p>Desenvolvedor Full Stack</p>
        </div>
        <div className='text-[18px]  text-fuchsia-700 '>
          <p>
            Sou estudante de Sistemas de Informação com experiência prática em
            programação. Estou comprometido em aprimorar minhas habilidades
            técnicas para enfrentar desafios complexos na área de tecnologia.
            Busco oportunidades para aplicar meu conhecimento e contribuir de
            maneira significativa em projetos que impulsionem a inovação e
            eficiência.
          </p>
        </div>
      </div>
    </div>
  );
}
