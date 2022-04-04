import React, { useEffect, useState } from "react";
import { getAllAudios } from "../ApiManager";
import "./AudioList.css"

export const AudioList = () => {
    const [audios, setAudios] = useState([])


    useEffect(
        () => {
            getAllAudios()
                .then(
                    (response) => {
                        setAudios(response)
                    }
                )
        },
        []
    )
    return (
        <>
            <h1 className="homepageLogo">GYmMo Audios</h1>
            <div className="picAndList">
                    <img className="earbud_img" src="https://www.stylist.co.uk/images/app/uploads/2020/08/26124506/audio-fitness-trend-crop-1598442988-1281x1281.jpg?w=1200&h=1&fit=max&auto=format%2Ccompress" />

            <aside className = "audioList">
                {
                    audios.map(
                        (audioObj) => {
                            return <div key={`audio--${audioObj.id}`} >
                                <div className="singleAudio">{audioObj.title}

                                    <a href={audioObj.hyperlink}>
                                        <p className="audioLink">{audioObj.hyperlink} </p>
                                    </a>

                                </div>
                            </div>
                        }
                    )
                }
            </aside>
            </div>
        </>
    )

}