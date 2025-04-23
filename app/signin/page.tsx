'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '@/app/firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import Link from 'next/link';

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const docSnap = await getDoc(doc(db, 'users', cred.user.uid));
      const userData = docSnap.data();

      if (!cred.user.emailVerified) {
        alert("Email tasdiqlanmagan!");
        return;
      }

      router.push(`/${userData?.path}`);
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-10 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-10 text-center">Kirish</h1>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-4" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-4" />
      <p className='font-[montbold] mb-3 text-md'>If you haven't account you might <Link className='text-sky-800' href='/signup'>Sign Up</Link></p>
      <button className="bg-[#2B1B12] text-white py-2 px-4 rounded w-full">Kirish</button>
    </form>
  );
}
