'use client';

import Head from 'next/head';
import Image from 'next/image';
import CopyLinkButton from "@/components/CopyLinkButton";

export default function Home() {
  return (
     <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-800">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">Website Donasi Online</h1>
        <p className="mt-2 text-lg text-gray-600">Bersama kita bisa membuat perbedaan untuk mereka yang membutuhkan</p>
      </header>

      <main className="flex flex-col gap-12 row-start-2 items-center sm:items-center">
        {/* Hero Image */}
        <Image
          src="/me.png" 
          alt="Picture of the author"
          width={500}
          height={500}
        />

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Mari Berkontribusi</h2>
          <p className="text-gray-600 mt-2">Pilih program yang ingin Anda bantu dan jadilah bagian dari perubahan.</p>
          <a
            href="/program"
            className="mt-4 inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition"
          >
            Lihat Program Donasi
          </a>
        </div>

        {/* Profil Organisasi */}
        <section className="w-full bg-white rounded-lg shadow-lg p-6 sm:p-10">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Profil Kami</h3>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Image
              src="/jdm.png" 
              alt="Picture of the author"
              width={400}
              height={300}
            />
            <div className="text-gray-600">
              <p>
                Website Donasi Online adalah platform yang dirancang untuk memudahkan masyarakat dalam berbagi kepada
                mereka yang membutuhkan. Kami bekerja sama dengan berbagai organisasi terpercaya untuk memastikan
                donasi Anda tepat sasaran.
              </p>
              <p className="mt-4">
                Visi kami adalah menciptakan dunia di mana setiap orang memiliki akses ke pendidikan, pangan, dan
                kebutuhan dasar lainnya. Dengan donasi Anda, kita bisa mewujudkan visi ini bersama-sama.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Programs */}
        <section className="w-full">
          <h3 className="text-xl font-bold mb-4">Program Unggulan</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border rounded-lg shadow-md p-4 text-center">
              <Image
                src="/me.png" 
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <h4 className="mt-4 text-lg font-bold text-gray-800">Pendidikan Anak Yatim</h4>
              <p className="text-gray-600 mt-2">Target: Rp 50.000.000</p>
              <a
                href="/donate"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">Donasi Sekarang</a>
            </div>
            <div className="border rounded-lg shadow-md p-4 text-center">
              <Image
                src="/me.png" 
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <h4 className="mt-4 text-lg font-bold text-gray-800">Bantuan Bencana Alam</h4>
              <p className="text-gray-600 mt-2">Target: Rp 100.000.000</p>
              <a
                href="/donate"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Donasi Sekarang
              </a>
            </div>
            <div className="border rounded-lg shadow-md p-4 text-center">
              <Image
                src="/me.png" 
                alt="Picture of the author"
                width={500}
                height={500}
              />
              <h4 className="mt-4 text-lg font-bold text-gray-800">Program Pangan Sehat</h4>
              <p className="text-gray-600 mt-2">Target: Rp 30.000.000</p>
              <a
                href="/donate"
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Donasi Sekarang
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="row-start-3 text-center text-gray-600 text-sm">
        <p>© 2024 Website Donasi Online. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            Twitter
          </a>
          <CopyLinkButton />
        </div>
      </footer>
    </div>
  );
}
