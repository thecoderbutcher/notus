import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '@/app/(landing)/components/Navbar';

const Header = () => {
  const socialLinks = [
    { icon: <FaFacebook />, title: 'Facebook', url: '' },
    { icon: <FaInstagram />, title: 'Instagram', url: '' },
    { icon: <FaYoutube />, title: 'Youtube', url: '' },
    { icon: <FaWhatsapp />, title: 'Whatsapp', url: '' },
  ];
  const contactInfo = [
    { icon: <FaMapMarkerAlt />, title: 'Location', text: 'Maipú 18, D5730 Villa Mercedes, San Luis' },
    { icon: <FaEnvelope />, title: 'Email', text: 'informacion@notus.com.ar' },
    { icon: <FaPhoneAlt />, title: 'Phone', text: '+5492665035694' },
  ];
  return (
    <header className="flex flex-col w-full text-textDark/70">
      <div className="hidden lg:flex">
        <div className="flex gap-2 items-center justify-end bg-accent py-2 px-4 w-1/3">
          <h2 className='font-semibold text-lg'>Siguenos:</h2>
          <ul className="flex gap-2">
            {socialLinks.map(social => (
              <li key={social.title} className='bg-baseSurfaceDark p-2 rounded-full'>
                <a href={social.url}>{social.icon}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex items-center bg-baseSurfaceDark w-2/3 px-8 justify-end'>
          <ul className="flex gap-4">
            {contactInfo.map(social => (
              <li key={social.title} className='flex gap-1 items-center'>
                <span className='text-accent'>{social.icon}</span>
                <span className='text-sm'>{social.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
