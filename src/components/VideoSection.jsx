import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-16 bg-[#C9A84C]/30"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="section-label">CONHEÇA A VERTEX</p>
          <h2 className="section-title">
            Veja como transformamos empresas no digital
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Uma visão rápida de quem somos, o que fazemos e por que nossos clientes crescem.
          </p>
        </motion.div>

        <motion.div
          className="relative rounded-2xl overflow-hidden border border-[#C9A84C]/20 shadow-2xl shadow-black/60"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Browser chrome decorative bar */}
          <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-[#C9A84C]/10">
            <div className="w-3 h-3 rounded-full bg-red-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/70"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/70"></div>
            <div className="flex-1 mx-4 bg-[#0a0a0a] rounded px-3 py-1 text-[#B0B0B0] text-xs text-center">
              vertexestrategia.site — Apresentação
            </div>
          </div>

          <div className="relative bg-black aspect-video">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/vertex-apresentacao.mp4"
              controls={playing}
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
            />

            {/* Play overlay */}
            {!playing && (
              <div
                className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer bg-black/40 hover:bg-black/30 transition-colors group"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-white/80 mt-4 text-sm font-medium tracking-wide">Assistir apresentação</p>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/5548984941156?text=Ol%C3%A1!%20Assisti%20a%20apresenta%C3%A7%C3%A3o%20da%20Vertex%20e%20quero%20saber%20mais."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Quero resultado assim para minha empresa
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
