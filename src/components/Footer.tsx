import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand & Intro */}
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-4">
              Dr. Shyam Kumar
            </h3>
            <p className="mb-4 text-slate-400">
              Modern physiotherapy consultancy providing comprehensive care and advanced treatments for holistic healing and pain relief.
            </p>
            <div className="inline-flex items-center gap-2 bg-primary-900/50 text-primary-300 px-4 py-2 rounded-lg text-sm font-semibold border border-primary-800/50">
              ✓ Home Visit Available
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="hover:text-primary-400 transition-colors">About The Clinic</Link></li>
              <li><Link href="#services" className="hover:text-primary-400 transition-colors">Our Services</Link></li>
              <li><Link href="#doctors" className="hover:text-primary-400 transition-colors">Meet Dr. Shyam Kumar</Link></li>
              <li><Link href="#faq" className="hover:text-primary-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact & Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-500 mt-1 shrink-0" size={20} />
                <span>New Jaganpura bharat petroleum near kotak mahindra bank, 800027 Patna</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary-500 shrink-0" size={20} />
                <span>Call for Appointment</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="text-primary-500 shrink-0" size={20} />
                <span className="font-semibold text-white">Free Consultation Available</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Dr. Shyam Kumar Physiotherapy Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
