import test from 'node:test';
import assert from 'node:assert/strict';
import {
  PRODUCTS_DATA,
  CATEGORIES,
  filterProducts,
  generateWhatsAppUrl,
  validateProductData,
  addProduct,
  updateProduct,
  deleteProduct,
  verifyAdminPin,
  WHATSAPP_PHONE,
  PHONE_NUMBER
} from '../src/products-logic.ts';

test('business contact details are valid and formatted correctly', () => {
  assert.equal(PHONE_NUMBER, '01012164433');
  assert.equal(WHATSAPP_PHONE, '201012164433');
});

test('products data has valid records satisfying structure', () => {
  assert.ok(PRODUCTS_DATA.length >= 7, 'Should have products across multiple categories');
  for (const product of PRODUCTS_DATA) {
    assert.equal(validateProductData(product), true, `Product #${product.id} must be valid`);
  }
});

test('categories list includes all expected store departments', () => {
  const catIds = CATEGORIES.map((c) => c.id);
  assert.ok(catIds.includes('all'));
  assert.ok(catIds.includes('refrigerators'));
  assert.ok(catIds.includes('washers'));
  assert.ok(catIds.includes('cookers'));
  assert.ok(catIds.includes('ac'));
  assert.ok(catIds.includes('small-appliances'));
  assert.ok(catIds.includes('tvs'));
  assert.ok(catIds.includes('housewares'));
});

test('filterProducts returns all products when category is all or empty', () => {
  const allRes = filterProducts(PRODUCTS_DATA, 'all');
  assert.equal(allRes.length, PRODUCTS_DATA.length);

  const emptyRes = filterProducts(PRODUCTS_DATA, '');
  assert.equal(emptyRes.length, PRODUCTS_DATA.length);
});

test('filterProducts correctly filters products by category', () => {
  const refRes = filterProducts(PRODUCTS_DATA, 'refrigerators');
  assert.ok(refRes.length > 0);
  for (const p of refRes) {
    assert.equal(p.category, 'refrigerators');
  }

  const tvRes = filterProducts(PRODUCTS_DATA, 'tvs');
  assert.ok(tvRes.length > 0);
  for (const p of tvRes) {
    assert.equal(p.category, 'tvs');
  }
});

test('generateWhatsAppUrl builds valid wa.me URL with encoded product inquiry', () => {
  const productName = 'ثلاجة نوفروست 16 قدم';
  const url = generateWhatsAppUrl(productName);
  assert.ok(url.startsWith('https://wa.me/201012164433?text='));
  assert.ok(url.includes(encodeURIComponent('مول الشناوي')));
  assert.ok(url.includes(encodeURIComponent(productName)));
});

test('addProduct appends new product with unique ID', () => {
  const initialCount = PRODUCTS_DATA.length;
  const newProd = {
    name: 'شاشة سامسونج 55 بوصة سمارت',
    category: 'tvs',
    categoryName: 'شاشات وتلفزيونات',
    description: 'شاشة ممتازة بدقة عالية 4K',
    image: '/assets/aistudio/image_8c0d89f7.png',
    features: ['ضمان 3 سنوات', 'ريموت ماجيك']
  };
  const updated = addProduct(PRODUCTS_DATA, newProd);
  assert.equal(updated.length, initialCount + 1);
  assert.equal(updated[0].name, 'شاشة سامسونج 55 بوصة سمارت');
  assert.ok(updated[0].id > 0);
});

test('updateProduct modifies existing item without affecting other items', () => {
  const original = PRODUCTS_DATA[0];
  const modified = { ...original, name: 'ثلاجة نوفروست معدلة حديثاً' };
  const updatedList = updateProduct(PRODUCTS_DATA, modified);
  assert.equal(updatedList.find(p => p.id === original.id)?.name, 'ثلاجة نوفروست معدلة حديثاً');
  assert.equal(updatedList.find(p => p.id === PRODUCTS_DATA[1].id)?.name, PRODUCTS_DATA[1].name);
});

test('deleteProduct removes item by ID', () => {
  const targetId = PRODUCTS_DATA[0].id;
  const updatedList = deleteProduct(PRODUCTS_DATA, targetId);
  assert.equal(updatedList.length, PRODUCTS_DATA.length - 1);
  assert.equal(updatedList.some(p => p.id === targetId), false);
});

test('verifyAdminPin checks secret PIN correctly with default 0000 and custom pin', () => {
  assert.equal(verifyAdminPin('0000'), true);
  assert.equal(verifyAdminPin(' 0000 '), true);
  assert.equal(verifyAdminPin('1234'), false);
  assert.equal(verifyAdminPin(''), false);
  assert.equal(verifyAdminPin('9999', '9999'), true);
});

