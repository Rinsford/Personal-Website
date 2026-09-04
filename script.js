const input = document.querySelector(".terminal-input");
const cursor = document.querySelector(".cursor");

function positionCursor() {
	if (!input || !cursor) {
		return;
	}

	const styles = getComputedStyle(input);
	const canvas = document.createElement("canvas");
	const context = canvas.getContext("2d");

	if (!context) {
		return;
	}

	context.font = `${styles.fontWeight} ${styles.fontSize} ${styles.fontFamily}`;
	const textWidth = context.measureText(input.value).width;
	cursor.style.left = `${input.offsetLeft + textWidth}px`;
}

input?.addEventListener("input", positionCursor);
input?.addEventListener("scroll", positionCursor);
window.addEventListener("resize", positionCursor);
positionCursor();
