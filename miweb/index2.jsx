import React, { useState, useEffect } from 'react';

function Menu() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-label="Abrir menú de navegación"
        className="p-2 rounded-md bg-gray-100"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
      </button>
      {open && (
        <div
          className="absolute right-4 mt-2 w-48 bg-white rounded-lg shadow p-3"
          tabIndex={-1}
          onBlur={() => setOpen(false)}
        >
          <a className="block py-2 text-sm" href="#services">Servicios</a>
          <a className="block py-2 text-sm" href="#portfolio">Portfolio</a>
          <a className="block py-2 text-sm" href="#pricing">Paquetes</a>
          <a className="block py-2 text-sm" href="#contact">Contacto</a>
        </div>
      )}
    </div>
  );
}

function ServiceCard({ title, desc, bullets }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-500 mt-2">{desc}</p>
      <ul className="mt-4 text-sm text-gray-600 space-y-1">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
      <div className="mt-4">
        <a href="#contact" className="text-blue-600 text-sm">Solicitar proyecto similar →</a>
      </div>
    </div>
  );
}

function PricingCard({ title, price, bullets, highlight }) {
  return (
    <div className={`rounded-xl p-6 border ${highlight ? 'border-blue-600 bg-gradient-to-br from-white to-blue-50 shadow-lg' : 'border-gray-100 bg-white'}`}>
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <div className="text-lg font-bold">{price}</div>
      </div>
      <ul className="mt-4 text-sm text-gray-600 space-y-2">
        {bullets.map((b, i) => <li key={i}>• {b}</li>)}
      </ul>
      <div className="mt-6">
        <a href="#contact" className={`block text-center px-4 py-2 rounded-md ${highlight ? 'bg-blue-600 text-white' : 'border'}`}>Elegir</a>
      </div>
    </div>
  );
}

/* ----------------- README / despliegue (resumen para el usuario) -----------------

Sugerencias SEO y checklist técnico:
- Reemplaza <title>, meta description y Open Graph en tu index.html o Head (si usas Next.js).
- Añade verificaciones para Google Search Console y sitemap.xml.
- Habilita compresión (gzip/brotli), optimiza imágenes (webp) y usa lazy-loading.
- Conecta un correo profesional (ej. hola@tu-dominio.com) y un CRM si necesitas gestionar leads.
- Seguridad: Habilita HTTPS, Content Security Policy y headers recomendados.

Despliegue recomendado:
- Vercel: arrastra tu repo, build command `npm run build` y framework detection.
- Netlify: similar, activa forms si quieres usar Netlify Forms.
- DigitalOcean App Platform: buena opción si necesitas servidores.

Servicios adicionales que puedo ayudarte a preparar:
- Copia (textos) persuasiva para cada sección, optimizada para SEO local.
- Preparar un repo listo con GitHub Actions o Vercel config.
- Integración de pasarelas de pago locales o plugins de e-commerce.

Fin del archivo.
*/