import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

function Fireworks() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();
  const [isHide, setIsHide] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsHide(false);
    }, 3000);
  }, [navigate]);

  const handleGoHome = () => {
    navigate("/home");
    const audio = new Audio("/sound.mp3");
    audio.play().catch((error) => {
      console.error("Gagal memutar audio:", error);
    });
    audio.loop = true;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-4xl font-bold relative">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={600}
        recycle={false}
        gravity={0.05}
        tweenDuration={1000}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="text-red-500 text-birthday"
      >
        💖 Happy Birthday 💖
      </motion.p>

      <button
        hidden={isHide}
        onClick={handleGoHome}
        className="bg-pink-700 px-3 py-2 rounded-lg mt-10"
      >
        NEXT
      </button>
    </div>
  );
}
const data = [
  {
    imageLink: "/4.jpeg",
  },
  {
    imageLink: "/5.jpeg",
  },
  {
    imageLink: "3.jpeg",
  },
  {
    imageLink: "6.jpeg",
  },
  {
    imageLink: "7.jpeg",
  },
  {
    imageLink: "9.jpeg",
  },
  {
    imageLink: "8.jpeg",
  },
  {
    imageLink: "10.jpeg",
  },
  {
    imageLink: "11.jpeg",
  },
];
function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMessage(true);
    }, 1000);
  }, [showMessage]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-4 text-center">
        {showMessage && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 100 }}
            transition={{ duration: 2 }}
            className="text-2xl md:text-6xl font-bold text-red-600 w-full text-center"
          >
            ❤️Risya Ristia Wardah!❤️
          </motion.h1>
        )}
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-4 text-center">
        <section className="mt-10 p-6 bg-white shadow-lg rounded-lg max-w-2xl">
          <h2 className="text-2xl font-bold text-red-500">Spesial For U 💖</h2>
          <p className="mt-4 text-lg">
            Selamat ulang tahun yang ke-18, sayang. Hari ini adalah momen yang
            sangat istimewa, bukan hanya karena bertambahnya usiamu, tapi juga
            karena aku bersyukur setiap detik bisa mengenalmu. Tuhan telah
            memberkati dunia dengan hadirnya dirimu, dan aku merasa sangat
            beruntung bisa menjadi bagian dari perjalanan hidupmu. Semoga di
            usia yang baru ini, kamu selalu diberikan kesehatan, kebahagiaan,
            dan segala hal baik yang layak kamu dapatkan. Aku berharap kita bisa
            selalu bersama, saling mendukung, dan menemani satu sama lain hingga
            usia kita bertambah tua. Aku berjanji akan selalu ada di sampingmu,
            sekarang dan selamanya. Terima kasih sudah menjadi kamu yang luar
            biasa, yang memberi warna dan cinta dalam hidupku. Maaf selama ini
            aku masih sering bikin kamu kesel, kecewa, sedih dan lainnya. Mari
            kita mulai sama sama bangun pondasi yang kuat supaya nanti rumah
            tangga kita juga makin kuat 💖
          </p>
        </section>
        <section className="gallery mt-96">
          <span className="p-5 text-4xl font-bold ">OUR MEMORY</span>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {data.map(({ imageLink }, index) => (
              <div key={index}>
                <img
                  className="h-40 w-full max-w-full rounded-lg object-cover object-center"
                  src={imageLink}
                  alt="gallery-photo"
                />
              </div>
            ))}
          </div>
        </section>
        <section className="mt-10 bg-pink-800 w-full p-2">
          <span className="text-white font-bold tex-2xl">I LOVE U</span>
        </section>
      </div>
    </>
  );
}

export default function LoveMessage() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Fireworks />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
