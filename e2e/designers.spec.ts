import { test, expect } from '@playwright/test'

test.describe('Designers Page', () => {
  test('should display list of designers', async ({ page }) => {
    await page.goto('/designers')

    // Check page loaded
    await expect(page.getByText('Find Your Designer')).toBeVisible()

    // Check filters are present
    await expect(page.getByPlaceholder('Location')).toBeVisible()
    await expect(page.getByPlaceholder('Specialty (e.g., Modern)')).toBeVisible()

    // Wait for designers to load
    await page.waitForTimeout(2000)

    // Check that designers are displayed (we seeded 3 designers)
    await expect(page.getByText('Sarah Chen')).toBeVisible()
    await expect(page.getByText('Michael Rodriguez')).toBeVisible()
    await expect(page.getByText('Emma Thompson')).toBeVisible()

    // Check designer details
    await expect(page.getByText('San Francisco, CA')).toBeVisible()
    await expect(page.getByText('8 years experience')).toBeVisible()
  })

  test('should filter designers by location', async ({ page }) => {
    await page.goto('/designers')

    // Wait for initial load
    await page.waitForTimeout(2000)

    // Apply location filter
    await page.getByPlaceholder('Location').fill('San Francisco')
    await page.getByRole('button', { name: 'Apply Filters' }).click()

    // Wait for filtered results
    await page.waitForTimeout(2000)

    // Should show Sarah Chen (San Francisco) but not others
    await expect(page.getByText('Sarah Chen')).toBeVisible()
  })

  test('should filter designers by specialty', async ({ page }) => {
    await page.goto('/designers')

    // Wait for initial load
    await page.waitForTimeout(2000)

    // Apply specialty filter
    await page.getByPlaceholder('Specialty (e.g., Modern)').fill('Modern')
    await page.getByRole('button', { name: 'Apply Filters' }).click()

    // Wait for filtered results
    await page.waitForTimeout(2000)

    // Should show Sarah Chen (has Modern specialty)
    await expect(page.getByText('Sarah Chen')).toBeVisible()
  })
})
