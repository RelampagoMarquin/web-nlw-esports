import './styles/main.css';
import {
  useState,
  useEffect
} from 'react';
import logo from './assets/Logo.svg'
import { CreateAdBanner } from './components/CreateAdBanner';
import { GameBanner } from './components/GameBanner';
import * as Dialog from '@radix-ui/react-dialog'
import { CreateAdModal } from './components/CreateAdModal';
import { apiAxios } from './utils/axios';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    apiAxios.get('/games')
        .then(response => {
          setGames(response.data)
      })
  }, [])

  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="logo" />
      <h1 className='text-6xl text-white font-black mt-20'>Seu update develop<span className='text-transparent bg-nlw-gradient bg-clip-text'>dou</span> está aqui. (develop)</h1>

      <div className=' grid grid-cols-6 gap-6 mt-16'>
        {games.map(game => {
          return (
            <GameBanner
              key={game.id}
              bannerUrl={game.bannerUrl}
              title={game.title}
              adsCount={game._count.ads}
            />
          )
        })}

      </div>

      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}

export default App
