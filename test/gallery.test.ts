import test from 'node:test';
import assert from 'node:assert/strict';
import {
  GALLERY_DATA,
  GALLERY_CATEGORIES,
  filterGallery,
  getNextLightboxIndex,
  getPrevLightboxIndex
} from '../src/gallery-logic.ts';

test('gallery data has items with images and titles', () => {
  assert.ok(GALLERY_DATA.length >= 6);
  for (const item of GALLERY_DATA) {
    assert.ok(item.id > 0);
    assert.ok(item.title.length > 0);
    assert.ok(item.image.startsWith('http'));
    assert.ok(item.category.length > 0);
  }
});

test('gallery categories list covers all and departments', () => {
  const ids = GALLERY_CATEGORIES.map((c) => c.id);
  assert.ok(ids.includes('all'));
  assert.ok(ids.includes('showroom'));
  assert.ok(ids.includes('cooling'));
});

test('filterGallery returns all when category is all', () => {
  const res = filterGallery(GALLERY_DATA, 'all');
  assert.equal(res.length, GALLERY_DATA.length);
});

test('filterGallery filters correctly by department', () => {
  const coolingItems = filterGallery(GALLERY_DATA, 'cooling');
  assert.ok(coolingItems.length > 0);
  for (const it of coolingItems) {
    assert.equal(it.category, 'cooling');
  }
});

test('getNextLightboxIndex cycles correctly across bounds', () => {
  const total = 5;
  assert.equal(getNextLightboxIndex(0, total), 1);
  assert.equal(getNextLightboxIndex(3, total), 4);
  assert.equal(getNextLightboxIndex(4, total), 0); // cycles back to start
});

test('getPrevLightboxIndex cycles correctly backwards', () => {
  const total = 5;
  assert.equal(getPrevLightboxIndex(3, total), 2);
  assert.equal(getPrevLightboxIndex(1, total), 0);
  assert.equal(getPrevLightboxIndex(0, total), 4); // cycles back to last
});
