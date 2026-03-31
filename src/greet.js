/**
 * Returns a personalized greeting message.
 * @param {string} name - The name to greet.
 * @returns {string} A greeting string.
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    throw new TypeError('name must be a non-empty string');
  }
  return `Hello, ${name}! Welcome to Practice-GitHub-Workflows.`;
}

module.exports = { greet };
