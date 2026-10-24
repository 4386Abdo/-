/**
 * منطق وبيانات المنتجات لمول الشناوي للأجهزة الكهربائية والمنزلية
 */

export interface Product {
  id: number;
  name: string;
  category: string;
  categoryName: string;
  description: string;
  image: string;
  badge?: string;
  features: string[];
}

export const PHONE_NUMBER = '01012164433';
export const WHATSAPP_PHONE = '201012164433';

export const CATEGORIES = [
  { id: 'all', name: 'جميع المنتجات', icon: 'grid' },
  { id: 'refrigerators', name: 'ثلاجات وديب فريزر', icon: 'snowflake' },
  { id: 'washers', name: 'غسالات أوتوماتيك', icon: 'disc' },
  { id: 'cookers', name: 'بوتاجازات وأفران', icon: 'flame' },
  { id: 'ac', name: 'تكييفات ومراوح', icon: 'wind' },
  { id: 'small-appliances', name: 'أجهزة صغيرة', icon: 'coffee' },
  { id: 'tvs', name: 'شاشات وتلفزيونات', icon: 'tv' },
  { id: 'housewares', name: 'أدوات منزلية', icon: 'utensils' }
];

export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    name: 'ثلاجة نوفروست تبريد متطور 16 قدم',
    category: 'refrigerators',
    categoryName: 'ثلاجات وديب فريزر',
    description: 'سعة تخزينية ممتازة، كفاءة عالية في استهلاك الطاقة، تبريد متساوي بدون تكوين ثلج.',
    image: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80',
    badge: 'الأكثر طلباً',
    features: ['نوفروست بالكامل', 'أرفف زجاجية مقواة', 'ضمان معتمد 10 سنوات']
  },
  {
    id: 2,
    name: 'غسالة فول أوتوماتيك 8 كيلو إنفرتر',
    category: 'washers',
    categoryName: 'غسالات أوتوماتيك',
    description: 'موتور إنفرتر موفر للكهرباء هادئ تماماً، برامج متعددة للملابس الحساسة والقطنية.',
    image: 'https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=600&q=80',
    badge: 'توفير طاقة A+++',
    features: ['موتور دفع مباشر هادئ', 'برنامج غسيل سريع 15 دقيقة', 'حلة عناية فائقة']
  },
  {
    id: 3,
    name: 'بوتاجاز 5 شعلة ستانلس ستيل أمان كامل',
    category: 'cookers',
    categoryName: 'بوتاجازات وأفران',
    description: 'سطح ستانلس عالي الجودة سهل التنظيف، حوامل زهر ثقيلة، شواية ومروحة لتوزيع الحرارة.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80',
    badge: 'أمان كامل 100%',
    features: ['حوامل حديد زهر', 'إشعال ذاتي', 'مروحة تبريد وتوزيع بالفرن']
  },
  {
    id: 4,
    name: 'تكييف سبليت 1.5 حصان بارد/ساخن ديجيتال',
    category: 'ac',
    categoryName: 'تكييفات ومراوح',
    description: 'تبريد وتدفئة فائقة السرعة مع فلاتر لتنقية الهواء، بلازما وشاشة ديجيتال لعرض الحرارة.',
    image: 'https://images.unsplash.com/photo-1614633833026-0720421298d0?auto=format&fit=crop&w=600&q=80',
    badge: 'تبريد فائق سريع',
    features: ['خاصية البلازما كلاستر', 'فلتر ضد الأتربة والروائح', 'ضمان 5 سنوات']
  },
  {
    id: 5,
    name: 'شاشة سمارت 50 بوصة بدقة 4K Ultra HD',
    category: 'tvs',
    categoryName: 'شاشات وتلفزيونات',
    description: 'صورة نقية بألوان واقعية زاهية، نظام تشغيل ذكي يدعم يوتيوب وشاهد ونتفلكس مع ريموت ماجيك.',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    badge: 'دقة 4K فائقة',
    features: ['رسيفر داخلي مدمج', 'صوت محيطي Dolby', 'واي فاي وبلوتوث']
  },
  {
    id: 6,
    name: 'محضر طعام ومفرمة متكامل 1000 وات',
    category: 'small-appliances',
    categoryName: 'أجهزة صغيرة',
    description: 'جهاز متعدد الوظائف (خلاط، كبة، عصارة، ومطحنة) بشفرات فولاذية حادة لا تصدأ.',
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
    badge: 'متعدد الاستخدام',
    features: ['موتور نحاسي قوي 1000 وات', 'ملحقات متنوعة للتقطيع والخلط', 'أمان عند التشغيل']
  },
  {
    id: 7,
    name: 'طقم جرانيت تركي أصلي للطهي 10 قطع',
    category: 'housewares',
    categoryName: 'أدوات منزلية',
    description: 'طبقات طلاء غير لاصقة خالية من المواد الضارة، مقابض عازلة للحرارة وتوزيع حراري متوازن.',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&q=80',
    badge: 'جرانيت فاخر صحي',
    features: ['خالٍ تماماً من PFOA', 'قاعدة سميكة متينة', 'سهل التنظيف وغسيل آمن']
  },
  {
    id: 8,
    name: 'ديب فريزر رأسي 6 درج ديجيتال نوفروست',
    category: 'refrigerators',
    categoryName: 'ثلاجات وديب فريزر',
    description: 'أدراج واسعة وشفافة لسهولة الرؤية والترتيب، شاشة تحكم خارجية وضبط دقيق للتجميد السريع.',
    image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=600&q=80',
    badge: 'تجميد فائق السرعة',
    features: ['نظام عزل فائق للحفاظ على التبريد', 'إضاءة داخلية LED', 'ضمان الوكيل المعتمد']
  }
];

/**
 * فلترة المنتجات حسب القسم المحدد
 */
export function filterProducts(products: Product[], categoryId: string): Product[] {
  if (!categoryId || categoryId === 'all') {
    return products;
  }
  return products.filter((p) => p.category === categoryId);
}

/**
 * إنشاء رابط واتساب للاستفسار عن منتج معين
 */
export function generateWhatsAppUrl(productName: string, phone: string = WHATSAPP_PHONE): string {
  const cleanName = productName.trim();
  const message = `مرحباً مول الشناوي (فرع السنطة)، أود الاستفسار عن تفاصيل وسعر: ${cleanName}`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${encoded}`;
}

/**
 * التحقق من كفاءة وسلامة بيانات المنتجات
 */
export function validateProductData(product: Partial<Product>): boolean {
  return (
    typeof product.name === 'string' && product.name.trim().length > 0 &&
    typeof product.category === 'string' && product.category.trim().length > 0 &&
    typeof product.description === 'string' && product.description.trim().length > 0 &&
    typeof product.image === 'string' && product.image.trim().length > 0
  );
}

/**
 * إضافة منتج جديد
 */
export function addProduct(products: Product[], newProduct: Omit<Product, 'id'>): Product[] {
  if (!validateProductData(newProduct)) {
    throw new Error('بيانات المنتج غير مكتملة');
  }
  const nextId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
  const product: Product = {
    ...newProduct,
    id: nextId,
    features: Array.isArray(newProduct.features) && newProduct.features.length > 0 
      ? newProduct.features 
      : ['ضمان معتمد', 'أصلي 100%']
  };
  return [product, ...products];
}

/**
 * تعديل منتج قائم
 */
export function updateProduct(products: Product[], updated: Product): Product[] {
  if (!validateProductData(updated)) {
    throw new Error('بيانات التعديل غير صالحة');
  }
  return products.map(p => (p.id === updated.id ? { ...p, ...updated } : p));
}

/**
 * حذف منتج
 */
export function deleteProduct(products: Product[], id: number): Product[] {
  return products.filter(p => p.id !== id);
}

/**
 * التحقق من رمز مرور لوحة الإدارة
 * الرمز الافتراضي: 0000
 */
export const DEFAULT_ADMIN_PIN = '0000';
export function verifyAdminPin(inputPin: string, correctPin: string = DEFAULT_ADMIN_PIN): boolean {
  return typeof inputPin === 'string' && inputPin.trim() === correctPin.trim();
}

