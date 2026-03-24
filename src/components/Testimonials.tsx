import ServiceImg from "../assets/GlobeInHand.jpg";

function Testimonials() {
    const divStyle: React.CSSProperties = {
        backgroundImage: `url(${ServiceImg})`,
        width: '100%',
    };

    const testimonials = [
        {name: "John Smith", review: "First time visiting BSH and it was great! Fun energy in the studio among\n" +
                "the staff and other clients. My stylist Nyima provided amazing service, and\n" +
                "put in loads of time with my excessive amount of hair. I loved the colour,\n" +
                "the much-needed trim and bouncy blow-out. This place is worth the\n" +
                "splurge to look and feel wonderful.", date: "2021-01-01"},
        {name: "Kelly Shelly", review: "They are reliable, honest and operate with integrity.\n" +
                "I recommend them to anyone who is looking for some\n" +
                "great mechanics.\n" +
                "Tony always takes the time to answer any questions I may\n" +
                "have, and provides me with all the options available- from\n" +
                "repair to replacement.\n" +
                "As a woman, it can be difficult to find mechanics you can\n" +
                "trust with your vehicle, so I'm very happy to have been\n" +
                "referred to GT Auto. Tony and John are the best!", date: "2021-01-01"},
        {name: "Dennis Reynolds", review: "I have a 3rd party vehicle warranty and I was wandering if it would cover my\n" +
                "suspension issue, I came here after going to BMW Toronto who said that my case\n" +
                "is not covered. Bloor West Auto EuroMechanic took my car for diagnostics along\n" +
                "with a copy of my warranty agreement They researched my agreement, called\n" +
                "the warranty, clarified some followup questions and submitted a claim to the\n" +
                "warranty The claim was approvedl", date: "2025-03-22"}
    ]

    return (
        <section>
            <article className="flex text-4xl text-white mt-12 xl:px-[10rem] bg-prim py-12 min-h-[35vh]">
                <h3 className="basis-1/2 my-auto">Your vision,<br/> our
                    <span className="text-accn"> foundation</span>.
                    <p className="text-base mt-2 text-gray-200 mr-24">We are a South India based integrated infrastructure and engineering company delivering end-to-end solutions across machinery, civil construction, and interior & exterior development. With strong technical expertise and structured project management systems, we serve residential, commercial, and industrial sectors across South India.</p>
                </h3>
                <div className="flex flex-wrap group gap-4 basis-1/2 hover:gap-0
                transition-all duration-200 ease-in-out">
                    <div className="basis-[45%] bg-size-[200%_200%] bg-top-left rounded-b-4xl
                    group-hover:rounded-none group-hover:rounded-tl-4xl blur-xs group-hover:blur-none
                    tranisiton-all duration-200 ease"
                         style={divStyle}/>
                    <div className="basis-[45%] bg-size-[200%_200%] bg-top-right rounded-b-4xl
                    group-hover:rounded-none group-hover:rounded-tr-4xl blur-xs group-hover:blur-none
                    tranisiton-all duration-200 ease"
                         style={divStyle}/>
                    <div className="basis-[45%] bg-size-[200%_200%] bg-bottom-left rounded-t-4xl
                    group-hover:rounded-none group-hover:rounded-bl-4xl blur-xs group-hover:blur-none
                    tranisiton-all duration-200 ease"
                         style={divStyle}/>
                    <div className="basis-[45%] bg-size-[200%_200%] bg-bottom-right rounded-t-4xl
                    group-hover:rounded-none group-hover:rounded-br-4xl blur-xs group-hover:blur-none
                    tranisiton-all duration-200 ease"
                         style={divStyle}/>
                </div>
            </article>
            <article className="flex flex-wrap justify-center px-[10rem] py-8 gap-4">
                <h3 className="basis-full font-titl text-center text-3xl">Our testimonials</h3>
                {testimonials.map((testimonial, ind) => (
                    <div key={ind} className="grid grid-cols-1 place-content-between border
                        rounded-lg basis-2/5 p-2 shadow-lg">
                        <p className="border-l-4 border-prim pl-2 mb-4">{testimonial.review}</p>
                        <h3 className="text-prim font-titl inline">{testimonial.name}
                            <span className="text-accn float-right">Posted on {testimonial.date}</span>
                        </h3>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Testimonials;
