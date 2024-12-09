'use client'

import { motion } from "framer-motion"
import { Instagram, MapPin, Phone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <main className="container mx-auto px-4 py-6 flex flex-col items-center justify-center min-h-screen space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-8"
        >
          {/* Logo */}
          <div className="flex items-center justify-center mx-auto mb-7">
            <Image
              src="/logo-full-color.svg"
              alt="Projeto Recomeçar Logo"
              width={300}
              height={300}
              className="dark:invert"
              priority
            />
          </div>

          {/* Welcome Text */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100">
              Seja Bem-Vindo a Nossa Igreja
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Um lugar de recomeço, fé e comunhão
            </p>
          </div>

          {/* Service Times */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto space-y-4 bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
              Nossos Horários
            </h2>
            <div className="space-y-3 text-slate-600 dark:text-slate-300">
              <p className="flex items-center justify-between gap-4">
                <span>Culto da Família</span>
                <span className="font-medium">Domingos às 10:00 AM</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span>Culto de Jovens</span>
                <span className="font-medium">4º Sábado do Mês às 19:00</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span>Reunião de Oração</span>
                <span className="font-medium">Terças às 20:00</span>
              </p>
              <p className="flex items-center justify-between gap-4">
                <span>Estudo Bíblico</span>
                <span className="font-medium">Quintas às 20:15</span>
              </p>
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <Link
              href="https://www.google.com/maps/place/Projeto+Recomeçar/@-23.5557536,-46.5646354,15z/data=!4m6!3m5!1s0x94ce5fbd27a79fa5:0x2b7cc1d83824cc0!8m2!3d-23.5557536!4d-46.5646354!16s%2Fg%2F11f4z14sck?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-sky-300 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
            >
              <MapPin className="w-5 h-5" />
              <span>Localização</span>
            </Link>
            <Link
              href="https://wa.me/5511952188447"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600 transition-colors shadow-sm"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp</span>
            </Link>
            <Link
              href="https://www.instagram.com/proj.recomecar?igsh=MXNqY21iZTdiaHMwcg=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition-opacity shadow-sm"
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </Link>
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

