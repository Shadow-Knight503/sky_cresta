import {useState} from "react";

interface projProps {
    nme: string,
    clt: string,
    dur: string,
    gal: string[],
    ind: number
}

const Project = (proj: projProps) => {
    const [currImg, setCurrImg] = useState<string>(proj.gal[0]);

    return (
        <div className={`flex gap-4 mt-24 justify-center 
            ${(proj.ind % 2 !== 0 ? "flex-row-reverse": "")}`}>
            <div className={`grid grid-cols-2 basis-3/7 bg-contain bg-no-repeat bg-center 
                place-content-between aspect-video`}
                 style={{backgroundImage: `url('${currImg}')`}}>
                {proj.gal.map((img, ind) => (
                    <img className={`size-24 rounded-tr-2xl rounded-bl-2xl -mt-8 -mb-8 
                        border-8 border-gray-950 transition-all duration-200 ease-in  
                        ${(img === currImg ? " grayscale sepia-50 scale-150" : "")}
                        ${(ind % 2 === 0 ? " -ml-4" : " -mr-4 justify-self-end")}`}
                         src={img} key={ind}
                         alt={`${proj.nme} Img ${ind + 1}`}
                         onClick={() => setCurrImg(img)}
                    />
                ))}
            </div>
            <div className="text-white text-lg basis-1/2 px-12 text-justify">
                <h3 className="text-orange-500 text-4xl font-titl">Project {proj.nme}</h3>
                <h6 className="mt-1 text-gray-200 font-semibold">Commissioned by: {proj.clt}</h6>
                <h4 className="italic">Duration: <span className="text-orange-500">{proj.dur}</span></h4>
                <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, culpa dolor dolorem ducimus excepturi explicabo, ipsa ipsam itaque laboriosam libero maiores mollitia officiis, placeat quam quis recusandae reiciendis? Laboriosam, officia!</p>
            </div>
        </div>
    )
}

export default Project;
