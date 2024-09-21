import { CanActivateFn } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { inject } from '@angular/core';
export const authGuard: CanActivateFn = async (route, state) => {
  const firebaseAuth = inject(Auth);
  const user = await firebaseAuth.currentUser;
  const isLoggedIn = !!user;
  return isLoggedIn;
};

export const noAuthGuard: CanActivateFn = async (route, state) => {
  const firebaseAuth = inject(Auth);
  const user = await firebaseAuth.currentUser;
  const isLoggedIn = !!user;
  return !isLoggedIn;
};
