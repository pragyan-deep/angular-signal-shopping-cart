import { createClient } from '@supabase/supabase-js'
import { environment } from '../environments/environment';
const supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
export default supabase;