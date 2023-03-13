import React from 'react'

const Footer = () => {
    const footeLinks = (element) => {
        const allFooterLinks = document.querySelectorAll(".footerLinks");
        switch (element) {
            case 0:
                allFooterLinks.forEach((item, index) => index === 0 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;
            case 1:
                allFooterLinks.forEach((item, index) => index === 1 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;
            case 2:
                allFooterLinks.forEach((item, index) => index === 2 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;
            case 3:
                allFooterLinks.forEach((item, index) => index === 3 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;
            case 4:
                allFooterLinks.forEach((item, index) => index === 4 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;
            case 5:
                allFooterLinks.forEach((item, index) => index === 5 ? (item.style.opacity = 1) : (item.style.opacity = 0.2)

                )

                break;



            default:

                allFooterLinks.forEach((item, index) => (item.style.opacity = 1)

                )



                break;
        }

    }
    const linksbackToNormal = () => {
        const allFooterLinks = document.querySelectorAll(".footerLinks");
        allFooterLinks.forEach((item) => (item.style.opacity = 1))


    }
    return (

        <>
            <footer>
                <h1>
                    Let's<br />
                    #ConnectOnCutting?
                </h1>
                <aside onMouseLeave={linksbackToNormal}>
                    <a href="/" className="footerLinks" onMouseOver={() => footeLinks(0)}>Home</a>
                    <a href="/story" className="footerLinks" onMouseOver={() => footeLinks(1)}>Story</a>
                    <a href="/media" className="footerLinks" onMouseOver={() => footeLinks(2)}>Media</a>
                    <a href="/franchise" className="footerLinks" onMouseOver={() => footeLinks(3)}>Franchise</a>
                    <a href="/events" className="footerLinks" onMouseOver={() => footeLinks(4)}>Events</a>
                    <a href="/chaiwalacares" className="footerLinks" onMouseOver={() => footeLinks(5)}>Chai Wala Cares</a>
                </aside>
                <div>
                    <h5>Email</h5>
                    <a href="mailto: info@mbachaiwala.com">Info@mbachaiwala.com</a>
                    <a href="mailto: franchise@mbachaiwala.com">Franchise@mbachaiwala.com</a>
                </div>
                <div>
                    <h5>Phone</h5>
                    <a href="tel:+9172290522">+9172290522</a>
                </div>
                <p> © CPOYRIGHT 2023 MBA CHAIWALA. MADE BY</p>

            </footer>
            <div className='footer'>

            </div>
        </>
    )
}

export default Footer
