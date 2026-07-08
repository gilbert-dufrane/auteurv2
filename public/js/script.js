document.querySelectorAll(".book-summary").forEach(function (el) {
  const maxLength = 140; // Adjust lenght as needed
  let text = el.textContent.trim();
  if (text.length > maxLength) {
    let truncated = text.slice(0, maxLength);

    // Find the last sentence-ending punctuation before maxLength
    let lastSentenceEnd = Math.max(
      truncated.lastIndexOf("."),
      truncated.lastIndexOf("!"),
      truncated.lastIndexOf("?"),
    );

    // If a sentence end is found and not at the very beginning, truncate there
    if (lastSentenceEnd > 20) {
      // 20 to avoid very short "sentences"
      truncated = truncated.slice(0, lastSentenceEnd + 1);
    } else {
      // Fallback: truncate at last space (word boundary)
      truncated = truncated.slice(0, truncated.lastIndexOf(" "));
    }

    el.textContent = truncated + "...";
  }
});
