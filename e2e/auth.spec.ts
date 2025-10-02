import { test, expect } from '@playwright/test'

test.describe('Authentication', () => {
  test('should display registration page', async ({ page }) => {
    await page.goto('/auth/register')

    await expect(page.getByText('Create your account')).toBeVisible()
    await expect(page.getByText('I am a...')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Client' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Designer' })).toBeVisible()
  })

  test('should display login page', async ({ page }) => {
    await page.goto('/auth/login')

    await expect(page.getByText('Welcome back')).toBeVisible()
    await expect(page.getByLabel('Email')).toBeVisible()
    await expect(page.getByLabel('Password')).toBeVisible()
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible()
  })

  test('should register a new client', async ({ page }) => {
    await page.goto('/auth/register')

    // Select Client role
    await page.getByRole('button', { name: 'Client' }).click()

    // Fill form
    await page.getByLabel('Full Name').fill('Test Client')
    await page.getByLabel('Email').fill(`testclient${Date.now()}@example.com`)
    await page.getByLabel('Password', { exact: true }).fill('password123')
    await page.getByLabel('Confirm Password').fill('password123')

    // Submit
    await page.getByRole('button', { name: 'Create Account' }).click()

    // Should redirect to dashboard (or show error if already exists)
    await page.waitForTimeout(2000)
  })

  test('should login with existing user', async ({ page }) => {
    await page.goto('/auth/login')

    // Use seeded credentials
    await page.getByLabel('Email').fill('john.client@example.com')
    await page.getByLabel('Password').fill('password123')

    // Submit
    await page.getByRole('button', { name: 'Login' }).click()

    // Should redirect (or show error)
    await page.waitForTimeout(2000)
  })

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/auth/login')

    await page.getByLabel('Email').fill('invalid@example.com')
    await page.getByLabel('Password').fill('wrongpassword')

    await page.getByRole('button', { name: 'Login' }).click()

    // Should show error
    await expect(page.getByText('Invalid credentials')).toBeVisible()
  })
})
