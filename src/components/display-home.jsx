import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './album-item'
import Navbar from './navbar'
import SongItem from './song-item'

const DisplayHome = () => {
	return (
		<>
			<Navbar />
			<div className='mb-4'>
				<h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
				<div className='flex overflow-auto'>
					{albumsData.map((item, idx) => (
						<AlbumItem key={idx} {...item} />
					))}
				</div>
			</div>
			<div className='mb-4'>
				<h1 className='my-5 font-bold text-2xl'>Today&apos;s biggest hits</h1>
				<div className='flex overflow-auto'>
					{songsData.map((item, idx) => (
						<SongItem key={idx} {...item} />
					))}
				</div>
			</div>
		</>
	)
}

export default DisplayHome
