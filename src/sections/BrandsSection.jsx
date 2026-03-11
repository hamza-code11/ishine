import React from 'react';
import appleLogo from '../assets/logos/OIP.jfif';
import googleLogo from '../assets/logos/Google-Logo.wine.png';
import motorolaLogo from '../assets/logos/Motorola-logo-black-and-white.png';
import nokiaLogo from '../assets/logos/Nokia-Logo.png';
import oneplusLogo from '../assets/logos/OnePlus-Logo.png';
import tclLogo from '../assets/logos/png-transparent-tcl-hd-logo.png';
import samsungLogo from '../assets/logos/Samsung-emblem.png';

const BrandsSection = () => {
    const brands = [
        { name: 'Apple', logo: appleLogo },
        { name: 'Samsung', logo: samsungLogo },
        { name: 'Motorola', logo: motorolaLogo },
        { name: 'Google', logo: googleLogo },
        { name: 'OnePlus', logo: oneplusLogo },
        { name: 'Nokia', logo: nokiaLogo },
        { name: 'TCL', logo: tclLogo },
    ];

    return (
        <section className="border-y border-slate-100 bg-white py-10 overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee w-max hover:[animation-play-state:paused] cursor-default">
                {[...Array(3)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex items-center gap-20 px-10">
                        {brands.map((brand, i) => (
                            <div
                                key={`${groupIndex}-${i}`}
                                className="flex items-center justify-center w-32 h-16 rounded-xl p-2 group transition-all"
                            >
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    // h-full aur w-full image ko container ke hisab se resize karega
                                    // object-contain yeh ensure karega ke ratio kharab na ho
                                    className="h-full w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default BrandsSection;
