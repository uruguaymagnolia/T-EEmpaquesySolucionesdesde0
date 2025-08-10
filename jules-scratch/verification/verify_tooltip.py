from playwright.sync_api import Page, expect

def test_tooltip(page: Page):
    """
    This test verifies that the tooltip appears on hover.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:9003")

    # 2. Act: Scroll to the footer and hover over the Facebook icon.
    footer = page.locator("footer")
    footer.scroll_into_view_if_needed()

    facebook_icon = page.locator('a[aria-label="Facebook"]')
    facebook_icon.hover()

    # 3. Assert: Check if the tooltip is visible
    tooltip = page.locator('div[role="tooltip"]')

    # Wait for the tooltip to appear
    page.wait_for_selector('div[role="tooltip"]', state='visible')

    expect(tooltip).to_be_visible()
    expect(tooltip).to_have_text("Facebook")

    # 4. Screenshot: Capture the tooltip for visual verification.
    page.screenshot(path="jules-scratch/verification/verification.png")
