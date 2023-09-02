import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */

export function load({ params, url }) {
  
    return {  
      caso: params.slug,
       
    };
  throw error(404, 'wasa');
}
