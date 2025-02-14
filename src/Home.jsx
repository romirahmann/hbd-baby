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

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-4xl font-bold relative">
      <Confetti
        width={width}
        height={height}
        numberOfPieces={600}
        recycle={false}
        gravity={0.1}
        tweenDuration={1000}
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500"
      >
        💖 Happy Birthday 💖
      </motion.p>
    </div>
  );
}

function Home() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const audio = new Audio("/birthday-song.mp3");
    audio.play();
    audio.loop = true;
    setTimeout(() => {
      setShowMessage(true);
    }, 3000);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-200 p-4 text-center">
        {showMessage && (
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl md:text-6xl font-bold text-red-600 w-full text-center"
          >
            <p>❤️Risya Ristia Wardah!❤️</p>
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
            biasa, yang memberi warna dan cinta dalam hidupku.
          </p>
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
