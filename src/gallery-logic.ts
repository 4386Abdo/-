/**
 * منطق وتصنيف معرض الصور لمول الشناوي للأجهزة الكهربائية والمنزلية
 */

export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  categoryName: string;
  image: string;
  description: string;
}

export const GALLERY_CATEGORIES = [
  { id: 'all', name: 'الكل' },
  { id: 'showroom', name: 'صالة العرض بالفرع' },
  { id: 'cooling', name: 'ثلاجات وديب فريزر' },
  { id: 'cooking', name: 'بوتاجازات وأفران' },
  { id: 'washers', name: 'غسالات وأجهزة تنظيف' },
  { id: 'electronics', name: 'شاشات وتكييفات' }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 1,
    title: 'المدخل وصالة العرض الرئيسية',
    category: 'showroom',
    categoryName: 'صالة العرض بالفرع',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
    description: 'جولة داخل المعرض واستعراض أحدث الأجهزة الكهربائية والمنزلية الأصلية بفرع السنطة.'
  },
  {
    id: 2,
    title: 'جناح الثلاجات والديب فريزر النوفروست',
    category: 'cooling',
    categoryName: 'ثلاجات وديب فريزر',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
    description: 'تشكيلة متكاملة من ثلاجات وديب فريزر بأعلى مستويات كفاءة الطاقة وتبريد متوازن.'
  },
  {
    id: 3,
    title: 'قسم البوتاجازات والأفران وحوامل الزهر',
    category: 'cooking',
    categoryName: 'بوتاجازات وأفران',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&w=1000&q=80',
    description: 'أفضل موديلات البوتاجازات ستانلس ستيل مع أمان كامل 100% وشوايات ومراوح توزيع حراري.'
  },
  {
    id: 4,
    title: 'معرض الغسالات الأوتوماتيك والإنفرتر',
    category: 'washers',
    categoryName: 'غسالات وأجهزة تنظيف',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=1000&q=80',
    description: 'غسالات ملابس فوق أوتوماتيك وفول أوتوماتيك بموتور دفع مباشر صامت واقتصادي.'
  },
  {
    id: 5,
    title: 'جناح الشاشات الذكية بدقة 4K',
    category: 'electronics',
    categoryName: 'شاشات وتكييفات',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=1000&q=80',
    description: 'شاشات عرض ذكية سمارت بأحجام مختلفة وصوت محيطي نقي وألوان سينمائية.'
  },
  {
    id: 6,
    title: 'قسم التكييفات والمراوح الصيفية',
    category: 'electronics',
    categoryName: 'شاشات وتكييفات',
    image: 'https://images.unsplash.com/photo-1614633833026-0720421298d0?auto=format&fit=crop&w=1000&q=80',
    description: 'تكييفات بارد/ساخن بلازما كلاستر لتنقية الهواء وتوفير استهلاك الكهرباء.'
  },
  {
    id: 7,
    title: 'أدوات المطبخ وأجهزة التحضير السريعة',
    category: 'showroom',
    categoryName: 'صالة العرض بالفرع',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=1000&q=80',
    description: 'خلاطات ومحضرات طعام ومكانس كهربائية وقلايات هوائية صحية للمنزل العصري.'
  },
  {
    id: 8,
    title: 'ركن أطقم الطهي والحلل الجرانيت التركي',
    category: 'showroom',
    categoryName: 'صالة العرض بالفرع',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=1000&q=80',
    description: 'أفخم أطقم الحلل الصحية غير اللاصقة ومستلزمات جهاز العروسة المتكاملة.'
  }
];

/**
 * فلترة صور المعرض حسب القسم
 */
export function filterGallery(items: GalleryItem[], categoryId: string): GalleryItem[] {
  if (!categoryId || categoryId === 'all') {
    return items;
  }
  return items.filter((item) => item.category === categoryId);
}

/**
 * حساب المؤشر التالي في عارض الصور (Lightbox) بشكل دائري
 */
export function getNextLightboxIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex + 1) % total;
}

/**
 * حساب المؤشر السابق في عارض الصور (Lightbox) بشكل دائري
 */
export function getPrevLightboxIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex - 1 + total) % total;
}
