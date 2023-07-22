import { createClient } from '@supabase/supabase-js';

const URL = 'https://hqmfaktjdjckunugbumi.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhxbWZha3RqZGpja3VudWdidW1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk1OTEwOTksImV4cCI6MjAwNTE2NzA5OX0.ifY7mjMIEqOQzlTD8Rl7MxOd4Zkhebhgt2pqenyH0Lc';
const supabase = createClient(URL, API_KEY);


export default supabase;