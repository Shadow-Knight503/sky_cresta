import ServiceImg from "../assets/GlobeInHand.jpg"

function Services() {
    const divStyle: React.CSSProperties = {
        backgroundImage: `url(${ServiceImg})`,
        width: '100%',
    };

    return (
        <article className="flex text-4xl text-white mt-12 px-24">
            <h3 className="basis-1/2">Your vision,<br/> our
                <span className="text-orange-500"> foundation</span>.
                <p className="text-base mt-2 text-gray-200 mr-24">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur deserunt, et exercitationem facere fugit, incidunt magni nam non, odit praesentium tempore vitae. Aperiam blanditiis dicta dolor ea quaerat!</p>
                <button className="bg-orange-500 text-white text-lg py-2 px-4 rounded-2xl mt-12">
                    Get started</button>
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
    )
}

export default Services;
