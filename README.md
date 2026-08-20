# ARXITEKTURA & IT ACADEMY - Professional O'quv Markazi Platformasi

Ushbu loyiha zamonaviy O'quv Markazi uchun **React 19**, **TypeScript**, **Tailwind CSS**, **Vite** va **Lucide Icons** asosida yaratilgan to'liq funksional veb-platforma va Admin Paneli hisoblanadi.

---

## 🌟 Asosiy Imkoniyatlar va Bo'limlar

### 1. Ochiq Qism (Public Portal - Foydalanuvchilar uchun)
- **Bosh sahifa (Home)**:
  - Interaktiv Hero Slider va animatsiyalar
  - Markaz statistikasi (Bitiruvchilar soni, ishga joylashish ko'rsatkichi, tajriba)
  - Nega aynan biz? (Amaliyot, Zamonaviy texnika, Xalqaro sertifikat, Coworking)
  - Ommabop kurslar kartochkalari va toifalar bo'yicha tezkor filter
  - Tajribali mentorlar va ustozlar preview
  - Bitiruvchilar ishlayotgan kompaniyalar (Discover Invest, Murad Buildings, EPAM, IT Park va boshqalar)
  - O'quvchilar va bitiruvchilarning real sharhlari (Testimonials) + Yangi sharh qoldirish
  - Bepul diagnostika va konsultatsiyaga yozilish CTA bloklari
- **Kurslar Katalogi (Courses Page)**:
  - Jonli qidiruv (nomi, tavsifi va yo'nalishi bo'yicha)
  - Kategoriya va Daraja (Boshlang'ich, O'rta, Mukammal) bo'yicha filterlash
  - Narxi (arzondan/qimmatga) va reytingi bo'yicha tartiblash
- **Kurs — Batafsil Sahifa (Course Detail)**:
  - Kursning to'liq dasturi (Interaktiv modulli Sillabus)
  - Kurs murabbiyi haqida to'liq ma'lumot va tajribasi
  - Narxlar, chegirmalar va haftalik dars jadvallari
  - Talablar va o'rganiladigan bilimlar ro'yxati
  - Sticky tezkor ariza yuborish formasi
  - O'xshash kurslar bloki
- **O'qituvchilar Sahifasi (Teachers Page)**:
  - Barcha mentorlarning portfoliosi, tajribasi, sertifikatlari va dars beradigan kurslari
- **Markaz Haqida (About Us)**:
  - Markaz missiyasi, maqsadi va qadriyatlari
  - Filiallar (Yunusobod, Chilonzor) xaritasi va telefonlari bilan
- **Blog & Yangiliklar (Blog & News)**:
  - Soha mutaxassislarining tahliliy maqolalari, ko'rishlar soni va teglari
  - Maqolani o'qish va ijtimoiy tarmoqlarga ulashish (Share)
- **Aloqa & Xarita (Contact Page)**:
  - To'g'ridan-to'g'ri aloqa ma'lumotlari va interaktiv savol/xabar yuborish
  - Google Maps integratsiyasi
- **Global Yordamchi Elementlar**:
  - Bepul konsultatsiyaga yozilish modali (Konfetti effekti va telefon validatsiyasi bilan)
  - Onlayn chat & Telegram yordamchi widgeti (pastki burchakda)
  - To'liq mobil versiya (Responsive Mobile Drawer va touch-friendly interfeys)

---

### 2. Admin Panel (To'liq Boshqaruv Markazi)
Admin panelga kirish URL: sayt boshidagi yoki pastidagi **"Admin Panel"** tugmasi orqali kiriladi.

#### 🔑 Demo Kirish Ma'lumotlari:
| Rol | Login | Parol | Huquqlar |
|---|---|---|---|
| **Super Admin** | `admin` | `admin123` | Barcha bo'limlarni to'liq boshqarish |
| **Menejer** | `manager` | `12345` | Kurslar, arizalar, o'qituvchilarni boshqarish |
| **Moderator** | `moderator` | `12345` | Blog va otzivlar moderatsiyasi |

#### 📊 Admin Boshqaruv Bo'limlari:
1. **Statistika & Dashboard**:
   - Kunlik/oylik arizalar oqimi, konversiya foizi, tushumlar hisoboti va so'nggi murojaatlar.
2. **Arizalar (Lidlar) CRM**:
   - Yangi kelgan har bir arizani ko'rish, statusini o'zgartirish (*Yangi*, *Bog'lanildi*, *O'quvchi bo'ldi*, *Rad etildi*), ichki izohlar (Notes) yozish, Excel (CSV) formatida eksport qilish.
3. **Kurslar Boshqaruvi (CRUD)**:
   - Yangi kurs qo'shish, mavjudlarini tahrirlash, narx, chegirma, jadval va sillabus modullarini kiritish, kursni faol/nofaol qilish.
4. **O'qituvchilar Boshqaruvi (CRUD)**:
   - Mentor qo'shish, tajribasi, sertifikatlari va yo'nalishlarini yangilash.
5. **Talabalar Boshqaruvi (CRM)**:
   - Faol guruhlar, to'lov holati (*To'liq*, *Qisman*, *To'lanmagan*) va o'zlashtirish progressini monitoring qilish.
6. **Blog & Yangiliklar Boshqaruvi**:
   - Maqola qo'shish, tahrirlash va e'lon qilish.
7. **Otzivlar Moderatsiyasi**:
   - Saytga qoldirilgan talabalar fikrlarini tasdiqlash yoki yangi sharh kiritish.
8. **Tizim Sozlamalari**:
   - Markaz manzili, telefonlari, ish vaqti, SEO meta ma'lumotlari va Telegram bot token sozlamalari.

---

## 🛠️ O'rnatish va Ishga Tushirish

Loyihani o'z kompyuteringizda ishga tushirish uchun:

```bash
# Repozitoriyni klonlash
git clone https://github.com/humoyun1773/arxitektura-web.git

# Loyiha papkasiga kirish
cd arxitektura-web

# Paketlarni o'rnatish
npm install

# Dasturchi rejimida ishga tushirish
npm run dev
```

Brauzeringizda `http://localhost:5173` manzilini oching.

---

## 🚀 Ishlab Chiqilgan Texnologiyalar
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Vite**
- **Lucide Icons**
- **Canvas-Confetti**
- **LocalStorage Data Synchronization Engine**
