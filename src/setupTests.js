// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock IntersectionObserver for tests (not available in jsdom)
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe(el) {
    // Immediately trigger as visible so fade-in content is rendered
    this.callback([{ isIntersecting: true, target: el }]);
  }
  unobserve() {}
  disconnect() {}
}

window.IntersectionObserver = MockIntersectionObserver;

// Mock matchMedia for tests (not available in jsdom)
window.matchMedia =
  window.matchMedia ||
  function (query) {
    return {
      matches: false,
      media: query,
      addEventListener: function () {},
      removeEventListener: function () {},
    };
  };
