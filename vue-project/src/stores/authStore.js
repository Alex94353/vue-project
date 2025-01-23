
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    users: [],
    currentUser: JSON.parse(localStorage.getItem('currentUser')) || null,
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  }),
  actions: {
    signUp(user) {
      const existingUser = this.users.find(u => u.email === user.email);
      if (existingUser) {
        throw new Error("uz je taky");
      }
      this.users.push(user); 
    },
    logIn(credentials) {
      const user = this.users.find(
        u => u.email === credentials.email && u.password === credentials.password
      );
      if (!user) {
        throw new Error("nie je spravne");
      }
      this.currentUser = user;
      this.isLoggedIn = true;

      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    },
    logOut() {
      this.currentUser = null;
      this.isLoggedIn = false;

      localStorage.removeItem('currentUser');
      localStorage.setItem('isLoggedIn', JSON.stringify(false));
    },
  },
});


