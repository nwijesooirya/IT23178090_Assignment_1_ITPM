import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
});

async function translateAndExpect(
  page: Page,
  inputText: string,
  expectedText: string
) {
  const input = page.getByPlaceholder('Input Your Singlish Text Here.');
  const output = page.locator('div.bg-slate-50').first();

  await input.fill(inputText);

  // Wait until translation appears (prevents empty output failures)
  await expect(output).not.toHaveText('', { timeout: 15000 });

  await expect(output).toHaveText(expectedText);
}

// ==========================================
// 1. Positive functional cases
// ==========================================

test('Pos_Fun_0001: Convert simple daily action sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama navasiilanthe yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම නවසීලන්තෙ යනවා');
});

test('Pos_Fun_0002: Convert present tense activity', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api vaththee vaeda karanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි වත්තේ වැඩ කරනවා');
});

test('Pos_Fun_0003: Convert future tense plan', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama heta piinanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම හෙට පීනනවා');
});

test('Pos_Fun_0004: Convert past tense statement', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('api iiyee chaarikaavak giyaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අපි ඊයේ චාරිකාවක් ගියා');
});

test('Pos_Fun_0005: Convert compound sentence with connector', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama banis kanna yanavaa saha passe kathaava ahagannavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම බනිස් කන්න යනවා සහ පස්සෙ කතාව අහගන්නවා');
});

test('Pos_Fun_0006: Convert complex sentence with reason', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vahina nisaa api koochchiye yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වහින නිසා අපි කෝච්චියෙ යනවා');
});

test('Pos_Fun_0007: Convert interrogative question', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaa kavadhadha naanne?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයා කවදද නාන්නෙ?');
});

test('Pos_Fun_0008: Convert imperative command', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('issarahata yanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඉස්සරහට යන්න');
});

test('Pos_Fun_0009: Convert positive confirmation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('eyaa eevaa hariyata bonavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('එයා ඒවා හරියට බොනවා');
});

test('Pos_Fun_0010: Convert negative statement', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama ehema balanne naehae');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම එහෙම බලන්නෙ නැහැ');
});

test('Pos_Fun_0011: Convert greeting expression', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('suba dhahavalak!');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුබ දහවලක්!');
});

test('Pos_Fun_0012: Command - Convert polite request form', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('karuNaakaralaa mata podi dheyak paehadhili karanna puluvandha?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කරුණාකරලා මට පොඩි දෙයක් පැහදිලි කරන්න පුලුවන්ද?');
});

test('Pos_Fun_0013: Informal language', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('anee eeka balaaganin');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අනේ ඒක බලාගනින්');
});

test('Pos_Fun_0014: Convert day-to-day expression', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('kamalta nidhimathayi');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('කමල්ට නිදිමතයි');
});

test('Pos_Fun_0015: Convert multi-word phrase pattern', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('hariyata vaeda karanna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('හරියට වැඩ කරන්න');
});

test('Pos_Fun_0016: Convert joined words input', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('naamalgedharayanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('නාමල්ගෙදරයනවා');
});

test('Pos_Fun_0017: Convert repeated emphasis words', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('hari lassanayi lassanayi');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('හරි ලස්සනයි ලස්සනයි');
});

test('Pos_Fun_0018: Convert mixed Singlish with English terms', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('Anil office yanna kalin email ekak evannam');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අනිල් office යන්න කලින් email එකක් එවන්නම්');
});

test('Pos_Fun_0019: Convert sentence with brand name', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('sikuradhaa Zoom meeting ekak thiyenavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සිකුරදා Zoom meeting එකක් තියෙනවා');
});

test('Pos_Fun_0020: Convert sentence with abbreviations', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('sunilge OTP eka laebunaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('සුනිල්ගෙ OTP එක ලැබුනා');
});

test('Pos_Fun_0021: Convert sentence with punctuation', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('oyaa ennee naedhdha kavadhavath?');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('ඔයා එන්නේ නැද්ද කවදවත්?');
});

test('Pos_Fun_0022: Convert sentence with time format', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('meeting eka udhea 7.30ta patan gannavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('meeting එක උදේ 7.30ට පටන් ගන්නවා');
});

test('Pos_Fun_0023: Convert medium paragraph style input', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('adha udhaeesana mama market giyaa. passe meeting ekak thibunaa saha heta karanna thiyana vaeda tika plan karaa. Havasa chithrapatiyak balanna giyaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('අද උදෑසන මම market ගියා. පස්සෙ meeting එකක් තිබුනා සහ හෙට කරන්න තියන වැඩ ටික plan කරා. හවස චිත්‍රපටියක් බලන්න ගියා');
});

test('Pos_Fun_0024: Convert medium to long paragraph style input with line breaks', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama colombo vaedata yanna hadhanne.');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම colombo වැඩට යන්න හදන්නෙ.');
});

// ==========================================
// 2. Positive UI scenario case
// ==========================================

test('Pos_UI_0001: Verify output is displayed with no issues', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama pansalata yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම පන්සලට යනවා');
});

// ==========================================
// 3. Negative functional test cases
// ==========================================

test('Neg_Fun_0001: Convert full length of English sentence', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('I will attend the meeting tomorrow');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('I will attend the meeting tomorrow');
});

test('Neg_Fun_0002: Convert sentence which include English words ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama sadhuniva meet venna yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම සදුනිව meet වෙන්න යනවා');
});

test('Neg_Fun_0003: Convert word with complex Sinhala consonant cluster ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mama kuBAura balaaganna yanavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මම කුඹුර බලාගන්න යනවා');
});

test('Neg_Fun_0004: Convert sentence containing email address ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata details email karanna, testUser123@gmail.com');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට details email කරන්න, test.user123@gmail.com');
});

test('Neg_Fun_0005: Convert sentence containing Password ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mage password eka Abc@123 kiyala thiyaaganna');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මගේ password එක Abc@123 කියලා තියාගන්න');
});

test('Neg_Fun_0006: Convert sentence with location name ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('mata Sri Jayawardenepura kotte yanna loku aasaavak thiyenavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('මට Sri Jayawardenepura kotte යන්න ලොකු ආසාවක් තියෙනවා');
});

test('Neg_Fun_0007: Convert sentence containing astronomical proper noun ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('neptune planet eka suuryayaata aeethinma pihitaa aetha');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('neptune planet එක සූර්යයාට ඈතින්ම පිහිටා ඇත');
});

test('Neg_Fun_0008: Convert sentence containing chemical element name ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('hydrogen gas eka vathura hadhanna avashYAya');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('hydrogen gas එක වතුර හදන්න අවශ්‍යය');
});

test('Neg_Fun_0009: Convert sentence containing mathematical expression ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('2x + 5y = 10 kiyala equation ekak thiyenavaa');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('2x + 5y = 10 කියල equation එකක් තියෙනවා');
});

test('Neg_Fun_0010: Convert sentence containing scientific unit and formula ', async ({ page }) => {
  await page.getByPlaceholder('Input Your Singlish Text Here.').fill('vathura boil venne 212°F ta');
  await expect(page.locator('div.bg-slate-50').first()).toHaveText('වතුර boil වෙන්නෙ 212°F ට');
});
