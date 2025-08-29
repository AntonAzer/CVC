// /js/download.js
import { supabase } from './supabaseClient.js'
import { getCurrentUser } from './auth.js'
import { userIsPaid } from './payments.js'

// عدّل المسار لو ملفك مختلف
const BUCKET = 'cv'
const FILE_PATH = 'templates/cv-template.pdf'
const URL_EXPIRES = 60; // صلاحية رابط التحميل بالثواني

export async function secureDownload() {
  const user = await getCurrentUser()
  if (!user) {
    alert('سجّل دخول الأول')
    return
  }

  const paid = await userIsPaid(user.id)
  if (!paid) {
    alert('لازم تدفع الأول قبل التحميل')
    return
  }

  // إنشاء رابط مُوقّع من Storage (يعمل فقط إذا سياسة Storage سمحت بالقراءة)
  const { data, error } = await supabase
    .storage
    .from(BUCKET)
    .createSignedUrl(FILE_PATH, URL_EXPIRES)

  if (error) {
    console.error('signed url error:', error.message)
    alert('حصل خطأ في إنشاء رابط التحميل')
    return
  }

  // فتح/تحميل الملف
  window.location.href = data.signedUrl
}
