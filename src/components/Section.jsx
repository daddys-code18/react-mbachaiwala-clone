import React from 'react'

const Section = ({ h3, text, hasBtn = true, btnTxt, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => {
    return (
        <section style={{ backgroundColor: backgroundColor }} className='section'>
            <div>
                <h3 style={{ color: headingColor, }}>{h3}</h3>
                <p style={{ color: textColor, }}>{text}</p>
                {hasBtn && <button style={{ color: btnColor, backgroundColor: btnBgColor }}>{btnTxt}</button>}
                <div>
                    <img src={imgSrc} alt="" style={{
                        width: imgSize
                    }} />
                </div>
            </div>
        </section >
    )
}

export default Section
