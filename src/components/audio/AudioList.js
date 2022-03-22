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
            <div className = "audioList">
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
            </div>
        </>
    )

}