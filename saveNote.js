// ================================================================
function saveNote() {
    let saveBtn = document.querySelectorAll('.saveBtn');
    let text = document.querySelectorAll('.text');

    saveBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            noteSaved(text[i].value, i);
        });
    });
    editBtn[i].style.display = 'flex';
    delBtn[i].style.display = 'flex';
    saveBtn[i].style.display = 'none';
}
