import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt} from 'react-icons/fa';


export default function Home() {
  return (
    <div className="grid grid-rows items-center justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center ">
        <Image
          className="pt-6"
          src="/logo.png"
          alt="Logo Projeto Recomeçar"
          width={250}
          height={55}
          priority
        />
        <h1 className="text-3xl font-semibold text-gray-900  mb-5">
          Seja Bem-Vindo a Nossa Igreja
        </h1>
        <ol>
          <ul>
            Culto da Família aos Domingos às 10:00 AM
          </ul>
          <ul>
            Culto de Jovens todo 4° Sábado do Mês às 19:00 
          </ul>
          <ul>
            Reunião de Oração toda Terça-Feira às 20:00 
          </ul>
          <ul>
            Estudo Biblíco toda Quinta-Feira às 20:15 
          </ul>
        </ol>
      </main>
      <footer className="pt-12 row-start-3 flex gap-12 flex-wrap items-center justify-center">
      <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="https://www.google.com/maps/place/Projeto+Recomeçar/@-23.5557487,-46.5672157,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce5fbd27a79fa5:0x2b7cc1d83824cc0!8m2!3d-23.5557536!4d-46.5646354!16s%2Fg%2F11f4z14sck?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
          <FaMapMarkerAlt size={30} color="#FF0000" />
            Localização
          </a>
        <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5" href="https://wa.me/SEU_NUMERO_AQUI" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp size={30} color="#25D366" />
            Whatsapp
          </a>
        <a href="https://www.instagram.com/proj.recomecar?igsh=MXNqY21iZTdiaHMwcg==" target="_blank" rel="noopener noreferrer" className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
            <FaInstagram size={30} color="#E1306C"  />
            Instagram
          </a>
      </footer>
    </div>
  );
}
