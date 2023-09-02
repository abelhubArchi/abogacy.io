import './../js/firebase.js';
import { goto } from '$app/navigation';
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import { redirect } from '@sveltejs/kit';

var session = false;
const auth = getAuth();


onAuthStateChanged(auth, (user)=>{
	if (user) {
		const uid = user.uid
		console.log('si esta en session');
		session = true
	}else{
		console.log('no esta en session zz');
		session = false;
	}
});