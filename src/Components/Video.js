import React from 'react'
import '../Styles/Video.scss'

function Video() {
    return (
        <div className='video'>
            <div className="video__text">
                <h2>Quem são, o que fazem, onde vivem?</h2>
                <p>Não precisa embedar o vídeo do Rick Astley Remastered 4k 60 FPS, pode ser qualquer outro vídeo da sua escolha, mas queremos dar play.</p>
            </div>
            <iframe width="512" height="297" src="https://www.youtube.com/embed/vwjZcos4KlQ?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    )
}

export default Video