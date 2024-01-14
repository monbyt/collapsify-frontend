import collapsifylogo from '../assets/collapsifylogotext.png'
import Image from 'next/image';

const Joined = () => {
  return (
    <main className="flex flex-col justify-center items-center text-white">
    <Image src={collapsifylogo} alt="Chumy Logo" className="w-36 mb-4" />
    <h1 className="text-3xl lg:text-5xl font-sans">
      Thank you for signing up! Stay tuned...
    </h1>
  </main>
  );
}

export default Joined;
