// /js/app.js
import { signUp, signIn, signOut } from './auth.js'
import { startCheckout } from './payments.js'
import { secureDownload } from './download.js'

// مثال بسيط بدون فورم حقيقي — بدّل حسب UI بتاعك
document.getElementById('btn-signup')?.addEventListener('click', async () => {
  const email = prompt('Email?')
  const password = prompt('Password?')
  try {
    await signUp(email, password)
    alert('تم التسجيل — افتح بريدك إن كان مفعّل تأكيد الإيميل')
  } catch (e) { alert(e.message) }
})

document.getElementById('btn-login')?.addEventListener('click', async () => {
  const email = prompt('Email?')
  const password = prompt('Password?')
  try {
    await signIn(email, password)
    alert('تم تسجيل الدخول')
  } catch (e) { alert(e.message) }
})

document.getElementById('btn-logout')?.addEventListener('click', async () => {
  try {
    await signOut()
    alert('تم تسجيل الخروج')
  } catch (e) { alert(e.message) }
})

document.getElementById('btn-download')?.addEventListener('click', async () => {
  await secureDownload()
})

// (اختياري) زرار للدفع وربطه لاحقًا
// document.getElementById('btn-pay')?.addEventListener('click', startCheckout)
