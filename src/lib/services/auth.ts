import { supabase } from '$lib/supabase';
// import { username, fullname, avatar, userId } from '$lib/stores/userStore';
// import { toast } from '@zerodevx/svelte-toast';

export const signout = async () => {
    await supabase.auth.signOut();
    location.reload();
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