import Container from '../../components/ui/Container';
import { GrFacebook, GrTwitter, GrLinkedin } from 'react-icons/gr';
const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between gap-10">
      
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Navigations</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">FAQs</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Privacy Policy
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Company</h1>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">About</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">Team</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-primary w-4 h-4 rounded-full grid place-content-center">
              <div className="bg-white w-2 h-2 rounded-full"></div>
            </div>
            <p className="cursor-pointer hover:underline font-medium">
              Contact
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="text-xl font-bold mb-2">Contact Information</h1>
          <p className="font-medium">Mohakhali, Dhaka 1212.</p>
          <p className="font-medium">+019 123 456 78</p>
          <p className="font-medium">info@cleanco.com</p>
        </div>
      </div>
      <div className="divider"></div>
      <p className="mt-6 mb-10">
        Copyright © 2023 Clean Co. | Powered by Clean Co.
      </p>
    </Container>
  );
};

export default Footer;
