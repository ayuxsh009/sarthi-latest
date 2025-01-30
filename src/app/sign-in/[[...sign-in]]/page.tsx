import { SignIn } from '@clerk/nextjs';
import { motion } from 'framer-motion';
import Header from '../../Header';

export default function Page() {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-full py-10">
        <SignIn afterSignInUrl="/Main" />
      </div>
    </>
  );
}
