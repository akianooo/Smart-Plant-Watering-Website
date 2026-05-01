import Layout from "@/components/Layout";
import Image from "next/image";
import DevImage1 from "../../../public/Image1.jpg";
import DevImage2 from "../../../public/Image2.jpg";
import DevImage3 from "../../../public/Image3.jpg";
export default function AboutPage() {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-[#00fa9a]">
        Project Background
      </h1>

      <p className="text-lg text-gray-700 mb-4">
        GreenRoot is a smart plant care system designed to simplify and improve
        the way people take care of their plants. This project was created to
        address common challenges in gardening such as overwatering,
        underwatering, and lack of proper plant monitoring.
      </p>

      <p className="text-gray-600 mb-4">
        By integrating technology with plant care, GreenRoot provides users with
        an efficient and reliable way to maintain healthy plants. The system
        aims to support both beginners and experienced gardeners by offering
        smart solutions that reduce guesswork and promote sustainable plant
        growth.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-6 text-[#00fa9a]">
        Developers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Developer 1 */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
            <Image
              src={DevImage1}
              alt="Developer 1"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-medium text-gray-800">Kian Bernardo</p>
        </div>

        {/* Developer 2 */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
            <Image
              src={DevImage2}
              alt="Developer 2"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-medium text-gray-800">Jamaica Goyone</p>
        </div>

        {/* Developer 3 */}
        <div>
          <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden relative">
            <Image
              src={DevImage3}
              alt="Developer 3"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-medium text-gray-800">John Mark Rubio</p>
        </div>
      </div>
    </section>
  );
}
