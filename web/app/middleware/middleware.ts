import { NextResponse } from "next/server";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { ContextProps } from '../interfaces/interfaces';

export const middleware = async (req: any) => {
  const { user, savedUser } = useContext(AuthContext) as ContextProps;
  console.log(user)
  let url = req.url;

  // if (!user && url.includes('/dashboard')) {
  //   return NextResponse.redirect('/');
  // }
  if (!savedUser?.isAdmin && url.includes('/dashboard/users')) {
    return NextResponse.redirect('/dashboard')
  }
  if (user && url === '/signin') {
    return NextResponse.redirect('/dashboard');
  }
}