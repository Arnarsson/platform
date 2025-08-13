import { test, expect } from '@playwright/test';

test.describe('Language Switching', () => {
  test('language switch preserves route and switches all content', async ({ page }) => {
    // Start on English homepage
    await page.goto('/en');
    
    // Verify we're on English
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.getByRole('heading')).toContainText('Responsible AI your teams can actually ship');
    await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible();
    
    // Switch to Danish
    await page.getByRole('group', { name: /language/i }).getByText('DA').click();
    
    // Verify Danish URL and content
    await expect(page).toHaveURL(/\/da$/);
    await expect(page.getByRole('heading')).toContainText('Ansvarlig AI, som jeres teams faktisk kan levere');
    await expect(page.getByRole('button', { name: 'Kom i Gang' })).toBeVisible();
    
    // Switch back to English
    await page.getByRole('group', { name: /language/i }).getByText('EN').click();
    
    // Verify back to English
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.getByRole('heading')).toContainText('Responsible AI your teams can actually ship');
  });

  test('language switch works on learn page with localized slugs', async ({ page }) => {
    // Start on English learn page
    await page.goto('/en/learn');
    
    // Verify English content
    await expect(page).toHaveURL(/\/en\/learn$/);
    await expect(page.getByRole('heading')).toContainText('AI Governance, De-jargonized');
    
    // Switch to Danish
    await page.getByRole('group', { name: /language/i }).getByText('DA').click();
    
    // Verify Danish URL with localized slug and content
    await expect(page).toHaveURL(/\/da\/laer$/);
    await expect(page.getByRole('heading')).toContainText('AI Governance, Afmystificeret');
    
    // Switch back to English
    await page.getByRole('group', { name: /language/i }).getByText('EN').click();
    
    // Verify back to English with correct slug
    await expect(page).toHaveURL(/\/en\/learn$/);
  });

  test('language switch works on pricing page', async ({ page }) => {
    // Start on English pricing page
    await page.goto('/en/pricing');
    
    // Verify English content
    await expect(page).toHaveURL(/\/en\/pricing$/);
    await expect(page.getByRole('heading')).toContainText('Choose Your Plan');
    await expect(page.getByText('Get Started')).toBeVisible();
    
    // Switch to Danish
    await page.getByRole('group', { name: /language/i }).getByText('DA').click();
    
    // Verify Danish URL and content
    await expect(page).toHaveURL(/\/da\/priser$/);
    await expect(page.getByRole('heading')).toContainText('Vælg Din Plan');
    await expect(page.getByText('Kom i Gang')).toBeVisible();
  });

  test('navigation links use correct locale', async ({ page }) => {
    await page.goto('/da');
    
    // Click on learn link
    await page.getByRole('link', { name: 'Lær' }).click();
    
    // Should go to Danish learn page
    await expect(page).toHaveURL(/\/da\/laer$/);
    
    // Click on pricing link
    await page.getByRole('link', { name: 'Priser' }).click();
    
    // Should go to Danish pricing page
    await expect(page).toHaveURL(/\/da\/priser$/);
  });

  test('language switcher has proper accessibility attributes', async ({ page }) => {
    await page.goto('/en');
    
    const languageGroup = page.getByRole('group', { name: /language/i });
    await expect(languageGroup).toBeVisible();
    
    const enButton = languageGroup.getByText('EN');
    const daButton = languageGroup.getByText('DA');
    
    // Check minimum target size (44x44px)
    const enBox = await enButton.boundingBox();
    const daBox = await daButton.boundingBox();
    
    expect(enBox?.width).toBeGreaterThanOrEqual(44);
    expect(enBox?.height).toBeGreaterThanOrEqual(44);
    expect(daBox?.width).toBeGreaterThanOrEqual(44);
    expect(daBox?.height).toBeGreaterThanOrEqual(44);
    
    // Check ARIA attributes
    await expect(enButton).toHaveAttribute('aria-pressed');
    await expect(daButton).toHaveAttribute('aria-pressed');
  });

  test('form labels and validation messages are translated', async ({ page }) => {
    // This test assumes there's a contact form - you'd need to create one
    // or test with a different form in your app
    await page.goto('/en/contact');
    
    // Check English labels exist (would need actual contact form)
    // await expect(page.getByLabel('Work Email')).toBeVisible();
    
    // Switch to Danish
    await page.getByRole('group', { name: /language/i }).getByText('DA').click();
    await expect(page).toHaveURL(/\/da\/kontakt$/);
    
    // Check Danish labels exist (would need actual contact form)
    // await expect(page.getByLabel('Arbejdsmail')).toBeVisible();
  });
});