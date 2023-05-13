import React from 'react'

const Pratice2 = () => {
    const isLogin = true;
    const name = "ali";
    const surname = "can";

    return (
        <div>
            {
                isLogin ?
                    (<>
                        <div>hoşgeldiniz {name} {surname}</div>
                        <ul>
                            <li>profil</li>
                            <li>rezervasyonlar</li>
                            <li>cıkıs</li>
                        </ul>
                    </>

                    )
                    :
                    (
                        <div>Lütfen Giriş Yapınız!</div>
                    )
            }

        </div>
    )
}

export default Pratice2