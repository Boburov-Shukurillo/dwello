'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { auth } from '@/app/firebase/config';
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '@/app/firebase/config';
import Link from 'next/link';

export default function SignUpPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e: any) => {
        e.preventDefault();
        try {
            const userCred = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCred.user;

            const uniquePath = uuid();
            await sendEmailVerification(user);
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                uid: user.uid,
                path: uniquePath,
            });

            router.push(`/${uniquePath}`);
        } catch (err: any) {
            alert(err.message);
        }
    };

    return (
        <form onSubmit={handleSignup} className="p-10 max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-10 text-center">Ro'yxatdan o'tish</h1>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full p-2 border mb-4" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="w-full p-2 border mb-4" />
            <p className='font-[montbold] mb-3 text-md'>If you have account you might <Link className='text-sky-800' href='/signin'>Sign In</Link></p>
            <button className="bg-[#2B1B12] text-white py-2 px-4 rounded w-full">Ro‘yxatdan o‘tish</button>
        </form>
    );
}
