import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('should display the landing page correctly', async ({ page }) => {
    await page.goto('/')

    // Check header
    await expect(page.getByText('RenovateMatch')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Login' })).toBeVisible()
    await expect(page.getByRole('link', { name: 'Get Started' })).toBeVisible()

    // Check hero section
    await expect(page.getByText('Transform Your Space Without the Stress')).toBeVisible()
    await expect(page.getByRole('link', { name: 'Find a Designer' })).toBeVisible()

    // Check features section
    await expect(page.getByText('Expert Guidance')).toBeVisible()
    await expect(page.getByText('Affordable Packages')).toBeVisible()
    await expect(page.getByText('Time-Saving Process')).toBeVisible()

    // Check package pricing
    await expect(page.getByText('Consultation')).toBeVisible()
    await expect(page.getByText('$150')).toBeVisible()
    await expect(page.getByText('Design Package')).toBeVisible()
    await expect(page.getByText('$499')).toBeVisible()
    await expect(page.getByText('Full Service')).toBeVisible()
    await expect(page.getByText('$1,499+')).toBeVisible()
  })

  test('should navigate to designers page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Find a Designer' }).first().click()
    await expect(page).toHaveURL('/designers')
    await expect(page.getByText('Find Your Designer')).toBeVisible()
  })

  test('should navigate to registration page', async ({ page }) => {
    await page.goto('/')
    await page.getByRole('link', { name: 'Get Started' }).click()
    await expect(page).toHaveURL('/auth/register')
    await expect(page.getByText('Create your account')).toBeVisible()
  })
})
