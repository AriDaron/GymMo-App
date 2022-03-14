import React, { useEffect, useState } from "react";
import { getAllAudios } from "../ApiManager";


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
            {
                audios.map(
                    (audioObj) => {
                        return <p key={`audio--${audioObj.id}`}>
                            <div className="singleAudio">{audioObj.title}
                                
                                    <a href={audioObj.hyperlink}>
                                        <p className="audioLink">{audioObj.hyperlink} </p>
                                    </a>
                                
                            </div>
                        </p>
                    }
                )
            }

        </>
    )

}