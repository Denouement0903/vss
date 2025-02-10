import juff_ockhuis from '../../assets/Alumni/juff-ockhuis.jpg';
import Image from 'next/image';

export default function JuffOckhuis() {
    return (
        <section className="w-[500px]">
            <div className="flex flex-row gap-8 w-screen h-screen transition-all duration-500 ease-in-out 
                            bg-no-repeat bg-center bg-cover
                            bg-[url('../app/assets/Alumni/HD-wallpaper-plain-black-black.jpg')] 
                            hover:bg-[url('../app/assets/Alumni/bg-juff-ockhuis.jpg')] hover:bg-cover"
            >
                <div className="flex-col px-8 py-8 transition ease-in-out delay-150 duration-500 hover:-translate-y-6 w-[500px]">
                        <Image
                            className="rounded-lg"
                            src={juff_ockhuis}
                            alt="juff-ockhuis"
                            width={200}
                            height={200}
                            priority
                            />
                </div>
            </div>
        </section>
    );
}