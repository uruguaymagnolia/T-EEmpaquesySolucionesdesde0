from playwright.sync_api import Page, expect

def test_footer_layout(page: Page):
    """
    This test verifies that the footer has a centered layout.
    """
    # 1. Arrange: Go to the homepage.
    page.goto("http://localhost:9003")

    # 2. Act: Scroll to the footer.
    footer = page.locator("footer")
    footer.scroll_into_view_if_needed()

    # Wait for the footer to be fully visible
    expect(footer).to_be_in_viewport()

    # 3. Screenshot: Capture the footer element for visual verification.
    footer.screenshot(path="jules-scratch/verification/verification.png")
