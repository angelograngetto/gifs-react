import Gif from '../Gif'
import './styles.css'

export default function ListOfGifs({gifs}){
    return  <div className='ListOfGifs'>
                {
                 gifs.map(singleGif => {
                    return <Gif 
                                key={singleGif.id}
                                title={singleGif.title} 
                                id={singleGif.id} 
                                url={singleGif.url}
                            />
                 })
                }
            </div>
}