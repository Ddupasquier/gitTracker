import { goto } from '$app/navigation';
import { supabase } from '$lib/supabase';
// import { username, fullname, avatar, userId } from '$lib/stores/userStore';
// import { toast } from '@zerodevx/svelte-toast';

export const signout = () => {
    supabase.auth.signOut();
    goto('/auth');
};


// * TODO: Add error handling for profile not existing
// export const getProfile = async (id: string | undefined) => {
//     if (id) {
//         const { data, error } = await supabase
//             .from('profiles')
//             .select('username, fullName, avatarUrl')
//             .eq('id', id)
//             .single();

//         if (error) {
//             return
//         }
//     }
// };