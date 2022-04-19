
const workContainerEl = $('#work-container');

workContainerEl.on('click', function(event){
    const articleParent = $(event.target).closest('article');
    const url = articleParent.data('url');
    openNewTab(url);
})

function openNewTab(url){
    const win = window.open(url, '_blank');
    if (win) {
    win.focus();
    } else {
    alert('Please allow popups for this website');
    }
}
