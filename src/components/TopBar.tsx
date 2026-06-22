import React from 'react';
import { Mail, Phone, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

// Slim contact + social utility bar shown above the main navigation —
// inspired by Lusitânia & Baby Kids. Hidden on small screens to keep the
// mobile header clean; the same details live in the footer.
const socials = [
{ icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
{ icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
{ icon: Youtube, href: 'https://youtube.com', label: 'YouTube' }];

export function TopBar() {
  return (
    <div className="hidden md:block w-full bg-navy text-white/90 text-xs">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a
            href="mailto:info@crystalschool.ac.zw"
            className="flex items-center gap-2 hover:text-sky transition-colors">
            <Mail className="w-3.5 h-3.5" />
            info@crystalschool.ac.zw
          </a>
          <a
            href="tel:+263000000000"
            className="flex items-center gap-2 hover:text-sky transition-colors">
            <Phone className="w-3.5 h-3.5" />
            +263 00 000 0000
          </a>
          <span className="hidden lg:flex items-center gap-2 text-white/70">
            <Clock className="w-3.5 h-3.5" />
            Mon – Fri: 07:30 – 16:00
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden lg:inline text-white/60 tracking-widest uppercase">
            Glaudina, Harare
          </span>
          <div className="flex items-center gap-3">
            {socials.map((s) =>
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-white/70 hover:text-sky transition-colors">
              <s.icon className="w-3.5 h-3.5" />
            </a>
            )}
          </div>
        </div>
      </div>
    </div>);

}
