import Insta from "../assets/instagram.png"
import LkdIn from "../assets/linkedin.png"
import FacBk from "../assets/facebook.png"
import {forwardRef, type Ref} from "react";

const Footer = forwardRef((_props, ref: Ref<HTMLDivElement>) => {
    const socials = [
        {ico: Insta, nme: "Instagram", url: "https://instagram.com"},
        {ico: LkdIn, nme: "Linkedin", url: "https://linkedin.com"},
        {ico: FacBk, nme: "Facebook", url: "https://facebook.com"},
    ]

    return (
        <footer ref={ref} className="w-screen flex bg-black mt-12">
            <div className="basis-1/2 p-12 text-white text-lg">
                <h2 className="font-titl text-4xl">Contact</h2>
                <hr className="text-orange-500 w-10 border-t-6 my-2"/>
                <p>Hundred Streets Avenue</p>
                <p>Example City, Sample State</p>
                <p>+91 99969 42069</p>
                <h3 className="text-2xl mt-12 font-titl">Follow Us on</h3>
                <div className="flex gap-2 mt-2">
                    {socials.map((social) => (
                        <a href={social.url}>
                            <img className="size-8 invert hover:scale-120" src={social.ico} alt={social.nme}/>
                        </a>
                    ))}
                </div>
            </div>
            <iframe className="basis-1/2 w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0860729904884!2d80.24974467507744!3d13.030190587290544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b664628343%3A0x59f0f19293fa3850!2sDemonte%20Colony%2C%20Abiramapuram%2C%20Chennai%2C%20Tamil%20Nadu%20600018!5e0!3m2!1sen!2sin!4v1772175925079!5m2!1sen!2sin"
                    height="450" allowFullScreen={true} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
        </footer>
    )
})

export default Footer
