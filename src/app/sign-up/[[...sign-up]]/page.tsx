import { SignUp } from '@clerk/nextjs'
import { div } from 'framer-motion/dist/client'
import Header from '../../Header';
export default function Page() {
  return (
    <>
    <Header />
  <div className="flex items-center justify-center h-full">
    <SignUp />
  </div>
  
  </>);
}