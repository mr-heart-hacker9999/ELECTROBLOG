function openPolicyModal(policyType) {
    const modal = document.getElementById('policyModal');
    const contentContainer = document.getElementById('policy-content');

    // Determine which hidden template to use
    let contentTemplateId = policyType === 'privacy' ? 'privacy-content-template' : 'terms-content-template';
    const contentTemplate = document.getElementById(contentTemplateId);

    if (contentTemplate) {
        // Inject the content into the visible modal area
        contentContainer.innerHTML = contentTemplate.innerHTML;

        // Display the modal using the 'active' class (CSS handles the centering/animation)
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent the main page from scrolling
    }
}

/**
 * Closes the policy modal.
 * @param {Event} event - The click event that triggered the function (optional)
 */
function closePolicyModal(event) {
    const modal = document.getElementById('policyModal');

    // 1. If an event exists, check if the click target was the content box itself. 
    // If it was, we prevent closing (only clicking the backdrop or 'X' should close it).
    if (event && event.target.id !== 'policyModal' && !event.target.classList.contains('close-btn')) {
        return;
    }

    // 2. Hide the modal and restore scrolling
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Optional: Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape" && document.getElementById('policyModal').classList.contains('active')) {
        closePolicyModal();
    }
});


function myfunction() {
    if (window.history.length > 1) {
        window.history.back();
    } else {
        // कोई fallback URL (home या desired page)
        window.location.href = '/index.html';
    }
}