// /js/payments.js
import { supabase } from './supabaseClient.js'

export async function userIsPaid(userId) {
  // بنعتبر إن وجود صف status='paid' يكفي للتحميل
  const { data, error } = await supabase
    .from('payments')
    .select('status')
    .eq('user_id', userId)
    .eq('status', 'paid')
    .maybeSingle()

  if (error) {
    // لو مفيش صف، maybeSingle بيرجع null بدون error — تجاهل
    console.warn('payments check error:', error.message)
  }
  return !!data // true لو لقى صف مدفوع
}

// Placeholder لبدء الدفع (اربطه لاحقًا بـ Stripe/Paymob/PayPal)
export async function startCheckout() {
  alert('اربط هنا بوابة الدفع (Stripe/Paymob/PayPal). بعد الدفع، اعمل سجل في payments بـ status=paid')
}
