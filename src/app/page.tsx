import Navbar from '../components/navbar/Navbar';
import TitleComponent from '@/components/title/title';
import Sobre from '@/components/sobre/Sobre';
import Tecnologias from '@/components/tecnologias/Tecnologias';

export default function Home() {
  return (
    <>
    <Navbar />
    <TitleComponent />
    <Tecnologias />
    <Sobre />
    </>
  )
}
